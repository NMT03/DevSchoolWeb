const express = require("express");
const router = express.Router();

const lopcontroller = require("../app/controllers/lopcontroller");
const logincontroller = require("../app/controllers/logincontroller");
//kiểm tra quyền hạn -> lấy dữ
router.get("/", logincontroller.check_per, lopcontroller.index);

module.exports = router;
