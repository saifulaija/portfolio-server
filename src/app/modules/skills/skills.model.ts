import { Schema, model } from 'mongoose';
import { ISkills } from './skills.interface';


const skillsSchema = new Schema<ISkills>(
    {

        frontendSkills: {
            type: [String],
            required: true,
        },
        backendSkills: {
            type: [String],
            required: true,
        },
        toolsSkills: {
            type: [String],
            required: true,
        },

    },
    {
        timestamps: true,
    },
);

export const Skills = model<ISkills>('Skill', skillsSchema);
