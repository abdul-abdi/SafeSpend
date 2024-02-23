const express = require("express");
const session = require("express-session");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;
const { prisma } = require("../constants/config");

class PrismaStore extends session.Store {
  constructor(options) {
    super(options);
    this.prisma = options.client || new PrismaClient();
  }

  async get(sid, callback) {
    try {
      const session = await this.prisma.session.findUnique({
        where: {
          id: sid,
        },
      });
      callback(null, session ? JSON.parse(session.data) : null);
    } catch (error) {
      callback(error);
    }
  }

  async set(sid, session, callback) {
    try {
      await this.prisma.session.upsert({
        where: {
          id: sid,
        },
        update: {
          data: JSON.stringify(session),
        },
        create: {
          id: sid,
          data: JSON.stringify(session),
        },
      });
      callback(null);
    } catch (error) {
      callback(error);
    }
  }

  async destroy(sid, callback) {
    try {
      await this.prisma.session.delete({
        where: {
          id: sid,
        },
      });
      callback(null);
    } catch (error) {
      callback(error);
    }
  }
}

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
    store: new PrismaStore({ client: prisma }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
      secure: false,
    },
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", authRoutes);

app.listen(port, () => {
  console.log(`SERVER STARTED: ${port}`);
});
