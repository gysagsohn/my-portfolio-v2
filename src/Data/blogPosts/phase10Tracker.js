import phase10Image from '../../assets/phase10.png';

export const phase10Tracker = {
  title: "Phase 10 Tracker – One Day Build Gone Rogue",
  summary: "A quick React project to replace pen-and-paper scoring... that quickly spiralled into a full-blown app.",
  image: phase10Image,
  slug: "phase-10-tracker",
  date: "2025-05-28",
  type: "project",
  body: `
    <h2>Why I Made It</h2>
    <p>My flatmate and I play a lot of card and board games, and <strong>Phase 10</strong> is one of the few that still needs pen and paper to track scores and phases. I figured I’m a baby coder now, surely I can fix that.</p>
    <p>I also wanted to try out Material UI (MUI), and this seemed like a fun excuse to build something small and useful. I thought this would be a quick one-day project. So naturally, it spiralled into a full game app.</p>

    <h2>Initial Goals</h2>
    <p>I didn’t wireframe or plan too much, but I noted down a few features I wanted:</p>
    <ul>
      <li>Add/edit/remove/reorder players (2–6)</li>
      <li>Set initial dealer & auto-rotate</li>
      <li>Round-based phase & score tracking</li>
      <li>Editable score table</li>
      <li>Winner detection</li>
      <li>LocalStorage save/load</li>
      <li>Mobile-friendly UI</li>
    </ul>

    <p>That list… grew quickly.</p>

    <h2>Live App</h2>
    <p>
      <a href="https://phase10tracker.netlify.app" target="_blank">
        phase10tracker.netlify.app
      </a>
      &nbsp;—&nbsp;
      <strong><a href="https://phase10tracker.netlify.app" target="_blank" style="text-decoration: underline;">Play Now</a></strong>
    </p>
    <p>
      <a href="https://github.com/gysagsohn/phase10_counter" target="_blank">
        GitHub Repository
      </a>
    </p>

    <h2>What I Actually Built</h2>
    <p>Turns out, building a game tracker, even for a “simple” card game isn’t that simple. I ended up adding:</p>
    <ul>
      <li>Duplicate name prevention</li>
      <li>Tie-breaker mode (if multiple people finish Phase 10 with the same score, this has never happened to me before, but it is in the rulebook)</li>
      <li>Confetti animation when someone wins</li>
      <li>Undo round feature with confirmation</li>
      <li>Save/load functionality (with tooltips and overwrite warnings)</li>
      <li>Mobile-friendly UI with responsive layouts</li>
      <li>Modals, snackbars, editable tables…</li>
      <li>Dealer logic, score validation, auto-scroll to winner</li>
    </ul>

    <p>And a bunch of things I didn’t even think about until I needed them. This was my first time coding anything game-related, and I’ve gained a new appreciation for how hard it is to define, explain, and enforce rules through logic.</p>

    <h2>Using MUI</h2>
    <p>Material UI turned out to be a great tool for this kind of project:</p>
    <p><strong>Loved:</strong></p>
    <ul>
      <li>Super easy to make things look nice</li>
      <li>Responsive layouts “just worked”</li>
      <li>Tooltips, modals, and inputs, so many good defaults</li>
    </ul>
    <p><strong>Didn’t love:</strong></p>
    <ul>
      <li>Styling inside the component logic got messy fast</li>
      <li>Harder to refactor styling compared to using plain CSS or Tailwind</li>
    </ul>
    <p>In hindsight, I underestimated how much logic and how many conditionals would pile up inside each component. Next time, I’d break things up more cleanly between UI and logic.</p>

    <h2>Code Highlight: Medal Assignment</h2>
    <p>One of the more satisfying pieces to write was this medal function. It ranks players and assigns gold, silver, bronze (and even a wooden spoon) based on current scores and phases.</p>

    <pre><code>{\`
    // Assign medals based on final rankings if winner is declared
    function assignMedals(rankedPlayers, winnerDeclared) {
      const medals = Array(rankedPlayers.length).fill(null);
      if (!winnerDeclared) return medals;

      let rank = 1;
      for (let i = 0; i < rankedPlayers.length; i++) {
        if (i > 0) {
          const prev = rankedPlayers[i - 1];
          const curr = rankedPlayers[i];
          if (curr.phase !== prev.phase || curr.score !== prev.score) {
            rank = i + 1;
          }
        }

        if (rank === 1) medals[i] = '🥇';
        else if (rank === 2) medals[i] = '🥈';
        else if (rank === 3) medals[i] = '🥉';
      }

      return medals;
    }
    \`}</code></pre>

    <p>Simple, readable, and a nice reward system to cap off the game.</p>

    <h2>What’s Next</h2>
    <p>I haven’t used this in a full game yet, but I’m excited to see how it holds up under actual chaos (read: a competitive game night).</p>
    <p>This app won’t get a massive v2 update, but it’s becoming part of a larger idea, a win/loss tracker app my mates (Ben, Stephen, and I) can use across multiple games like Phase 10, Monopoly Deal, and Pass the Pigs. The goal is a simple app with login support, shared stats, and game records. This tracker will be a feature inside it.</p>
    <p>Bonus: I get to dust off my MERN stack skills while building something we’ll genuinely use.</p>

    <h2>Lessons Learned</h2>
    <ul>
      <li>Games are logic-heavy, even casual ones</li>
      <li>MUI is brilliant for speed, but styling and logic should be separated early</li>
      <li>One day builds often snowball, but that’s not a bad thing</li>
    </ul>

    <p>Thanks for reading. If you want to steal this app for your next game night, go for it. And if it breaks, well... maybe that just means you’re too competitive.</p>
  `
};
