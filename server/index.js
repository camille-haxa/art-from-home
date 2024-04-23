// Load environment variables from .env file
require("dotenv").config();

// Check database connection
// Note: This is optional and can be removed if the database connection
// is not required when starting the application
require("./database/client").checkConnection();

// Import the Express application from app/config.js
const app = require("./app/config");

// Get the port from the environment variables
const port = 3310;

// Create route
const dataArt = require("./listArt.json");

app.get("/data", (req, res) => {
  res.json(dataArt);
});

app.get("/data/:id", (req, res) => {
  res.json(dataArt);
});
// Start the server and listen on the specified port
app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });
