import { authenticate, authorize, AuthenticatedRequest } from '../common/middleware/auth.middleware';
import { Response, NextFunction } from 'express';
import { UserRole } from '../types/user.types';
import * as jwtUtil from '../utils/jwt.util';

// Mock the JWT utility
jest.mock('../utils/jwt.util');

describe('Auth Middleware', () => {
    let mockRequest: Partial<AuthenticatedRequest>;
    let mockResponse: Partial<Response>;
    let mockNext: NextFunction;

    beforeEach(() => {
        mockRequest = {
            headers: {}
        };
        mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        mockNext = jest.fn();
        jest.clearAllMocks();
    });

    describe('authenticate', () => {
        it('should return 401 if no authorization header is provided', () => {
            authenticate(mockRequest as AuthenticatedRequest, mockResponse as Response, mockNext);
            
            expect(mockResponse.status).toHaveBeenCalledWith(401);
            expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Access denied. No token provided.' });
            expect(mockNext).not.toHaveBeenCalled();
        });

        it('should return 401 if token does not start with Bearer', () => {
            mockRequest.headers = { authorization: 'Basic some-token' };
            
            authenticate(mockRequest as AuthenticatedRequest, mockResponse as Response, mockNext);
            
            expect(mockResponse.status).toHaveBeenCalledWith(401);
            expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Access denied. No token provided.' });
        });

        it('should return 401 if token is invalid', () => {
            mockRequest.headers = { authorization: 'Bearer invalid-token' };
            (jwtUtil.verifyToken as jest.Mock).mockReturnValue(null);
            
            authenticate(mockRequest as AuthenticatedRequest, mockResponse as Response, mockNext);
            
            expect(mockResponse.status).toHaveBeenCalledWith(401);
            expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Invalid or expired token.' });
        });

        it('should call next() and attach user to request if token is valid', () => {
            const mockPayload = { userId: '123', email: 'test@test.com', role: UserRole.OWNER };
            mockRequest.headers = { authorization: 'Bearer valid-token' };
            (jwtUtil.verifyToken as jest.Mock).mockReturnValue(mockPayload);
            
            authenticate(mockRequest as AuthenticatedRequest, mockResponse as Response, mockNext);
            
            expect(mockRequest.user).toEqual(mockPayload);
            expect(mockNext).toHaveBeenCalled();
        });
    });

    describe('authorize', () => {
        it('should return 401 if user is not attached to request', () => {
            const middleware = authorize([UserRole.OWNER]);
            middleware(mockRequest as AuthenticatedRequest, mockResponse as Response, mockNext);
            
            expect(mockResponse.status).toHaveBeenCalledWith(401);
            expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Authentication required.' });
        });

        it('should return 403 if user role is not in allowed list', () => {
            mockRequest.user = { userId: '123', email: 'test@test.com', role: 'INVALID_ROLE' } as any; // Using an arbitrary non-matching role
            const middleware = authorize([UserRole.OWNER]);
            
            middleware(mockRequest as AuthenticatedRequest, mockResponse as Response, mockNext);
            
            expect(mockResponse.status).toHaveBeenCalledWith(403);
            expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Access denied. Insufficient permissions.' });
        });

        it('should call next() if user role is allowed', () => {
            mockRequest.user = { userId: '123', email: 'test@test.com', role: UserRole.OWNER } as any;
            const middleware = authorize([UserRole.OWNER, UserRole.PROVIDER]);
            
            middleware(mockRequest as AuthenticatedRequest, mockResponse as Response, mockNext);
            
            expect(mockNext).toHaveBeenCalled();
        });
    });
});
