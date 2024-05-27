const { default: mongoose } = require("mongoose");

const restaurantModel = new mongoose.Schema({
  address: String,
  city: String,
  email: String,
  password: String,
  phonenumber: String,
  restaurantname: String,
});

export const restaurantSchema =
  mongoose.models.restaurants || mongoose.model("restaurants", restaurantModel);
