const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail', // ou outro serviço de e-mail
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email enviado com sucesso');
    } catch (error) {
        console.error('Erro ao enviar email:', error);
    }
};

const sendRegistrationConfirmation = (email) => {
    const subject = 'Confirmação de Cadastro';
    const text = 'Seu cadastro foi realizado com sucesso!';
    sendEmail(email, subject, text);
};

const sendPasswordReset = (email) => {
    const subject = 'Recuperação de Senha';
    const text = 'Clique no link para redefinir sua senha.';
    sendEmail(email, subject, text);
};

module.exports = {
    sendRegistrationConfirmation,
    sendPasswordReset,
};