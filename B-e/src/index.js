const express = require("express");

const app = express();
const port = 4000;
const route = require("./routes");
const bodyParser = require("body-parser");
const { log } = require("console");
var cookieParser = require("cookie-parser");

app.use(cookieParser());

// Phân tích cú pháp cho dữ liệu application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Phân tích cú pháp cho dữ liệu application/json
app.use(bodyParser.json());

route(app);

app.listen(port, function () {
  console.log(`Server đang chạy tại địa chỉ: http://localhost:${port}`);
});
