import { ISkills } from "./skills.interface";
import { Skills } from "./skills.model";


const createSkillsIntoDB = async (payload: ISkills) => {
  const result = await Skills.create(payload);
  return result;
};

const getAllSkills = async () => {
  const result = await Skills.find();
  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getSingleSkill = async (id: string) => {
  const result = await Skills.findById(id);
  return result;
};

const deleteSkill=async(id:string)=>{
    const result =await Skills.findByIdAndDelete(id);
    return result

}
export const SkillsServices = {
createSkillsIntoDB,
getSingleSkill,
getAllSkills,
deleteSkill
};
