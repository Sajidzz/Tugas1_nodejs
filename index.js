const express = require("express");
const app = express();
const port = 8080;
const Datasiswa = require("./Datasiswa")

app.get("/", (req, res) => {
  res.send("hello , Selamat anda telah berhasil membuat server dengan express");
});

app.get("/Datasiswa", (req, res) => {
  res.json(Datasiswa);
});

app.listen(port, () => {
  console.log(`server berjalan di port ${port}`);
});
