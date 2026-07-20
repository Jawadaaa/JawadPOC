const express = require("express"); // Import the Express library to create the server
const path = require("path"); // Import the path module to handle file paths
const foodDB = require("./foodDB"); // Import the FoodDB instance to access the food items

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies in requests
app.use(express.static(path.join(__dirname, "..", "public"))); // Serve static files from the public directory

// Define a route to get all food items
app.get("/foods", (req, res) => {
  const foods = foodDB.getAll();
  console.log(`GET /foods -> returning ${foods.length} items`);
  res.status(200).json(foods);
});
// Handle unknown routes with a 404 response
app.use((req, res) => {
  console.log(`404 -> No route found for ${req.method} ${req.originalUrl}`);
  res.status(404).json({ error: "Not Found" });
});
// Define a global error handler to catch any unexpected errors
const PORT = process.env.PORT || 3000;
// Start the server and listen on the specified port if this file is run directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;