import readyGroupHandbookImage from '../../assets/readyGroupHandbook.png';

export const readyGroupHandbook = {
  title: "Project Spotlight: Ready Group Induction Handbook",
  summary: "A look at the digital handbook I built: what it is, why I made it, what I learned, and what’s coming next.",
  image: readyGroupHandbookImage,
  slug: "induction-handbook",
  date: "2024-05-15",
  type: "project",
  body: `
    <h2>What I Built</h2>
    <p>This is a frontend only employee induction handbook for Ready Group. Think of it as a clean, easy to navigate internal site (<a href="https://editor.airmason.com/books/template-44327" target="_blank" rel="noopener noreferrer">similar to AirMason</a>) that walks new hires through company values, policies, leadership, and more.</p>
    <p><strong>Live site:</strong> <a href="https://readygroup-employeehandbook.netlify.app" target="_blank" rel="noopener noreferrer">readygroup-employeehandbook.netlify.app</a> (password protected for confidentiality)</p>
    <p><strong>Repo:</strong> <a href="https://github.com/gysagsohn/readygroup_induction" target="_blank" rel="noopener noreferrer">GitHub</a></p>

    <p><strong>I used:</strong></p>
    <ul>
      <li>React + Vite for fast development and build</li>
      <li>Native CSS with Flexbox for layout control</li>
      <li>LocalStorage based password gate (no backend)</li>
      <li>Font Awesome for iconography</li>
      <li>Figma for layout planning</li>
    </ul>

    <p><strong>The site includes:</strong></p>
    <ul>
      <li>Welcome and company overview sections</li>
      <li>Vision, mission, and core values</li>
      <li>Service offerings and growth goals</li>
      <li>PDF linked company policies</li>
      <li>Team introductions and contact details</li>
      <li>Final confirmation checklist</li>
    </ul>

    <p>It recently had its first real world use at Ready Group and passed with flying colours.</p>

    <h2>Why I Made It This Way</h2>
    <p>This started as a design and development challenge. I wanted to solve a real world problem that employees at Ready Group would actually use. Previously, we were using a large static PDF. I wanted to simplify that experience and lay the groundwork for a more modern onboarding system. The long term vision is an interactive, trackable, digital first onboarding journey.</p>
    <p>Goals for this version:</p>
    <ul>
      <li>Build something practical and client facing</li>
      <li>Focus on layout, design consistency, and section flow</li>
      <li>Avoid backend complexity for now</li>
      <li>Keep the code lean and easy to maintain</li>
    </ul>
    <p>Key touches I implemented:</p>
    <ul>
      <li>Scroll snapping per section</li>
      <li>Dropdown menu with click outside handling</li>
      <li>Mobile overflow fixes and responsive spacing</li>
      <li>Modular CSS and layout components</li>
    </ul>

    <h2>Challenges and Fixes</h2>
    <ul>
      <li><strong>Responsive layout pain:</strong> Scroll snap and section structure took some trial and error. I ended up using min-height and overflow-y to fix mobile jumpiness.</li>
      <li><strong>Password gate UX:</strong> I used a simple LocalStorage check and custom ProtectedRoute for access control. Basic, but effective for internal use.</li>
      <li><strong>File path bugs:</strong> Capitalised folders like SRC vs src broke deployment on Netlify. Lesson learned about case sensitivity.</li>
      <li><strong>Spacing and bleed issues:</strong> Adjusted per section padding and added conditional spacing breakpoints to maintain flow.</li>
      <li><strong>Dropdown behaviour:</strong> Needed to close on tap outside. Added a custom onClickOutside listener to handle this.</li>
      <li><strong>Mobile view:</strong> Still polishing a few responsiveness edge cases</li>
    </ul>

    <h2>Research That Helped Me Along the Way</h2>
    <ul>
      <li>How to implement scroll snapping effectively across devices</li>
      <li>Frontend only password gate logic with LocalStorage</li>
      <li>Best practices for responsive layout without CSS frameworks</li>
      <li>Tips on structuring sections in Figma</li>
      <li>Versioning, naming conventions, and Netlify deploy prep</li>
    </ul>

    <h2>What Comes Next</h2>
    <p>While this version delivered exactly what I wanted a functional, user friendly frontend site it was always just step one.</p>
    <p>Version 2 will be built once I wrap up some other work and polish my MERN stack chops.</p>
    <p>Here’s what I plan for v2:</p>
    <ul>
      <li>Login authentication (email and password)</li>
      <li>Onboarding checklists tailored to each role</li>
      <li>Database to track user progress</li>
      <li>Quiz modules to make onboarding interactive</li>
    </ul>
    <p>Basically, turning this prototype into a real onboarding system Ready Group can rely on long term.</p>

    <h2>Final Thoughts</h2>
    <p>This was more than a layout or design project. It was:</p>
    <ul>
      <li>A chance to modernise a real business process</li>
      <li>Hands on experience with gated routing, scroll management, and responsive flows</li>
      <li>A foundation I plan to build on and expand with backend logic and real user data</li>
    </ul>
    <p>Want to try it out? <a href="https://readygroup-employeehandbook.netlify.app" target="_blank" rel="noopener noreferrer">Here’s the live link</a> (no password provided for privacy reasons).</p>
    <p>Check out the code on <a href="https://github.com/gysagsohn/readygroup_induction" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
  `
};
