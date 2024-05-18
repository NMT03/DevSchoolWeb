const loginrouter = require("./login");

function route(app) {
  app.use("/login", loginrouter);

  app.use("/", loginrouter);
}

module.exports = route;
