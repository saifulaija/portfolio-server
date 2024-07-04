
import { Types } from "mongoose";

export interface TBlog {
  title: string;
  content: string;
  category: string;
  conclusion: string;
  image: string;
  votes: number;
  author: Types.ObjectId
}


