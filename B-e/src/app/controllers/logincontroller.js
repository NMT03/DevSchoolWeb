const checklogin = require("../model/login");
const jwt = require("jsonwebtoken");
// const cookies = require("cookiesjs");

class logincontroller {
  //login
  index(req, res) {
    res.cookie("token_", "");
    // res.render("login");
  }

  async login(req, res) {
    const { account, password } = req.body;
    console.log(account, password);
    res.json("Message");
  }

  check_per(req, res, next) {
    next();
  }
}

module.exports = new logincontroller();
