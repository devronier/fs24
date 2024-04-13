const express = require("express");

const helloRoutes = require("./routes/helloRoutes");
const clientRoutes = require("./routes/clientRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

app.use(helloRoutes);
app.use(userRoutes);
app.use(clientRoutes);

app.listen(8080);
