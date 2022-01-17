import postModel from "../models/postModel.js";
import mongoose from "mongoose";
export const getPosts = async (req, res) => {
  try {
    const posts = await postModel.find();
    res.send(posts);
  } catch (error) {
    res.send(error.message);
  }
};

export const createPosts = async (req, res) => {
  const { title, type, method, price, place, createdAt } = req.body;
  const postSave = new postModel({
    title,
    type,
    method,
    price,
    place,
    createdAt,
  });
  try {
    await postSave.save();
    res.status(201).json(postSave);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const delPost = await postModel.deleteOne({ _id: req.params.id });
    res.json(delPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
