'use strict';

const nodemailer = require('nodemailer');

const sendLetters = (data, mail) => {
    const transporter = nodemailer.createTransport({//создание транспортера с эл.ящиком сервера
        host: 'smtp.yandex.ru',
        port: 465,
        secure: true,
        auth: {
            user: 'olga281205',
            pass: 'Test-@pp-2022$',
        },
    });

    async function sendEmail() {
        const info = await transporter.sendMail({
            from: 'olga281205@yandex.ru', // sender address
            to: mail, // list of receivers
            subject: "Message from carrier", // Subject line
            text: data, // plain text body
            html: data, // html body
        });

        console.log(`Email sent to ${mail}: ${data}`, info);
    };

    sendEmail();
    
};


module.exports = sendLetters;