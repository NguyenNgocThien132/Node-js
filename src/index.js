const express = require("express");
const morgan = require("morgan");
const path = require("path");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
//Http logger
// Hiển thị trạng thái truy cập 304, 200, 500 v.v...
// app.use(morgan("combined"));

//Template Engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
//route
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.get("/search", (req, res) => {
  console.log(req.query.q);
  res.render("search");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
