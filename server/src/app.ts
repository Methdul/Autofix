import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { PrismaService } from './common/prisma.service';
import authRoutes from './modules/auth/auth.routes';
import vehicleRoutes from './modules/vehicle/vehicle.routes';
import bookingRoutes from './modules/bookings/booking.routes';
import providerRoutes from './modules/provider/provider.routes';
import serviceRoutes from './modules/provider/service.routes';
import invoiceRoutes from './modules/invoice/invoice.routes';
import chatbotRoutes from './modules/chatbot/chatbot.routes';
import contactRoutes from './modules/contact/contact.routes';
import profileRoutes from './modules/profile/profile.routes';
import notificationRoutes from './modules/notification/notification.routes';

/**
 * Creates and configures the Express application
 * Follows separation of concerns by keeping app configuration separate from server startup
 * 
 * @returns {Application} Configured Express application
 */
export function createApp(): Application {
    const app = express();
    app.set('trust proxy', 1); // Trust proxy for rate limiting (e.g., Railway/Vercel)

    // Middleware setup
    configureMiddleware(app);

    // Routes setup
    configureRoutes(app);

    // Error handling
    configureErrorHandling(app);

    return app;
}

/**
 * Configure application middleware
 * 
 * @param {Application} app - Express application instance
 */
function configureMiddleware(app: Application): void {
    const allowedOrigins = [
        'https://autofix-lilac.vercel.app',
        'https://autofix.lk',
        'https://www.autofix.lk',
        'http://localhost:5173'
    ];

    // Secure HTTP headers
    // Secure HTTP headers with cross-origin resource policy allowed for images
    app.use(helmet({
        crossOriginResourcePolicy: { policy: "cross-origin" },
        contentSecurityPolicy: {
            directives: {
                ...helmet.contentSecurityPolicy.getDefaultDirectives(),
                "img-src": ["'self'", "data:", "https:", "http:"],
            },
        },
    }));

    // CORS — must come before rate limiter so CORS headers are always present
    app.use(cors({
        origin: (origin, callback) => {
            // Allow requests with no origin (like mobile apps or curl)
            if (!origin) return callback(null, true);
            if (allowedOrigins.indexOf(origin) !== -1 || process.env.NODE_ENV === 'development') {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: true
    }));

    // Rate limiting to prevent brute-force attacks
    const limiter = rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // limit each IP to 100 requests per windowMs
        message: { error: 'Too many requests, please try again later.' },
        standardHeaders: true,
        legacyHeaders: false,
    });
    app.use('/api/', limiter);

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
}

/**
 * Configure application routes
 * 
 * @param {Application} app - Express application instance
 */
function configureRoutes(app: Application): void {
    // Health check endpoint
    app.get('/health', healthCheckHandler);

    // API routes
    app.use('/api/auth', authRoutes);
    app.use('/api/vehicles', vehicleRoutes);
    app.use('/api/bookings', bookingRoutes);
    app.use('/api/providers', providerRoutes);
    app.use('/api/services', serviceRoutes);
    app.use('/api/invoices', invoiceRoutes);
    app.use('/api/chatbot', chatbotRoutes);
    app.use('/api/contact', contactRoutes);
    app.use('/api/profile', profileRoutes);
    app.use('/api/notifications', notificationRoutes);
}

/**
 * Health check endpoint handler
 * Verifies server and database connectivity
 * 
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 */
async function healthCheckHandler(_req: Request, res: Response): Promise<void> {
    const dbHealthy = await PrismaService.healthCheck();

    res.status(dbHealthy ? 200 : 503).json({
        status: dbHealthy ? 'ok' : 'degraded',
        timestamp: new Date().toISOString(),
        database: dbHealthy ? 'connected' : 'disconnected',
    });
}

/**
 * Configure global error handling middleware
 * 
 * @param {Application} app - Express application instance
 */
function configureErrorHandling(app: Application): void {
    // 404 handler
    app.use((_req: Request, res: Response) => {
        res.status(404).json({ error: 'Route not found' });
    });

    // Global error handler
    app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
        console.error('Unhandled error:', err);
        res.status(500).json({ error: 'Internal server error' });
    });
}