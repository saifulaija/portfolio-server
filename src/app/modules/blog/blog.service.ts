import QueryBuilder from '../../builder/QueryBuilder';
import { User } from '../user/user.model';
import { blogSearchableFields } from './blog.constant';
import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlogIntoDB = async (payload: TBlog) => {
  const result = await Blog.create(payload);
  return result;
};

const getAllBlogs = async (query: Record<string, unknown>) => {
  const blogQuery = new QueryBuilder(
    Blog.find().populate('author'),
    query,
  )
    .search(blogSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await blogQuery.modelQuery;
  const meta = await blogQuery.countTotal();

  return {
    meta,
    result,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getSingleBlog = async (id: string) => {
  const result = await Blog.findById(id).populate('author');
  return result;
};

const deleteBlog = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id);
  return result;
};
const updateBlog = async (id: string, payload: Partial<TBlog>) => {
  const result = await Blog.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};



export const BlogServices = {
  createBlogIntoDB,
  getAllBlogs,
  getSingleBlog,
  deleteBlog,
  updateBlog,
};
