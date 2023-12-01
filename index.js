const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const cors = require('cors');
const session = require("express-session");
const { connectToDB } = require("./src/config/connectToDb");
const loginRoutes = require("./src/routes/loginRoute");
const mainRoutes = require("./src/routes/mainRoute");
const findRoutes = require("./src/routes/findRoute");
const paymentRoutes = require("./src/routes/paymentRoutes");

//initialize the app as an express app
const app = express();
const PORT = parseInt(process.env.PORT) || 5000;
const router = express.Router();
const { Client } = require("pg");
const bcrypt = require("bcrypt");

//Connecting to database
connectToDB();

//Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: true,
  resave: false,
  cookie: {
    httpOnly: true,
    maxAge: parseInt(process.env.SESSION_MAX_AGE),
  }
}));

//Routes
app.use("/", loginRoutes);
app.use("/", mainRoutes);
app.use("/", findRoutes);
app.use("/", paymentRoutes);

//listen on port
app.listen(PORT, () => {
  console.log("Server Running on port " + PORT);
});
