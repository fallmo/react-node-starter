require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();

if (process.env.NODE_ENV === "development") {
  // If in development allow different Domain;
  const cors = require("cors");
  app.use(cors());
} else {
  // If in Production serve react build
  app.use(express.static(path.join(__dirname, "public")));
}

app.get("*", (req, res) => {
  // If development send to react dev server
  if (process.env.NODE_ENV === "development") {
    res.send("Access App through development client");
  } else {
    // If production send production build
    res.sendFile(path.join(__dirname, "public", "index.html"));
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`));
