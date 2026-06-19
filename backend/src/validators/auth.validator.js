import { z } from "zod";

// REGISTER VALIDATION
export const registerSchema = z.object({

    fullName: z
        .string()
        .trim()
        .min(3, "Full name must be at least 3 characters")
        .max(50, "Full name cannot exceed 50 characters"),
 username: z
        .string()
        .trim()
        .toLowerCase()
        .min(3, "Username must be at least 3 characters")
        .max(20, "Username cannot exceed 20 characters")
        .regex(
            /^[a-z0-9_]+$/,
            "Username can only contain lowercase letters, numbers and underscores"
        ),
         email: z
        .string()
        //trim is use to space recoorganization , space avoided
        .trim()
        .email("Invalid email address"),

    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(32, "Password cannot exceed 32 characters")
        // regex ka use karte h check the password is follow the strong password
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
            "Password must contain uppercase, lowercase and a number"
        )
});

// LOGIN VALIDATION
export const loginSchema = z.object({

    email: z
        .string()
        .trim()
        .email("Invalid email address"),

    password: z
        .string()
        .min(1, "Password is required")
});

// CHANGE PASSWORD
export const changePasswordSchema = z.object({

    oldPassword: z
        .string()
        .min(1, "Old password is required"),

    newPassword: z
        .string()
        .min(8, "New password must be at least 8 characters")
        .max(32)
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
            "Password must contain uppercase, lowercase and a number"
        )
});

// FORGOT PASSWORD
export const forgotPasswordSchema = z.object({

    email: z
        .string()
        .trim()
        .email("Invalid email address")
});

// RESET PASSWORD
export const resetPasswordSchema = z.object({

    token: z
        .string()
        .min(1, "Reset token required"),

    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
            "Password must contain uppercase, lowercase and a number"
        )
});