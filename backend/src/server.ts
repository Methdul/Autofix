import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { supabase } from './config/supabase';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
    res.json({ message: 'Welcome to Autofix Backend API' });
});

app.get('/health', async (_req, res) => {
    try {
        const { error } = await supabase.from('_health_check').select('*').limit(1);

        // Check if the error is related to table existence, which implies connectivity.
        // If supabase returns an error saying "Could not find the table", it means we reached the server.
        const isTableMissingError = error && (
            error.code === '42P01' ||
            error.code === 'PGRST301' ||
            (error.message && error.message.includes('Could not find the table'))
        );

        const isConnected = !error || isTableMissingError;

        res.json({
            status: 'ok',
            timestamp: new Date(),
            database: {
                connected: isConnected,
                message: isConnected ? 'Connected to Supabase' : 'Failed to connect to Supabase',
                details: error ? error.message : null,
                hint: !isConnected ? 'Check your SUPABASE_URL and SUPABASE_KEY' : undefined
            }
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Health check failed',
            error: err instanceof Error ? err.message : 'Unknown error'
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});