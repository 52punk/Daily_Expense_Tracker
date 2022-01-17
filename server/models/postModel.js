// For making data format for post request
import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
  title: String,
  type: String,
  method: String,
  price: Number,
  place: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

let postModel = mongoose.model("postModel", PostSchema);

export default postModel;
