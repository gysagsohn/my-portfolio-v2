import keepTrackImage from '../../assets/keeptrack.png';
import keepNote1 from '../../assets/keepnote1.png';
import keepNote2 from '../../assets/keepnote2.png';
import keepNote3 from '../../assets/keepnote3.png';

export const keepTrack = {
  title: "I Built Something. Here's What It Actually Took.",
  summary: "A full-stack MERN app, an honest account of a career change, and what it took to come back after stopping entirely.",
  image: keepTrackImage,
  slug: "keep-track",
  date: "2026-03-04",
  type: "blog",
  body: `
    <h2>December 2025, I stopped coding entirely.</h2>

    <p>Just couldn't make myself open an editor. The motivation had been slipping for months. Job applications going nowhere, self-doubt getting louder, and eventually I decided to stop fighting it and just step away.</p>

    <p>I came back in February. Not because something changed externally or because I had a breakthrough moment. Mostly because I remembered what I actually like about this work: solving problems, making something from nothing, that feeling when a bug finally makes sense. Those things were still there. So I finished a project I'd been building, and this post is about both of those things.</p>

    <h2>The Project: Keep Track</h2>

    <p><a href="https://keeptrack.online" target="_blank" rel="noopener noreferrer">Keep Track</a> is a full-stack web app for tracking board and card game results with friends. My friends and I play a lot of games and we've never had a decent way to track results over time. A few notes here, a foggy memory there, someone insisting they're definitely winning overall.</p>

    <p>This is what tracking looked like before. Google Keep notes, manual tallies, no history, no context. It worked, but only barely.</p>

    <div class="inline-screenshot-grid">
      <figure>
        <img src="${keepNote1}" alt="Google Keep note tracking Monopoly Deal scores between Stephen and Gy" />
        <figcaption>Monopoly Deal tally — Stephen vs Gy</figcaption>
      </figure>
      <figure>
        <img src="${keepNote2}" alt="Google Keep note tracking Monopoly Deal scores between Sasha and Gy" />
        <figcaption>Monopoly Deal tally — Sasha vs Gy</figcaption>
      </figure>
      <figure>
        <img src="${keepNote3}" alt="Google Keep note tracking multiple game tallies between Gy and Ben" />
        <figcaption>Multi-game tally — Gy vs Ben</figcaption>
      </figure>
    </div>

    <p>Keep Track solves that.</p>

    <p><strong>Stack:</strong> React 19, Vite, Tailwind CSS v4 (frontend), Node.js, Express, MongoDB with Mongoose (backend). Auth uses JWT and Google OAuth via Passport.js. Email is handled with Resend. Deployed on Netlify (frontend) and Render (backend).</p>

    <p>
      <strong>Links:</strong><br />
      Live: <a href="https://keeptrack.online" target="_blank" rel="noopener noreferrer">keeptrack.online</a><br />
      Frontend repo: <a href="https://github.com/gysagsohn/keeptrack.online-client" target="_blank" rel="noopener noreferrer">gysagsohn/keeptrack.online-client</a><br />
      Backend repo: <a href="https://github.com/gysagsohn/keeptrack.online-server" target="_blank" rel="noopener noreferrer">gysagsohn/keeptrack.online-server</a>
    </p>

    <p>Core features include logging matches with friends or guest players, a confirmation workflow where every player confirms their own result before it locks, a friend system with requests and in-app notifications, guest player email invitations that automatically link to an account when the guest signs up, full mobile responsiveness, toast notifications, skeleton loading states, and a per-match activity log.</p>

    <h2>The Journey</h2>

    <p>I started this career change in 2024. I completed a bootcamp, finished the year with an internship, and felt like things were moving. In 2025 I got accepted into university to continue the study, then decided not to go and keep doing this my own way instead. I'm still not entirely sure that was the right call. There are real arguments either way and I think about it sometimes.</p>

    <p>What I do know is that 2025 was harder than expected. The job search wasn't going anywhere. Self-doubt that had been background noise started taking up more space. By late in the year the motivation was mostly gone.</p>

    <p>The thing that kept me connected to tech during that period wasn't personal projects. It was work. I was involved in rolling out a software platform across an entire organisation, dealing with real-world adoption challenges at scale. That kept me grounded in why any of this matters, even when writing my own code felt impossible.</p>

    <p>December and January I stopped entirely. February I came back. That's the honest version.</p>

    <h2>Reflection</h2>

    <p>I set out to build something real. Proper authentication, a real backend, real-world edge cases, deployed and usable by actual people including my own friends. And I did. The OAuth guest linking, the Mongoose subdocument queries, the mobile layout at every breakpoint. None of it resolved itself. I figured it out one problem at a time across a year that wasn't easy.</p>

    <p>That is not a career milestone. It's more personal than that. I'm just glad I came back.</p>

    <p>A few older projects are showing deprecation warnings on Netlify and in Microsoft Clarity. I'll fix those soon. The more interesting thing coming up is that I use my <a href="https://phase10tracker.netlify.app/" target="_blank" rel="noopener noreferrer">Phase 10 score tracker</a> all the time, and I want to integrate it with Keep Track so game results feed through automatically instead of being logged separately.</p>

    <p>My friends Ellen and Kees use it a lot. They're married and have a running debate about who's winning more overall. I'd like to build something that settles that question definitively. I suspect the answer will only make things worse between them, which is perfect.</p>

    <p>I don't know how the broader career path is going to unfold. I'd be lying if I said I did. But I like this work, I want to keep building, and right now that's enough of a reason to keep going.</p>

    <h2>Technical Deep Dive</h2>

    <p>For anyone curious about how the app works behind the scenes, here are a few of the architectural decisions and bugs I ran into while building it.</p>

    <h3>Architecture</h3>

    <p>The app follows a standard MERN structure with a clean separation between frontend and backend. The React client communicates with the Express API through a configured Axios instance with interceptors that normalise error shapes across the app. Instead of unpicking <code>error?.response?.status</code> in every component, the frontend always sees a consistent <code>error.status</code>. Small thing, but it removes a whole category of bugs.</p>

    <p>Authentication is handled with JWTs on the backend. Token creation goes through a single <code>createToken(user)</code> function. One source of truth, no risk of generating tokens differently in different parts of the app.</p>

    <h3>Google OAuth and Guest Linking</h3>

    <p>The most complex flow in the app is what happens when someone signs up after being invited as a guest player.</p>

    <p>When a match is logged with a guest email, the match is saved with that email and a flag marking them as a guest. When that person later signs up, either by email and password or through Google OAuth, the <code>linkGuestSessions</code> function runs. It finds all matches where a guest player entry matches their email, replaces the guest reference with their new user ID, automatically friends the match creator, and sends them a notification email.</p>

    <p>Getting this to fire correctly on both the standard signup path and the Google OAuth callback required careful placement. The OAuth flow hands off to a callback route where <code>linkGuestSessions(user)</code> runs after the user document is created or retrieved. If it runs before the user exists in the database, nothing links. Order matters there.</p>

    <h3>The Match Confirmation Workflow</h3>

    <p>Every player on a match must confirm their result before it locks. The match document holds a <code>players</code> array with subdocuments that include a <code>confirmed</code> field.</p>

    <p>This introduced a Mongoose query bug that took a while to track down. I had a query to find matches where a specific user had an unconfirmed result:</p>

    <pre><code>// WRONG — matches if any player is the user AND any (different) player is unconfirmed
Session.find({ "players.user": userId, "players.confirmed": false })</code></pre>

    <p>MongoDB evaluates those conditions independently across the array, so it could match a document where the user is confirmed but someone else isn't. The fix is <code>$elemMatch</code>, which requires both conditions to apply to the same array element:</p>

    <pre><code>// CORRECT — both conditions must apply to the same player entry
Session.find({
  players: { $elemMatch: { user: userId, confirmed: false } }
})</code></pre>

    <h3>Field Whitelisting on Updates</h3>

    <p>Every write controller uses a <code>sanitizeObject</code> helper that accepts the request body and an explicit list of allowed fields. Nothing gets passed directly from <code>req.body</code> to Mongoose. It's a simple pattern, but it matters when an app is public.</p>

    <p>Worth noting: <code>findByIdAndUpdate</code> bypasses Mongoose <code>pre('save')</code> hooks, so it can't be used for anything that relies on them. Password hashing always goes through <code>save()</code>.</p>

    <h3>Tailwind v4 and CSS Variables</h3>

    <p>Tailwind v4 changed how design tokens are defined. Instead of a JavaScript config, tokens are declared inside an <code>@theme</code> block in CSS. This works perfectly for class-based styling. But inline styles like <code>style={{ color: "var(--color-warning)" }}</code> require those variables to also exist on <code>:root</code>.</p>

    <p>The solution is intentionally duplicating the token definitions in both <code>@theme</code> and a <code>:root</code> block in <code>index.css</code>. It looks redundant and technically it is, but it's required for inline styles to work. There's a comment explaining exactly why it exists so future-me doesn't clean it up.</p>

    <h3>Responsive Design</h3>

    <p>Instead of forcing a single layout to stretch across every screen size, the app uses a dual layout system. Compact player cards on mobile, a table layout on desktop. The breakpoint sits at 820px, adjusted from Tailwind's default <code>md</code> after testing showed the default was too narrow for the desktop table to breathe properly.</p>
  `
};