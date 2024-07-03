import { Schema, model } from 'mongoose';
import { TBackend } from './backend.interface';



const backendSchema = new Schema<TBackend>(
  {
    name: {
      type: String,
      required: true,
    },
 
  },
  {
    timestamps: true,
  },
);

export const Backend = model<TBackend>('Backend', backendSchema);
