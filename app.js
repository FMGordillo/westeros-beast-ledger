const express = require("express");
const bodyParser = require("body-parser");

const path = require("path");
const app = express();
const PORT = process.env.PORT ?? 3000;

const apiRoute = require("./routes/api");

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/api", apiRoute);

app.listen(PORT, () => {
  console.log(`App listening on port http://localhost:${PORT}`);
});
