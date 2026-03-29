/**
 * Supabase Storage Service
 * Handles file uploads and deletions via Supabase Storage buckets
 */

import { supabase } from '../config/supabase';

export class SupabaseStorageService {
    /**
     * Upload a file buffer to Supabase Storage
     *
     * @param bucket  - Storage bucket name (e.g. 'photos')
     * @param path    - File path inside the bucket (e.g. 'providers/abc-123.png')
     * @param buffer  - File contents as a Buffer
     * @param mimetype - MIME type of the file (e.g. 'image/png')
     * @returns The public URL of the uploaded file
     */
    static async uploadFile(
        bucket: string,
        path: string,
        buffer: Buffer,
        mimetype: string
    ): Promise<string> {
        const { error } = await supabase.storage
            .from(bucket)
            .upload(path, buffer, {
                contentType: mimetype,
                upsert: true,
            });

        if (error) {
            throw new Error(`Supabase upload failed: ${error.message}`);
        }

        const { data: urlData } = supabase.storage
            .from(bucket)
            .getPublicUrl(path);

        return urlData.publicUrl;
    }

    /**
     * Delete a file from Supabase Storage
     *
     * @param bucket - Storage bucket name
     * @param path   - File path inside the bucket
     */
    static async deleteFile(bucket: string, path: string): Promise<void> {
        const { error } = await supabase.storage
            .from(bucket)
            .remove([path]);

        if (error) {
            console.error(`Supabase delete failed: ${error.message}`);
        }
    }

    /**
     * Extract the storage path from a full Supabase public URL
     * Useful for deleting an old file when replacing with a new one
     *
     * @param publicUrl - Full Supabase public URL
     * @param bucket    - Bucket name to strip from the URL
     * @returns The path inside the bucket, or null if not a valid Supabase URL
     */
    static extractPath(publicUrl: string, bucket: string): string | null {
        const marker = `/storage/v1/object/public/${bucket}/`;
        const idx = publicUrl.indexOf(marker);
        if (idx === -1) return null;
        return publicUrl.substring(idx + marker.length);
    }
}
