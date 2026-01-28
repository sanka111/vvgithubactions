const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.status(200).send("OK"));
app.get("/health", (req, res) => res.status(200).json({ status: "ok" }));

app.listen(port, "0.0.0.0", () => {
  console.log(`demo-ok listening on port ${port}`);
});
