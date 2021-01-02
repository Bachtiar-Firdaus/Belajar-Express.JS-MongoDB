//import file wajib
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const port = 3000;
const hostname = "127.0.0.1";

// untuk import file tambahan
// const client = require("./connection");
const routers = require("./routers");

//untuk codding
//coding boddy parser
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
//coding panggil roternyas
app.use(routers);
//untuk menjalankan aplikasi
app.listen(port, () => {
  console.log(`Server Runing at http://${hostname}:${port}`);
});
