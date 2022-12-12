// args:develop
module.exports = {
  apps: [
    {
      name: 'flowers',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};







