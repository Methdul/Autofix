import 'dotenv/config';
import nodemailer from 'nodemailer';

const mailer = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

async function run() {
    try {
        console.log('Sending from:', process.env.SMTP_USER);
        const info = await mailer.sendMail({
            from: `"AutoFix Contact" <${process.env.SMTP_USER}>`,
            to: process.env.SMTP_USER,
            subject: 'Test Email from Contact Form code',
            html: '<p>Test</p>',
        });
        console.log('Success:', info.messageId);
    } catch (err) {
        if (err instanceof Error) {
            console.error('Failed:', err.message);
        } else {
            console.error('Failed:', String(err));
        }
    }
}

run();
