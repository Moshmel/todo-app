const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const App = express();
const addTodosRoutes = require("./routes/todos-route");


App.use(express.static(path.join(__dirname, 'client/build')));

App.use(bodyParser.json());
App.use(
  cors()
);

addTodosRoutes(App);
App.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


const PORT = process.env.PORT || 3001;
App.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});

