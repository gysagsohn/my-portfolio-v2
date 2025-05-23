import previewImage from '../../assets/portfolio-v2-snippet.png';

export const portfolioV2Launch = {
  title: "Building My Portfolio V2 – Process, Lessons and What’s Next",
  summary: "A breakdown of why I rebuilt my dev portfolio, what I learned along the way, and where I’m heading next.",
  image: previewImage,
  slug: "portfolio-v2-launch",
  date: "2025-05-23",
  type: "project",
  body: `
    <h2>Why I Rebuilt My Portfolio</h2>
    <p>
      My first portfolio was basic. It looked like something built in the 90s. At the time, that was fine. I wanted something live, and I wanted to practices HTML and CSS (also it was an assignment).
    </p>
    <p>
      But once I had more experience, I knew I needed a site that better reflected my skills, personality, and how far I had come.
    </p>
    <p>
      This new version is built with React and Vite. I treated it like a proper product, not just a coding exercise. I created a layout in Figma, improved my understanding of typography and colour, implemented analytics and social sharing logic, and learned more about accessibility and SEO along the way.
    </p>

    <h2>What I Learned</h2>
    <p>
      This was my second time using Vite. First time was for the Ready Group Induction Page (Blog post about that can been found can be found in <a href="https://gysohn.com/blog/induction-handbook" target="_blank">this post</a>. My earlier projects were built with Create React App (CRA), which was the standard setup during my bootcamp.
    </p>
    <p>
      The biggest challenge was responsive layout. Getting the site to work across screen sizes took more iteration than I expected, especially the timeline section and the hero section not clashing with other sections on mobile and tablet.
    </p>
    <p>
      I also spent time learning how to set up and troubleshoot Open Graph previews for social media, how to add custom share buttons for blog posts, and how to configure Netlify routing so that direct links to blog posts wouldn't break.
    </p>

    <h2>What I’m Most Proud Of</h2>
    <p>
      Honestly, all of it.
    </p>
    <p>
      That said, a few features stand out. The terminal-style hero section was suggested by Ben and immediately gave the homepage character. The colour palette, font pairings, and layout came together better than I expected. The sticky share bar on blog posts was also a highlight because it felt functional and polished.
    </p>

    <p>
      The contact page is probably the least exciting section right now — I’m still looking for inspiration on how to improve it visually.
    </p>


    <h2>When It Started to Click</h2>
    <p>
      I was happy with the project early on, but the moment it really came together was when I finished the timeline section and saw it working cleanly across all screen sizes. That was when I knew the structure and design were on track.
    </p>

    <h2>How Long It Took</h2>
    <p>
      I tracked my time throughout this project. Total time spent: around 50 hours.
    </p>
    <ul>
      <li>Design and styling: 18 hours</li>
      <li>Component development and coding logic: 22 hours</li>
      <li>Content and copywriting: 5 hours</li>
      <li>Testing and debugging: 5 hours</li>
    </ul>

    <h2>Shoutouts and Inspiration</h2>
    <p>
      Thanks to Ben for the terminal hero suggestion and feedback during the build. Thanks also to E, who helped me choose and edit the hero image.
    </p>
    <p>
      These developer portfolios inspired this build:
    </p>
    <ul>
      <li><a href="https://developerfolio.js.org/" target="_blank">DeveloperFolio</a></li>
      <li><a href="https://www.joshwcomeau.com/" target="_blank">Josh Comeau</a></li>
      <li><a href="https://v4.brittanychiang.com/" target="_blank">Brittany Chiang</a></li>
      <li><a href="https://harnishdesign.net/demo/react/callum/demo/" target="_blank">Callum Template by Harnish Design</a></li>
    </ul>

    <h2>What’s Next</h2>
    <p>
      I’m planning to build a full-stack blog CMS using the MERN stack so I can manage posts dynamically instead of hardcoding content. It's been a while since I worked on backend logic, so I’m also reviewing materials and working on a new side project.
    </p>
    <p>
      That side project is a simple app to track wins and losses in the games my friends and I play. Right now we manually track Phase 10, Monopoly Deal, Skip-Bo and Pass the Pig. Catan should probably be on the list too.
    </p>
     <p>
      Also, I will get started on version 2 of Ready Group Employee Handbook page. The content will likely be the most challenging part of this next version so I need to get that process started ASAP.
    </p>
    <p>
      And yes, I’m now actively applying for junior developer roles. This site is part of that step forward.
    </p>

    <h2>Want to See It?</h2>
    <p>
      Live site: <a href="https://gysohn.com" target="_blank">gysohn.com</a><br/>
      GitHub source code: <a href="https://github.com/gysagsohn/gysohn-portfolio-v2" target="_blank">View the repo</a>
    </p>

    <h2>Final Thoughts</h2>
    <p>
      If you're early in your journey, build something. Even if it's simple. Then build it again. You’ll be surprised how much better it gets when you treat it like a real project and push yourself to make it something you're proud of.
    </p>
    <p>
      If anything doesn’t look right on the site, let me know. And if it does, I hope it inspires you to build your own.
    </p>
  `,
};
