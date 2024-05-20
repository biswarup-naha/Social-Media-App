import ErrorHandler from "../middlewares/errorMiddleware";
import Post from "../models/post.model";


export const getPosts=async function(req,res){
    try {
        const posts=await Post.find({});
        res.status(200).json({success: true, posts: posts})
    } catch (error) {
        return next(new ErrorHandler("Aww snap!!", 500))
    }
}

export const createPost=async function(req,res){
    try{
        const {title, content}=req.body;
        const file = req.file ? req.file.filename : undefined;

        if(!title || !content) return res
        .status(400)
        .json({ error: "Title and content are required fields" });

        
        const post=new Post({title: title, content: content, file});
        await post.save();
        res.status(201).json(post);
    }catch(error){
        console.error("Error creating post:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const likePost=async function(req,res){
    try {
        const id=req.params.id;
        const post=await Post.findById(id);
        if(!post){
            return res.status(404).json({error: "Post not found"})
        }
        // post.likes.push(req.user._id);
        post.likes+=1;
        await post.save();

        res.json(post);
    } catch (error) {
        console.log("Error liking post: ", error);
        res.status(500).json({error: "Internal server error"})
    }
}

export const cmntPost=async function(req,res){
    try {
        const id=req.params.id;
        const post=await Post.findById(id);
        if (!post) {
          return res.status(404).json({ error: "Post not found" });
        }

        post.comments.push(req.body.comment);
        await post.save();
    } catch (error) {
        console.error("Error adding comment:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}