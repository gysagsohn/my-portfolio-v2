// src/data/blogPosts/readyGroupHandbook.js
import readyGroupHandbookImage from '../../assets/readyGroupHandbook.png';

export const readyGroupHandbook = {
  title: "Project Spotlight: Ready Group Induction Handbook",
  summary: "A look at the digital handbook I built — what it is, why I made it, what I learned, and what’s coming next.",
  image: readyGroupHandbookImage,
  slug: "projects/induction-handbook",
  date: "2024-05-15",
  body: `
    <h2>What I Built</h2>
    <p>This is a frontend-only employee induction handbook for Ready Group. Think of it as a clean, easy-to-navigate internal site (similar to AirMason) that walks new hires through company values, policies, leadership, and more.</p>
    <p><strong>Live site:</strong> <a href="https://readygroup-employeehandbook.netlify.app" target="_blank" rel="noopener noreferrer">readygroup-employeehandbook.netlify.app</a></p>
    <p><strong>I used:</strong></p>
    <ul>
      <li>React + Vite for fast dev + build</li>
      <li>Native CSS with Flexbox for layout control</li>
      <li>LocalStorage-based password gate (no backend)</li>
      <li>Font Awesome for clean iconography</li>
      <li>Figma for layout planning</li>
    </ul>
    <p><strong>The site includes:</strong></p>
    <ul>
      <li>Welcome + company overview sections</li>
      <li>Vision, mission, and core values</li>
      <li>Service offerings + growth goals</li>
      <li>PDF-linked company policies</li>
      <li>Team introductions + contact details</li>
      <li>A final confirmation checklist</li>
    </ul>
    <p>And the best part? It just had its first real use at the company — and passed with flying colours.</p>

    <h2>Why I Made It This Way</h2>
    <p>This started as a design and dev challenge — a fully responsive, password-protected site that mimicked an internal onboarding tool. I wanted to:</p>
    <ul>
      <li>Build something practical and client-facing</li>
      <li>Focus on layout, design consistency, and section flow</li>
      <li>Avoid backend complexity (for now)</li>
      <li>See if I could manage protected content with just frontend tools</li>
    </ul>
    <p><strong>To make it feel smooth and polished, I:</strong></p>
    <ul>
      <li>Created scroll-snapping sections</li>
      <li>Added dropdown navigation</li>
      <li>Used mobile-specific overflow fixes</li>
      <li>Cleaned and organised layout files</li>
    </ul>

    <h2>Challenges & Fixes</h2>
    <ul>
      <li><strong>Responsive layout pain:</strong> Getting scroll + snap to work across devices took fine-tuning (min-height, overflow-y: auto, cleaned CSS file structure).</li>
      <li><strong>Password gate UX:</strong> Used LocalStorage and a custom ProtectedRoute component for redirect handling.</li>
      <li><strong>Spacing bugs:</strong> Fixed bleed between sections by applying conditional padding + per-section layout fixes.</li>
      <li><strong>Mobile nav:</strong> Used an <code>onClickOutside</code> handler to close dropdown menus when tapping outside.</li>
      <li><strong>Netlify issues:</strong> SRC vs src file naming caused case sensitivity issues. Public asset references had to be cleaned up.</li>
    </ul>
    <p>Mobile view is still in progress — a few minor responsiveness tweaks remain.</p>

    <h2>What I Asked ChatGPT</h2>
    <ul>
      <li>Scroll logic + snapping</li>
      <li>Auth handling ideas (no backend)</li>
      <li>Section-level CSS layout strategy</li>
      <li>Figma file structure tips</li>
      <li>Naming conventions for clarity</li>
      <li>Deploy workflow and versioning steps</li>
    </ul>

    <h2>What I’d Do Differently Next Time</h2>
    <ul>
      <li>No backend = no real data (can’t track progress or users)</li>
      <li>No account system — everyone uses a shared password</li>
      <li>No real-time form handling — the checklist is visual only</li>
      <li>Could’ve added better component testing</li>
      <li>Wish I had used a design system + stuck to it</li>
      <li>Would’ve used a state manager for the checklist logic</li>
    </ul>

    <h2>Coming Soon: v2</h2>
    <p>Once I dust off my MERN stack skills, version 2 is coming.</p>
    <ul>
      <li>Proper login with email + password auth</li>
      <li>Show/hide sections based on user role</li>
      <li>Database to store user progress</li>
      <li>Interactive onboarding (e.g. quizzes, checkpoints)</li>
    </ul>
    <p>It’ll still stay modular — just with real data and logic powering the experience.</p>

    <h2>Final Thoughts</h2>
    <p>This was more than just a styling challenge. It was:</p>
    <ul>
      <li>A test of layout, scroll, and gated routing logic</li>
      <li>A chance to build a real-world internal tool</li>
      <li>A React project I can expand and iterate on</li>
    </ul>
    <p>I learned a lot about managing layout without external libraries — and when to keep things simple.</p>
    <p>Want to try it out? <a href="https://readygroup-employeehandbook.netlify.app" target="_blank" rel="noopener noreferrer">Here’s the live link</a>.</p>
    <p>If you’ve built something similar — or have suggestions for v2 — let’s chat.</p>
  `
};
