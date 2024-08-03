import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
  image: {
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

const AboutHero =
  mongoose.models.AboutHero || mongoose.model("AboutHero", contentSchema);
export default AboutHero;
