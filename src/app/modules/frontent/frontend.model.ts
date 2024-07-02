import { Schema, model } from 'mongoose';

import { TFrontend } from './frontend.interface';

const frontendSchema = new Schema<TFrontend>(
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

export const Frontend = model<TFrontend>('Frontend', frontendSchema);
