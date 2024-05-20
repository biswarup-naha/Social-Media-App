import mongoose, { Schema } from "mongoose";

const postSchema=new Schema({
    title:{
        type:String,
        required: true
    },
    content: {
        type: String,
    },
    likes: {
        type: Number,
        default: 0
    },
    comments: [{type: String}]
});

const Post=new mongoose.model("Post", postSchema);
export default Post;