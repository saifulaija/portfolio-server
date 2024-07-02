/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';


import AppError from '../../errors/AppError';
import { TUser } from './user.interface';
import { User } from './user.model';


const createUserIntoDB = async (payload: TUser) => {
  console.log({payload})
  const isExistUser = await User.findOne({ email: payload.email });

  if (isExistUser) {
    throw new AppError(httpStatus.BAD_REQUEST, 'This email already exists');
  }

  const result = await User.create(payload);
  return result;
};
const getAllUser = async()=>{
  const result  =  await User.find()
  return result;
}


const getMe = async (user:TUser) => {

const result = await User.findOne({email:user?.email, role:user?.role})


  return result;
};

export const UserServices = {
  createUserIntoDB,getAllUser,getMe
};
