import { Schema, model } from 'mongoose';
import { TLoginUser } from './auth.interface';


const authSchema = new Schema<TLoginUser>({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

// blogSchema.post('save', function (doc, next) {
//   doc.password = '';
//   next();
// });

export const Auth = model<TLoginUser>('AuthModel', authSchema);
