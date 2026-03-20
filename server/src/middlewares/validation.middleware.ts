import { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError } from 'zod';

/**
 * Middleware for validating request data using Zod schemas
 * Supports validation of body, query, and params
 * 
 * @param {ZodSchema} schema - Zod schema to validate against
 * @returns {Function} Express middleware function
 */
export const validate = (schema: ZodSchema) => 
    async (req: Request, res: Response, next: NextFunction) => {
    try {
        await schema.parseAsync({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        return next();
    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json({
                error: 'Validation failed',
                details: error.issues.map(err => ({
                    path: err.path.join('.'),
                    message: err.message,
                })),
            });
        }
        return res.status(500).json({ error: 'Internal server error during validation' });
    }
};
