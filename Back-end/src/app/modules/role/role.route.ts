import { UserRole } from '@prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import { roleController } from './role.controller';

const router = express.Router();

router.post(
  '/',
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.USER),
  roleController.createRole
);

export const roleRoutes = router;
