const express = require("express");
const path = require("path");

const app = express();

app.use('/673_project', express.static(path.resolve(__dirname, '../dist')));


app.use(function(req, res) {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
})

app.listen(process.env.PORT || 5000);