import httpStatus from 'http-status';


import { TLoginUser } from './auth.interface';
import { createToken, verifyToken } from './auth.utils';
import AppError from '../../errors/AppError';
import bcrypt from 'bcrypt';

import jwt, { JwtPayload } from 'jsonwebtoken';
import { User } from '../user/user.model';
import config from '../../config/config';


const loginUser = async (payload: TLoginUser) => {
  // checking if the user is exist

  const user = await User.isUserExistsByEmail(payload.email);

  if (!user) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'Email not matched please give correct email',
    );
  }
  // checking if the user is already deleted

  //checking if the password is correct

  if (!(await User.isPasswordMatched(payload?.password, user?.password)))
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');

  const isDeleted = user?.isDeleted;

  if (isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is deleted !');
  }

  const jwtPayload = {
    id:user?._id,
    name: user?.name,
    email: user?.email,
    role: user.role as string,
    profilePhoto:user?.profilePhoto
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string,
  );

  return {
    accessToken,
    refreshToken,
  };
};

const refreshToken = async (token: string) => {
  // checking if the given token is valid

  const decoded = verifyToken(
    token,
    config.jwt_refresh_secret as string,
  ) as JwtPayload;

  const { email } = decoded;

  // checking if the user is exist
  const user = await User.isUserExistsByEmail(email);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
  }
  // checking if the user is already deleted
  const isDeleted = user?.isDeleted;

  if (isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is deleted !');
  }

  const jwtPayload = {
    name: user?.name,
    email: user?.email,
    role: user?.role as string,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  return {
    accessToken,
  };
};



export const AuthServices = {
  loginUser,
  refreshToken,
 
};
