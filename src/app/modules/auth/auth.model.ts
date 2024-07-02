import { Schema, model } from 'mongoose';
import { TAuth } from './auth.interface';

const authSchema = new Schema<TAuth>({
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

export const Auth = model<TAuth>('AuthModel', authSchema);
