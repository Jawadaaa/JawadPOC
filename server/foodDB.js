class FoodDB {
    // This class simulates a database of food items. In a real application, you would replace this with actual database queries.
  constructor() {
    this.foods = [
      { id: 1, name: "Cheeseburger", price: 8.99 },
      { id: 2, name: "Margherita Pizza", price: 11.5 },
      { id: 3, name: "Caesar Salad", price: 7.25 },
      { id: 4, name: "Spaghetti Carbonara", price: 12.75 },
      { id: 5, name: "Chicken Tacos", price: 9.5 },
    ];
  }
// Method to get all food items
  getAll() {
    return this.foods;
  }
}
// Create a single instance of the FoodDB class to be used throughout the application
const instance = new FoodDB();
// Export the instance so that it can be imported and used in other files
module.exports = instance;