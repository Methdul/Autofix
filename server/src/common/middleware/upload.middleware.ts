/**
 * Multer upload middleware
 * Handles multipart/form-data file uploads using memory storage
 * Files are kept in buffer for subsequent upload to Supabase Storage
 */

import multer from 'multer';

/** Memory storage — file buffer stays in req.file.buffer */
const storage = multer.memoryStorage();

/** Only accept jpeg / png / webp images up to 5 MB */
export const uploadPhoto = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: (_req, file, cb) => {
        const allowed = ['image/jpeg', 'image/png', 'image/webp'];
        cb(null, allowed.includes(file.mimetype));
    },
}).single('photo');