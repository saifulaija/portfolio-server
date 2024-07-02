import { Schema, model } from 'mongoose';
import { TBlog } from './blog.interface';

const blogSchema = new Schema<TBlog>(
  {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    image: {
      type: String,
    },
    category: {
      type: String,
    },
    conclusion: {
      type: String,
    },
    author:{
      type:Schema.Types.ObjectId,
      ref:'User',
      required:true
    }
  },
  {
    timestamps: true,
  },
);

// blogSchema.post('save', function (doc, next) {
//   doc.password = '';
//   next();
// });

// blogSchema.statics.isUserExistsByCustomId = async function (email: string) {
//   return await User.findOne({ email });
// };

export const Blog = model<TBlog>('BlogModel', blogSchema);
