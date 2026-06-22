import jwt from "jsonwebtoken";

import User from "../models/User.model.js";

import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

import {
    generateTokens,
    clearUserTokens,
    verifyStoredRefreshToken
} from "../services/token.service.js";

const cookieOptions = {
    httpOnly: true,
    secure: false, // true in production
    sameSite: "strict"
};

// ======================
// REGISTER
// ======================

export const registerUser = asyncHandler(
    async (req, res) => {

        const {
            fullName,
            username,
            email,
            password
        } = req.body;

        const existingUser = await User.findOne({
            $or: [
                { email },
                { username }
            ]
        });

        if (existingUser) {
            throw new ApiError(
                409,
                "User already exists"
            );
        }

        const user = await User.create({
            fullName,
            username,
            email,
            password
        });

        const {
            accessToken,
            refreshToken
        } = await generateTokens(
            user._id
        );

        const createdUser =
            await User.findById(
                user._id
            ).select(
                "-password -refreshToken"
            );

        return res
            .status(201)
            .cookie(
                "accessToken",
                accessToken,
                cookieOptions
            )
            .cookie(
                "refreshToken",
                refreshToken,
                cookieOptions
            )
            .json(
                new ApiResponse(
                    201,
                    {
                        user: createdUser,
                        accessToken
                    },
                    "Registration successful"
                )
            );
    }
);

// ======================
// LOGIN
// ======================

export const loginUser = asyncHandler(
    async (req, res) => {

        const {
            email,
            password
        } = req.body;

        const user = await User
            .findOne({ email })
            .select("+password");

        if (!user) {
            throw new ApiError(
                401,
                "Invalid credentials"
            );
        }

        const isPasswordCorrect =
            await user.comparePassword(
                password
            );

        if (!isPasswordCorrect) {
            throw new ApiError(
                401,
                "Invalid credentials"
            );
        }

        const {
            accessToken,
            refreshToken
        } = await generateTokens(
            user._id
        );

        user.lastLogin = new Date();

        await user.save({
            validateBeforeSave: false
        });

        const loggedInUser =
            await User.findById(
                user._id
            ).select(
                "-password -refreshToken"
            );

        return res
            .status(200)
            .cookie(
                "accessToken",
                accessToken,
                cookieOptions
            )
            .cookie(
                "refreshToken",
                refreshToken,
                cookieOptions
            )
            .json(
                new ApiResponse(
                    200,
                    {
                        user: loggedInUser,
                        accessToken
                    },
                    "Login successful"
                )
            );
    }
);

// ======================
// LOGOUT
// ======================

export const logoutUser = asyncHandler(
    async (req, res) => {

        await clearUserTokens(
            req.user._id
        );

        return res
            .clearCookie(
                "accessToken",
                cookieOptions
            )
            .clearCookie(
                "refreshToken",
                cookieOptions
            )
            .status(200)
            .json(
                new ApiResponse(
                    200,
                    {},
                    "Logout successful"
                )
            );
    }
);
// const existingEmail = await User.findOne({ email });

// if (existingEmail) {
//   throw new ApiError(
//     409,
//     "Email already exists"
//   );
// }

// const existingUsername = await User.findOne({ username });

// if (existingUsername) {
//   throw new ApiError(
//     409,
//     "Username already exists"
//   );
// }
// ======================
// REFRESH TOKEN
// ======================

export const refreshAccessToken =
    asyncHandler(
        async (req, res) => {

            const incomingRefresh =
                req.cookies.refreshToken;

            if (!incomingRefresh) {
                throw new ApiError(
                    401,
                    "Refresh token missing"
                );
            }

            const decoded =
                jwt.verify(
                    incomingRefresh,
                    process.env.JWT_REFRESH_SECRET
                );

            const user =
                await User.findById(
                    decoded.id
                );

            if (!user) {
                throw new ApiError(
                    404,
                    "User not found"
                );
            }

            await verifyStoredRefreshToken(
                user,
                incomingRefresh
            );

            const accessToken =
                user.generateAccessToken();

            return res
                .cookie(
                    "accessToken",
                    accessToken,
                    cookieOptions
                )
                .status(200)
                .json(
                    new ApiResponse(
                        200,
                        {
                            accessToken
                        },
                        "Token refreshed"
                    )
                );
        }
    );