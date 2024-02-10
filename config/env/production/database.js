const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: config.host,
        port: config.port,
        database: config.database,
        username: config.user,
        password: config.password,
        ssl: {
          rejectUnauthorized: false,
        },
      },
      options: {
        ssl: true,
      },
    },
  },
});

// postgresql://postgres:B4Ef4c4-GCEBbAEE*dDa3*F*4-BCDccF@:/railway
