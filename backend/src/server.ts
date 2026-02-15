import dotenv from 'dotenv';
dotenv.config();

import { createApp } from './app';
import { PrismaService } from './common/prisma.service';

const port = process.env.PORT || 3000;

async function bootstrap(): Promise<void> {
    try {
        // Connect to database via Prisma
        await PrismaService.connect();

        // Create and start Express app
        const app = createApp();

        app.listen(port, () => {
            console.log(`🚀 Server is running on http://localhost:${port}`);
        });

        // Graceful shutdown handlers
        const shutdown = async () => {
            console.log('\n🛑 Shutting down gracefully...');
            await PrismaService.disconnect();
            process.exit(0);
        };

        process.on('SIGINT', shutdown);
        process.on('SIGTERM', shutdown);
    } catch (error) {
        console.error('❌ Failed to start server:', error);
        await PrismaService.disconnect();
        process.exit(1);
    }
}

bootstrap();
