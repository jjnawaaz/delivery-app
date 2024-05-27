const { mongouser, password } = process.env;
export const connectionStr =
  "mongodb+srv://" +
  mongouser +
  ":" +
  password +
  "@cluster0.kdt2cxe.mongodb.net/restaurantDB?retryWrites=true&w=majority&appName=Cluster0";
