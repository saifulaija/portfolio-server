/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';

import { UserControllers } from './user.controller';
import { USER_ROLE } from './user.constant';
import auth from '../../middleware/auth';


const router = express.Router();

router.post(
  '/create-user',

  // validateRequest(UserValidation.createUserValidationSchema),

  UserControllers.createUser,
);

router.get('/', auth(USER_ROLE.superAdmin), UserControllers.getAllUser);

router.get(
  '/me',
  auth(USER_ROLE.superAdmin, USER_ROLE.user),
  UserControllers.getMe,
);

export const UserRoutes = router;
