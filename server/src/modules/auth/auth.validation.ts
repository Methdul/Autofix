import { z } from 'zod';

/**
 * Validation schema for user registration
 */
export const registerSchema = z.object({
  body: z.object({
    email: z.string().email('Invalid email format'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    name: z.string().min(2, 'Name must be at least 2 characters'),
    role: z.enum(['OWNER', 'PROVIDER']),
    phone: z.string().optional(),
    district: z.string().optional(),
    city: z.string().optional(),
  }),
});

/**
 * Validation schema for user login
 */
export const loginSchema = z.object({
  body: z.object({
    email: z.string().email('Invalid email format'),
    password: z.string().min(1, 'Password is required'),
  }),
});
