module.exports = {
  apps : [{
    name: "server",
    script: "./dist/server.js",
    time: true,
    env: {
      NODE_ENV: "production",
      CORS_WHITELIST: "https://traderbot.netlify.app",
      DB_URL: "mongodb://admin:1234qwer@ds159963.mlab.com:59963/csgobot-prod",
      RDB_URL: "postgres://admin:1234qwer@srv-captain--trader-pg-db:5432/Trader?sslmode=disable",
      PUPPET_API: "https://puppet.app.trader-bot.pw",
      TELEGRAM_TOKEN: "1274822023:AAHdhNgE194hHQJRaqw-EIIf-fn4VB1ZN4E",
      TELEGRAM_CHAT_ID: "-479108586"
    }
  }]
}