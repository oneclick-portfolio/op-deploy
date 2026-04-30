const CONFIG = {
  apiBase: 'https://op-bot-mauve.vercel.app',
  // apiBase: 'http://localhost:8080',
  demoMode: false,
  deploy: {
    themesRoot: 'https://github.com/oneclick-portfolio/awesome-github-portfolio/tree/main/themes',
    themePreviewBase: 'https://imarinzone.github.io',
    progressRevealSeconds: 20,
    publishPingIntervalMs: 5000,
    publishPingTimeoutMs: 300000
  }
};

// Make CONFIG globally available
window.CONFIG = CONFIG;
