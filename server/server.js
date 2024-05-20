import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "dotenv";
import path from 'path';
import postRoutes from './routes/post.routes';


config();
const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//db connection
const uri = `${process.env.MONGO_URI}/Social-Media-App`;
mongoose
  .connect(uri)
  .then(() => console.log(`connected to MongoDB on ${process.env.MONGO_URI}`))
  .catch((err) => console.log(err));

//routes
app.get("/", (req, res) =>
  res.json({ message: "Welcome to the root of the server" })
);
app.use('/api/posts', postRoutes)

//server
app.listen(PORT, () =>
  console.log(`server is running on: http://localhost:${PORT}`)
);
