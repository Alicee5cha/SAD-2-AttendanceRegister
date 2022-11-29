import express from 'express';
import { param } from 'express-validator';
import { getUserAttendanceController } from '../controllers';
import { validateRequest } from '../middlewares';

const router = express.Router();

router.get(
  '/api/user/:id/session/:sessionId/attendance',
  [
    param('id')
      .isString()
      .trim()
      .notEmpty()
      .withMessage('User id must be a string'),
    param('sessionId')
      .isUUID()
      .trim()
      .notEmpty()
      .withMessage('Session id must be a UUID'),
  ],
  validateRequest,
  getUserAttendanceController
);

export { router as getUserAttendanceRouter };
