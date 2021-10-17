import postModel from "../models/postModel.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await postModel.find();
    res.send(posts);
  } catch (error) {
    res.send(error.message);
  }
};

export const createPosts = async (req, res) => {
  const { title, description, method, price, type, createdAt } = req.body;
  const postSave = new postModel({
    title,
    description,
    method,
    price,
    type,
    createdAt,
  });
  try {
    await postSave.save();
    res.status(201).json(postSave);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
