const express = require("express");
const session = require("express-session");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: ["http://localhost:3000", "https://localhost:5000"],
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD", "DELETE", "PATCH"],
    credentials: true,
  })
);

app.use(
  session({
    name: "sess",
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day
      httpOnly: true,
      secure: false, // Set to true if your server uses HTTPS
    },
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // Example route to demonstrate session usage
  if (req.session.views) {
    req.session.views++;
  } else {
    req.session.views = 1;
  }
});

app.use("/api", authRoutes);

app.listen(port, () => {
  console.log(`SERVER STARTED: ${port}`);
});
