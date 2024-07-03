import { Schema, model } from 'mongoose';
import { TTools } from './tools.interface';



const frontendSchema = new Schema<TTools>(
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

export const Tools = model<TTools>('Tools', frontendSchema);
