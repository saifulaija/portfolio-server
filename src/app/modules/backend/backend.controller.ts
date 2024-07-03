import httpStatus from 'http-status';

import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BackendServices } from './backend.service';



const createBackendIntoDB = catchAsync(async (req, res) => {
  const result = await BackendServices.createBackendIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Backend skill is created successfully',
    data: result,
  });
});
const getAllBackend = catchAsync(async (req, res) => {
  const result = await BackendServices.getAllBackend();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Backend skills retrieved successfully',
    data: result,
  });
});
const deleteBackend = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BackendServices.deleteBackend(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Backend skill deleted successfully',
    data: result,
  });
});
const getSingleBackend = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BackendServices.getSingleBackend(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Backend skill retrieved successfully',
    data: result,
  });
});

const updateBackend = catchAsync(async (req, res) => {
    const { id } = req.params;
    
    const result = await BackendServices.updateBackend(id,req.body);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Backend skill updated successfully',
      data: result,
    });
  });
export const BackendControllers = {
  createBackendIntoDB,
  getAllBackend,
  getSingleBackend,
  deleteBackend,
  updateBackend
};
