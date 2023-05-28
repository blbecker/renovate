module.export = {
    extends: ['config:base'],
    timezone: 'America/New York',
    prHourlyLimit: 5,
    prConcurrentLimit: 5,
    labels: ['chore', 'renovate 🎨'],
    npm: {
      fileMatch: ['(^|/)package.json$', '(^|/)package.dist.json$']
    },
    
    // Self-Hosted configuration
    branchPrefix: 'renovate/',
    allowScripts: true,
    repositories: [
        'blbecker/homelab-flux',
    ]
  };