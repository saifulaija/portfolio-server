import { TProject } from './projects.interface';
import { Projects } from './projects.model';

const createProjectIntoDB = async (payload: TProject) => {
  const result = await Projects.create(payload);
  return result;
};

const getAllProjects = async () => {
  const result = await Projects.find();
  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getSingleProject = async (id: string) => {
  const result = await Projects.findById(id);
  return result;
};
const deleteProject = async (id: string) => {
  const result = await Projects.findByIdAndDelete(id);
  return result;
};
const updateProject=async(id:string,payload:Partial<TProject>)=>{
    const result =await Projects.findByIdAndUpdate(id,payload,{
        new:true,
        runValidators:true
    })
    return result
}

export const ProjectsServices = {
  createProjectIntoDB,
  getAllProjects,
  getSingleProject,
  deleteProject,
  updateProject
};
