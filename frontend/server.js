const express = require("express");
const path = require("path");

const app = express();
const port = 3000; // Set your desired port here

// Serve static files from the 'build' folder
app.use(express.static(path.join(__dirname, "build")));

// Handle all other routes by serving the index.html in the build folder
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
