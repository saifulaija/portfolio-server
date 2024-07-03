import httpStatus from 'http-status';

import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ToolsServices } from './tools.service';



const createToolsIntoDB = catchAsync(async (req, res) => {
  const result = await ToolsServices.createToolsIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tools skill is created successfully',
    data: result,
  });
});
const getAllTools = catchAsync(async (req, res) => {
  const result = await ToolsServices.getAllTools();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tools skills retrieved successfully',
    data: result,
  });
});
const deleteTools = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ToolsServices.deleteTools(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tools skill deleted successfully',
    data: result,
  });
});
const getSingleTools = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ToolsServices.getSingleTools(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tools skill retrieved successfully',
    data: result,
  });
});

const updateTools = catchAsync(async (req, res) => {
    const { id } = req.params;
    
    const result = await ToolsServices.updateTools(id,req.body);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Tools skill updated successfully',
      data: result,
    });
  });
export const ToolsControllers = {
  createToolsIntoDB,
  getAllTools,
  getSingleTools,
  deleteTools,
  updateTools
};
