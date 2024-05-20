import { Router } from 'express'
import {getPosts, createPost, likePost, cmntPost} from '../controllers/post.controller';
import multer from 'multer';

const router=Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });

router.get('/', getPosts)
router.post('/', upload.single('file'), createPost)
router.post('/like/:id', likePost)
router.post('/comment/:id', cmntPost)

export default router;