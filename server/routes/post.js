import { createPosts, getPosts, deletePost } from "../controllers/posts.js";
import express from "express";
const router = express.Router();
router.get("/", getPosts);
router.post("/", createPosts);
router.delete("/:id", deletePost);
export default router;
