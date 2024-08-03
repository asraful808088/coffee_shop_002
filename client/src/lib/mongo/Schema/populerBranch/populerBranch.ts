import mongoose from "mongoose";

const populerBranch = new mongoose.Schema({
  images: {
    type: [Object],
    required: true,
  },
  header: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const HomeHero =
  mongoose.models.HomeHero || mongoose.model("PopulerBranch", populerBranch);
export default HomeHero;
