import { Schema, model } from 'mongoose';
import { TProject } from './projects.interface';

const projectSchema = new Schema<TProject>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    technologies: {
      type: [String],
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    githubClientLink: {
      type: String,
      required: true,
    },
    githubServerLink: {
      type: String,
      required: true,
    },
    liveLink: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Projects = model<TProject>('Project', projectSchema);
