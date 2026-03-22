import { generateToken, verifyToken } from '../utils/jwt.util';
import { UserRole } from '../types/user.types';
import jwt from 'jsonwebtoken';

describe('JWT Utilities', () => {
    const mockPayload = {
        userId: 'test-user-id',
        email: 'test@example.com',
        role: UserRole.OWNER,
    };

    describe('generateToken', () => {
        it('should generate a valid JWT string', () => {
            const token = generateToken(mockPayload);
            expect(typeof token).toBe('string');
            expect(token.split('.').length).toBe(3); // JWTs have 3 parts
        });

        it('should encode the provided payload', () => {
            const token = generateToken(mockPayload);
            const decoded = jwt.decode(token) as any;
            expect(decoded.userId).toBe(mockPayload.userId);
            expect(decoded.email).toBe(mockPayload.email);
            expect(decoded.role).toBe(mockPayload.role);
        });
    });

    describe('verifyToken', () => {
        it('should return the payload for a valid token', () => {
            const token = generateToken(mockPayload);
            const payload = verifyToken(token);
            expect(payload).not.toBeNull();
            expect(payload?.userId).toBe(mockPayload.userId);
        });

        it('should return null for an invalid token', () => {
            const invalidToken = 'this.is.notvalid';
            const payload = verifyToken(invalidToken);
            expect(payload).toBeNull();
        });

        it('should return null when token signature is tampered with', () => {
            const token = generateToken(mockPayload);
            const tamperedToken = token.slice(0, -5) + 'abcde';
            const payload = verifyToken(tamperedToken);
            expect(payload).toBeNull();
        });
    });
});
