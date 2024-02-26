const express = require("express");
const mongoose =require("mongoose");
require("dotenv").config();
const routes=require("./routes/ToDoRoutes")
const cors=require("cors");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const authRoutes = require("./routes/AuthRoutes");

const app=express()
const PORT=process.env.PORT || 5000
app.use(express.json())
app.use(cors())

app.use(
    session({
      secret: process.env.SESSION_SECRET || "secret",
      resave: true,
      saveUninitialized: true,
    })
  );
  
  // Passport middleware
  app.use(passport.initialize());
  app.use(passport.session());
  
  // Passport Local Strategy
  const User = require("./models/User"); // Replace with your User model
  passport.use(
    new LocalStrategy(User.authenticate())
  );
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());
mongoose
.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB connected..,"))
.catch((err)=>console.log(err));

app.use("/api",routes)
app.use("/auth", authRoutes);
app.listen(PORT,() =>console.log(`listening to port: ${PORT}`))