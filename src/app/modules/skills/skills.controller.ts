import httpStatus from 'http-status';

import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { SkillsServices } from './skills.service';

const createSkillIntoDB = catchAsync(async (req, res) => {
  const result = await SkillsServices.createSkillsIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill is created successfully',
    data: result,
  });
});
const getAllSkills = catchAsync(async (req, res) => {
  const result = await SkillsServices.getAllSkills();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill  retrieved successfully',
    data: result,
  });
});
const deleteSkill = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SkillsServices.deleteSkill(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill deleted successfully',
    data: result,
  });
});
const getSingleSkill = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SkillsServices.getSingleSkill(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill retrieved successfully',
    data: result,
  });
});
export const SkillsControllers = {
  createSkillIntoDB,
  getAllSkills,
  getSingleSkill,
  deleteSkill
};
