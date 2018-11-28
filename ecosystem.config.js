module.exports = {
  apps: [{
    name: 'mark1',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-35-183-186-54.ca-central-1.compute.amazonaws.com',
      key: '~/.ssh/J-dev.pem',
      ref: 'origin/master',
      repo: 'git@github.com:storprime/mark1.git',
      path: 'ubuntu/mark1',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
