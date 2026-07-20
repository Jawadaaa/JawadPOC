const express = require("express");
const path = require("path");
const foodDB = require("./foodDB");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/foods", (req, res) => {
  const foods = foodDB.getAll();
  console.log(`GET /foods -> returning ${foods.length} items`);
  res.status(200).json(foods);
});

app.use((req, res) => {
  console.log(`404 -> No route found for ${req.method} ${req.originalUrl}`);
  res.status(404).json({ error: "Not Found" });
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;