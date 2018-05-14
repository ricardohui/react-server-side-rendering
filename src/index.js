const express = require("express");
const React = require("react");
const renderToString = require("react-dom/server").renderToString;
const App = require("./client/components/App").default;
const app = express();

app.get("/", (req, res) => {
  const content = renderToString(<App />);

  res.send(content);
});
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
