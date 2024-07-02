import httpStatus from 'http-status';

import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { FrontendServices } from './frontend.service';


const createFrontendIntoDB = catchAsync(async (req, res) => {
  const result = await FrontendServices.createFrontendIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Frontend skill is created successfully',
    data: result,
  });
});
const getAllFrontend = catchAsync(async (req, res) => {
  const result = await FrontendServices.getAllFrontend();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Frontend skills retrieved successfully',
    data: result,
  });
});
const deleteFrontend = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await FrontendServices.deleteFrontend(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Frontend skill deleted successfully',
    data: result,
  });
});
const getSingleFrontend = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await FrontendServices.getSingleFrontend(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Frontend skill retrieved successfully',
    data: result,
  });
});

const updateFrontend = catchAsync(async (req, res) => {
    const { id } = req.params;
    
    const result = await FrontendServices.updateFrontend(id,req.body);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Frontend skill updated successfully',
      data: result,
    });
  });
export const FrontendControllers = {
  createFrontendIntoDB,
  getAllFrontend,
  getSingleFrontend,
  deleteFrontend,
  updateFrontend
};
