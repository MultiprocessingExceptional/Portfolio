import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: 'Test Email',
    text: 'This is a test email.'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error sending test email:', error);
    } else {
        console.log('Test email sent:', info.response);
    }
});
