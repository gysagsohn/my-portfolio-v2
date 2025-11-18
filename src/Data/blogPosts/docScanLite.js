import docScanImage from '../../assets/doc-scan-lite.png';

export const docScanLite = {
  title: "Doc Scan Lite – My First LLM API Project (And What It Cost Me)",
  summary: "Built a document scanner with AI vision for a job interview. Learned about TypeScript, API costs, and why understanding requirements matters more than perfect code.",
  image: docScanImage,
  slug: "doc-scan-lite",
  date: "2025-11-19",
  type: "project",
  body: `
    <h2>Why I Built This</h2>
    <p>This was my first project built for a job interview. The brief was simple: create a tool that extracts metadata from documents (PDFs and images) using AI. Think driver licenses, passports, insurance certificates - documents where you need specific fields pulled out quickly.</p>
    <p>It was also my first time working with an LLM API in production. I'd played around with ChatGPT plenty, but actually integrating OpenAI's Vision API into an app? That was new territory.</p>
    <p>What started as a quick interview project turned into a proper learning experience about API costs, TypeScript, and most importantly understanding what the client actually wants.</p>

    <h2>Live App</h2>
    <p>
      <a href="https://doc-scan-ai.netlify.app/" target="_blank">
        doc-scan-ai.netlify.app
      </a>
      &nbsp;—&nbsp;
      <strong><a href="https://doc-scan-ai.netlify.app/" target="_blank" style="text-decoration: underline;">Try It Now</a></strong>
    </p>
    <p>
      <a href="https://github.com/gysagsohn/doc-scan-lite-client" target="_blank">
        GitHub Repository
      </a>
    </p>

    <h2>What It Does</h2>
    <p>The core functionality is straightforward:</p>
    <ul>
      <li>Upload a PDF or image (driver license, passport, work certificate, insurance cert)</li>
      <li>OpenAI Vision API extracts key fields (name, license number, expiry date, etc.)</li>
      <li>Data is stored locally in your browser (localStorage)</li>
      <li>Export/import via CSV</li>
      <li>Hash-based duplicate detection (more on this later)</li>
      <li>Google Sheets integration (hidden admin mode)</li>
    </ul>

    <p>Sounds simple enough, right? Well...</p>

    <h2>The First Build: Moving Fast (Maybe Too Fast)</h2>
    <p>I built the initial version in JavaScript. The goal was speed, get something working that demonstrated I could integrate an AI API, handle file uploads, and build a decent UI.</p>
    <p>I got it working. It extracted data. It looked clean. I shipped it within the timeline.</p>
    <p>Then I got the feedback: they were expecting something simpler. Much simpler. Like 1-2 hours simple.</p>

    <h2>The Lesson: Read the Room (and the Requirements)</h2>
    <p>Here's what I learned the hard way: there's a difference between a <strong>"build it fast with AI assistance"</strong> challenge and a <strong>"show us your production code"</strong> assessment.</p>
    <p>I treated it like the latter. I built:</p>
    <ul>
      <li>Duplicate detection with SHA-256 hashing</li>
      <li>CSV export/import functionality</li>
      <li>Google Sheets integration</li>
      <li>Comprehensive error handling</li>
      <li>Mobile-responsive UI</li>
      <li>Detailed README documentation</li>
    </ul>

    <p>What they actually wanted was a lightweight proof of concept demonstrating:</p>
    <ul>
      <li>Understanding of AI prompting</li>
      <li>Quick integration with OpenAI's Vision API</li>
      <li>Basic functionality working end-to-end</li>
      <li>Documentation of the approach</li>
    </ul>

    <p>The feedback was clear but fair: the solution felt over-engineered for their lean, startup-style build process.</p>


    <h2>Why This Happened</h2>
    <p>Looking back, a few things contributed:</p>
    <ul>
      <li>I focused on what I thought would impress rather than what was asked for</li>
      <li>I heard "it took our developer 10 hours" and assumed complexity</li>
      <li>I didn't clarify expectations before diving in</li>
      <li>I was eager to show off skills rather than solve the specific problem</li>
    </ul>

    <p>The interviewer was kind enough to share their process: they'd rebuilt a POC version themselves in 20 minutes using Cursor and Claude. Their prompt was literally two sentences asking for a simple upload → extract → display flow.</p>
    <p>That's when it clicked: this wasn't a full-stack assessment. It was about working efficiently with AI tools and matching solution to scope.</p>

    <h2>But I Still Learned a Ton</h2>
    <p>I didn't get the job. But I got something arguably more valuable: a solid portfolio project and real lessons about client needs.</p>
    <p>Since I'd already built it, I decided to treat it as a learning opportunity and refactor it properly.</p>

    <h2>The Refactor: JavaScript → TypeScript</h2>
    <p>Converting the entire codebase to TypeScript was one of those tasks that sounds straightforward until you're knee-deep in it.</p>
    <p>The process forced me to really understand what every piece of code was doing. You can't just slap <code>any</code> types everywhere and call it TypeScript - well, you can, but that defeats the point.</p>

    <p>Here's an example of properly typed interfaces for the document data:</p>

    <pre><code>
interface DocumentData {
  id: string;
  fileName: string;
  fileType: 'pdf' | 'image';
  extractedData: Record<string, string>;
  timestamp: number;
  hash: string;
}

interface APIResponse {
  success: boolean;
  data?: Record<string, string>;
  error?: string;
  tokensUsed?: number;
}
    </code></pre>

    <p>This kind of structure makes everything more explicit. When you're dealing with API responses, file types, and stored data, having clear interfaces prevents entire categories of bugs.</p>

    <h2>Eliminating "AI Tells"</h2>
    <p>One of the biggest lessons from this refactor was learning to spot "AI tells" - signs that code was generated but not properly reviewed.</p>
    <p><strong>Things I removed:</strong></p>
    <ul>
      <li>Redundant JSDoc comments (TypeScript makes many of these unnecessary)</li>
      <li>File path comments at the top of every file</li>
      <li>Inconsistent file extensions (.ts vs .tsx)</li>
      <li>Over-explained obvious code</li>
      <li>Generic variable names that were technically correct but not contextual</li>
    </ul>

    <p>This wasn't about hiding AI usage - I use AI tools extensively. It was about code review. Professional developers review and clean up their code, whether it came from AI, Stack Overflow, or their own brain at 2am.</p>

    <h2>The $20 Lesson: API Cost Optimization</h2>
    <p>Here's where things got expensive.</p>
    <p>OpenAI's Vision API has a <code>detail</code> parameter with two options: <code>"high"</code> and <code>"low"</code>.</p>
    <p>I started with <code>"high"</code> because... well, better quality, right?</p>
    <p>Wrong. Or at least, wrong for this use case.</p>

    <p>After running tests on various documents, I discovered:</p>
    <ul>
      <li><strong>High detail mode:</strong> ~$0.85 per document</li>
      <li><strong>Low detail mode:</strong> ~$0.13 per document</li>
      <li><strong>Accuracy difference:</strong> Basically none for structured documents</li>
    </ul>

    <p>That's an <strong>85% cost reduction</strong> with zero quality loss for my use case.</p>

    <p>The lesson: for structured documents like licenses and certificates, low detail mode is more than sufficient. High detail is great for complex images or detailed analysis, but overkill for extracting text fields from standard documents.</p>

    <pre><code>
const response = await fetch("https://api.openai.com/v1/messages", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": \`Bearer \${apiKey}\`
  },
  body: JSON.stringify({
    model: "gpt-4o-mini",
    messages: [{
      role: "user",
      content: [
        {
          type: "image_url",
          image_url: {
            url: base64Image,
            detail: "low" // Changed from "high" - massive cost saving
          }
        },
        {
          type: "text",
          text: extractionPrompt
        }
      ]
    }]
  })
});
    </code></pre>

    <h2>Smart Architecture: Hash Before API</h2>
    <p>Another key optimization was adding SHA-256 hash-based duplicate detection that runs <em>before</em> the API call.</p>
    <p>The logic is simple but effective:</p>
    <ol>
      <li>User uploads a document</li>
      <li>Generate SHA-256 hash of the file</li>
      <li>Check if hash exists in localStorage</li>
      <li>If duplicate → return cached data (zero cost)</li>
      <li>If new → make API call and cache result</li>
    </ol>

    <p>This meant expensive operations only run when necessary. In real usage, people often accidentally upload the same document multiple times. Why pay for that?</p>

    <pre><code>
async function generateFileHash(file: File): Promise<string> {
  const arrayBuffer = await file.arrayBuffer();
  const hashBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}
    </code></pre>

    <h2>Context API: Goodbye Prop Drilling</h2>
    <p>The app needed state management for documents, API responses, and user settings. Initially, I was passing props through multiple layers.</p>
    <p>I refactored to use React's Context API, which cleaned things up significantly:</p>

    <pre><code>
interface DocumentContextType {
  documents: DocumentData[];
  addDocument: (doc: DocumentData) => void;
  deleteDocument: (id: string) => void;
  clearAllDocuments: () => void;
}

const DocumentContext = createContext<DocumentContextType | undefined>(undefined);

export function useDocuments() {
  const context = useContext(DocumentContext);
  if (!context) {
    throw new Error('useDocuments must be used within DocumentProvider');
  }
  return context;
}
    </code></pre>

    <p>Components could now access document state directly without prop chains. Cleaner, more maintainable, and easier to test.</p>

    <h2>What I Actually Learned</h2>
    
    <p><strong>About Requirements:</strong></p>
    <ul>
      <li>Always clarify scope before building - "simple" means different things to different people</li>
      <li>Match your solution to the problem scale - not every task needs production architecture</li>
      <li>Ask questions early - assumptions cost time and opportunity</li>
      <li>Read between the lines: "quick POC" usually means prove the concept, not build the product</li>
    </ul>

    <p><strong>About LLM APIs:</strong></p>
    <ul>
      <li>Test different detail modes - higher isn't always better</li>
      <li>API costs add up fast in production</li>
      <li>Cache aggressively where possible</li>
      <li>Run cheap validations before expensive operations</li>
    </ul>

    <p><strong>About TypeScript:</strong></p>
    <ul>
      <li>Proper types catch bugs at compile time, not runtime</li>
      <li>Interfaces make complex data flows explicit</li>
      <li>Converting existing code forces deep understanding</li>
    </ul>

    <p><strong>About Code Quality:</strong></p>
    <ul>
      <li>AI-generated code needs review just like any other code</li>
      <li>"Works" and "production-ready" are different standards</li>
      <li>Architecture matters: cheap operations before expensive ones</li>
    </ul>

    <h2>Architecture at a Glance</h2>
    <ul>
    <li>Frontend: React + Vite + TypeScript</li>
    <li>State Management: React Context API</li>
    <li>Storage: localStorage (no backend)</li>
    <li>AI: OpenAI GPT-4o-mini Vision API</li>
    <li>Export/Import: CSV (Papaparse)</li>
    <li>Optional Admin Tools: Google Sheets API</li>
    </ul>

    <h2>Final Thoughts</h2>
    <p>I didn't get the job, but I got something better: clarity on how to approach client work.</p>
    <p>The feedback was clear: they wanted something simple and well documented, not something exceptional. That's the real lesson. Sometimes the best solution isn't the most impressive one, it's the one that matches what's actually needed.</p>
    <p>I still finished the project properly. I converted it to TypeScript, optimized the API costs, cleaned up the code, and turned it into a solid portfolio piece. Because even failed interviews can produce good work.</p>
    <p>And honestly? I'm glad I built the full version. I learned way more from over-engineering this than I would have from a 20-minute POC. Now I know both approaches, and more importantly, I know when to use which one.</p>

    <p>If you want to check out the code or try the app yourself, links are at the top. And if you spot something I could improve, let me know. I'm still learning.</p>
  `
};