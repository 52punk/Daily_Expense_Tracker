import express from "express";
const app = express();
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import postRouter from "./routes/post.js";

// MIDDLEWARES

app.use(bodyParser.json());
app.use(cors());

// ROUTES
app.use("/posts", postRouter);
// DATABASE CONNECTION

const CONNECTION_URL =
  "mongodb+srv://52punk:52punk2017@cluster0.b19hh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running at : ${PORT}`))
  )
  .catch((error) => console.log(error.message));
