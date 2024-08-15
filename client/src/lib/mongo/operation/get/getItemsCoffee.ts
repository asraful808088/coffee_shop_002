import dbConnect from "../../mongo";
import ItemCoffee from "../../Schema/itemsCoffee/itemsCoffee";
export default async function getItemCoffee() {
  await dbConnect();
  try {
    const savedContent = await ItemCoffee.find({});
    return savedContent;
  } catch (error) {
    return null;
  }
}
