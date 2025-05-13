require("dotenv").config({ path: "./.env" });

module.exports = {
  apps: [
    {
      name: "Remotecord-WEB",
      exec_mode: "cluster",
      instances: "max", // Or a number of instances
      script: "node_modules/next/dist/bin/next",
      args: "start",
      autorestart: true,

      env_prod: {
        APP_ENV: "prod", // APP_ENV=prod
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
        NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
        NEXT_PUBLIC_DISCORD_INVITE_URL:
          process.env.NEXT_PUBLIC_DISCORD_INVITE_URL,
      },
    },
  ],
};
