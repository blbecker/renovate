module.export = {
    extends: ['config:base'],
    timezone: 'America/New York',
    schedule: ['after 6am and before 9am'],
    rebaseWhen: 'conflicted',
    updateLockFiles: true,
    prCreation: 'immediate',
    rangeStrategy: 'auto',
    prHourlyLimit: 5,
    prConcurrentLimit: 5,
    requiredStatusChecks: null, // bors will always be pending and this feature is only partially implemented so setting to not wait on pr status
    automergeType: 'pr-comment',
    automergeComment: 'bors r+',
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