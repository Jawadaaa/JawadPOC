class FoodDB {
  constructor() {
    this.foods = [
      { id: 1, name: "Cheeseburger", price: 8.99 },
      { id: 2, name: "Margherita Pizza", price: 11.5 },
      { id: 3, name: "Caesar Salad", price: 7.25 },
      { id: 4, name: "Spaghetti Carbonara", price: 12.75 },
      { id: 5, name: "Chicken Tacos", price: 9.5 },
    ];
  }

  getAll() {
    return this.foods;
  }
}

const instance = new FoodDB();
module.exports = instance;