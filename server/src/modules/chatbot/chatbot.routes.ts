import { Router } from 'express';
import { chatHandler } from './chatbot.controller';

const chatbotRoutes = Router();

chatbotRoutes.post('/', chatHandler);

export default chatbotRoutes;