import gameTrackerImage from '../../assets/game-tracker-hero-800x418.png';

export const gameTracker = {
  title: "Game Tracker Full-Stack MERN App",
  summary:
    "A production-ready match tracker for board & card games (auth, email flows, stats, confirmations) plus long-term plans for a Catan helper and Phase 10 auto-logging.",
  image: gameTrackerImage,
  slug: "game-tracker-mern",
  date: "2025-10-22",
  type: "project",
  body: `
    <h2>What I Built</h2>
    <p><em>Game Tracker</em> is a full-stack MERN application that lets friends log and track board & card-game results in one place born from too many nights manually tallying Phase 10, Monopoly Deal, Skip-Bo, and Catan scores on scrap paper.</p>

    <p><strong>Live app:</strong> <a href="https://gy-gametracker.netlify.app" target="_blank" rel="noopener">gy-gametracker.netlify.app</a><br/>
    <strong>Repos:</strong> <a href="https://github.com/gysagsohn/game-tracker-client" target="_blank" rel="noopener">Frontend</a> | <a href="https://github.com/gysagsohn/game-tracker-server" target="_blank" rel="noopener">Backend</a></p>

    <p><strong>Tech stack</strong><br/>
    Frontend – React 19 • Vite • Tailwind CSS • React Router<br/>
    Backend – Node.js • Express • MongoDB • Mongoose<br/>
    Auth – JWT • Google OAuth (Passport.js) • Email verification<br/>
    Email – Nodemailer (Gmail) • Deployment – Netlify + Render</p>

    <ul>
      <li>Create matches with multiple players (registered or guests)</li>
      <li>Track scores & results (Win / Loss / Draw)</li>
      <li>Friend requests & notifications</li>
      <li>Match confirmations (all players confirm)</li>
      <li>Email invites for guests</li>
      <li>User statistics & match history</li>
      <li>Mobile-responsive design with real-time badge polling</li>
    </ul>

    <h2>Why I Built It</h2>
    <p>I wanted a real portfolio piece with production-grade security that we’d actually use and an excuse to level up my backend skills after months of frontend work.</p>

    <h2>The Journey</h2>
    <h3>Phase 1 – Initial Build</h3>
    <p>JWT auth + email verification, match creation, friend system, schema design.</p>

    <h3>Phase 2 – Security Hardening</h3>
    <ul>
      <li>HTML sanitization (XSS)</li>
      <li>Field whitelisting (stop mass-assignment)</li>
      <li>Password-reset tokens with expiry + one-time use</li>
      <li>Joi validation on critical routes</li>
      <li>Rate limiting on auth & email endpoints</li>
    </ul>

    <h3>Phase 3 – Frontend Polish</h3>
    <p>Skeleton loaders, error boundaries, toasts, improved nav & active states, profile with stats, notification badges.</p>

    <h3>Phase 4 – Performance & Final Polish</h3>
    <ul>
      <li>Strategic MongoDB indexes (10–100× faster)</li>
      <li>Capped activity logs (prevent unbounded growth)</li>
      <li>Query population clean-ups & env var validation</li>
      <li>SEO metadata/docs updates</li>
    </ul>

    <h2>What I Learned</h2>
    <p><strong>Security is hard:</strong> never trust the client, whitelist fields, rate-limit sensitive routes, validate env vars, and use one-time tokens.</p>
    <p><strong>Indexes matter:</strong> moving from full scans to indexed lookups transformed perf.</p>
    <p><strong>UX sells the speed:</strong> skeletons/toasts/error boundaries make it feel professional.</p>
    <p><strong>Deployment is the truth:</strong> CORS, OAuth callbacks, envs, case-sensitive paths test on staging first.</p>

    <h2>Code Highlight – Auto-Linking Guest Players</h2>
    <pre><code>
// In authController.js signup logic
const email = req.body.email.toLowerCase().trim();
const sessionsWithGuest = await Session.find({
  'players.email': email,
  'players.user': null
});
for (const session of sessionsWithGuest) {
  session.players.forEach((p) => {
    if (p.email === email && !p.user) {
      p.user = newUser._id;
      p.confirmed = true;
    }
  });
  await session.save();
}
    </code></pre>

    <h2>Challenges & Solutions</h2>
    <p><strong>Guest players:</strong> treat guests as players without IDs; auto-confirm; retro-link on signup.</p>
    <p><strong>Confirmations:</strong> only creators send reminders (rate-limited to 1/6h); show pending clearly.</p>
    <p><strong>Perf:</strong> add compound indexes:
    <pre><code>sessionSchema.index({ createdBy: 1, date: -1 });
sessionSchema.index({ 'players.user': 1 });
userSchema.index({ email: 1 }, { unique: true });</code></pre></p>
    <p><strong>Token security:</strong> invalidate after use.</p>

    <h2>What’s Next</h2>
    <h3>Short-term</h3>
    <ul>
      <li>Unit + integration + E2E tests</li>
      <li>WebSockets for true real-time notifications</li>
      <li>Refresh-token mechanism (7-day access expiry today)</li>
      <li>Accessibility & keyboard-nav improvements</li>
    </ul>
    <h3>Long-term</h3>
    <ul>
      <li>Admin dashboard, advanced filtering/search, charts</li>
      <li>Offline support (service worker); Mobile (React Native)</li>
      <li><strong>Catan Game Helper / LLM Assistant:</strong> track board state, dice frequency, resource odds; suggest trades/builds via LLM; log results into Game Tracker.</li>
      <li><strong>Phase 10 Tracker Integration:</strong> auto-log scores from my <a href="/blog/phase-10-tracker">Phase 10 Tracker</a> into Game Tracker for unified stats.</li>
    </ul>

    <h2>Final Thoughts</h2>
    <p>Turning a small annoyance into a tool my friends actually use reminded me why I love building. If you want to explore or contribute: 
    <a href="https://gy-gametracker.netlify.app" target="_blank" rel="noopener">Live app</a> · 
    <a href="https://github.com/gysagsohn/game-tracker-client" target="_blank" rel="noopener">Frontend</a> · 
    <a href="https://github.com/gysagsohn/game-tracker-server" target="_blank" rel="noopener">Backend</a>.</p>

    <p>Working on something similar? Ping me on <a href="https://www.linkedin.com/in/gysohn" target="_blank" rel="noopener">LinkedIn</a> or <a href="https://github.com/gysagsohn" target="_blank" rel="noopener">GitHub</a>.</p>
  `
};
