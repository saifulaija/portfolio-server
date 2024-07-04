import httpStatus from 'http-status';

import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProjectsServices } from './projects.service';
import { TProject } from './projects.interface';

const createProjectIntoDB = catchAsync(async (req, res) => {
  const result = await ProjectsServices.createProjectIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project is created successfully',
    data: result,
  });
});
const getAllProjects = catchAsync(async (req, res) => {
  const result = await ProjectsServices.getAllProjects();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project  retrieved successfully',
    data: result,
  });
});
const getSingleProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProjectsServices.getSingleProject(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project retrieved successfully',
    data: result,
  });
});
  const deleteProject = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ProjectsServices.deleteProject(id);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Project deleted successfully',
      data: result,
    });
  })
  const updateProject=catchAsync(async(req,res)=>{
    const {id}=req.params

    const result=await ProjectsServices.updateProject(id,req.body)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Project updated successfully',
      data: result,
    });
  })
export const ProjectControllers = {
  createProjectIntoDB,
  getAllProjects,
  getSingleProject,
  deleteProject,
  updateProject
};
