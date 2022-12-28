import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'ismael.okuneva@ethereal.email',
        pass: 'RRpkdYADuR6KtckbaY'
    }
});

export default transporter