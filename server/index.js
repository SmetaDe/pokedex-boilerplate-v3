const path = require("path");
const express = require("express");
const volleyball = require("volleyball");
const app = express();
module.exports = app;

// Logging middleware
app.use(volleyball);

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static file-serving middleware
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.static(path.join(__dirname, "..", "node_modules", "font-awesome", "css")));
app.use("/fonts", express.static(path.join(__dirname, "..", "node_modules", "font-awesome", "fonts")));

// API routes
app.use("/api", require("./api"));

// 404 handler
app.use((req, res, next) => {
  if (path.extname(req.path).length > 0) {
    res.status(404).end();
  } else {
    next();
  }
});

// Serve the main HTML file
app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});
