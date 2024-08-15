import mongoose from "mongoose";

const schema = new mongoose.Schema({
  imageItems: { type: Array, required: true },
  mainImage: { type: Object, required: true },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  fb: {
    type: String,
    required: false,
  },
  SX: {
    type: String,
    required: false,
  },
  in: {
    type: String,
    required: false,
  },
  lin: {
    type: String,
    required: false,
  },
});

const OurSpecialChef =
  mongoose.models.OurSpecialChef || mongoose.model("OurSpecialChef", schema);
export default OurSpecialChef;
