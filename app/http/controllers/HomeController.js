import { Menu } from "../../models/menuSchema.js";

const home = async (req, res) => {
  const Pizzas = await Menu.find({}, "-__v");
  console.log("Cart is there after login "+ req.session?.cart?.total_Quantity)
  res.render("home", { Pizzas });
};

export { home };

