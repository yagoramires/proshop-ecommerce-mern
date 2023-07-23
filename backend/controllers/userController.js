import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
  res.send('auth user');
});

// @desc Register user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  res.send('register user');
});

// @desc Auth user & get token
// @route POST /api/users/logout
// @access Private
const logoutUser = asyncHandler(async (req, res) => {
  res.send('logout user');
});

// @desc Get user profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send('get user profile');
});

// @desc Update user profile
// @route PULL /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send('update user profile');
});

// @desc Get all users
// @route GET /api/users/
// @access Private/Admin
const getAllUsers = asyncHandler(async (req, res) => {
  res.send('update user profile');
});

// @desc Get user by id
// @route GET /api/users/:id
// @access Private/Admin
const getUser = asyncHandler(async (req, res) => {
  res.send('delete user');
});

// @desc Get all users
// @route GET /api/users/:id
// @access Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send('delete user');
});
