import express from 'express';
import { BlogControllers } from './blog.controller';

const router = express.Router();

router.post('/create-blog', BlogControllers.createBlog);
router.get('/', BlogControllers.getAllBlogs);
router.get('/:id', BlogControllers.getSingleBlog);
router.delete('/:id', BlogControllers.deleteBlog);
router.patch('/update-blog/:id', BlogControllers.updateBlog);
router.patch('/vote-blog/:id', BlogControllers.voteCount);

export const BlogsRoutes = router;
