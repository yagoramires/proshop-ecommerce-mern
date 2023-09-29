import jwt from 'jsonwebtoken';
import asyncHandler from './asyncHandler.js';
import User from '../models/userModel.js';

// Protect Routes
export const protect = asyncHandler(async (req, res, next) => {});
