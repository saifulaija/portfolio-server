import { Request, Response } from 'express';


import httpStatus from 'http-status';
import { metaServices } from './meta.service';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';




const fetchDashboardMetadata = catchAsync(async (req: Request  , res: Response) => {
 
    const result = await metaServices.fetchDashboardMetadata();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Meta data fetched successfully',
        data: result,
    });
});

export const MetaController = {
    fetchDashboardMetadata
};