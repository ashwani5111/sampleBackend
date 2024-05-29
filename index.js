const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
// const { signUp_routes } = require("./routes/signUp_routes.js");
const singUp_routes = require("./routes/signUp_routes.js")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/d", singUp_routes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
