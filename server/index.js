'use strict';
const express = require('express');
const app = express();
const { request } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const searchCity = require('./searchCity.js');
const ROUTER = require('./Routers');
const nodemailer = require('nodemailer');


app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
}));

app.use(bodyParser.json());

app.post('/', async (request, respons) => {
    let resultSearch = searchCity(request.body.citys, ROUTER);//переменная - итог функции поиска введенного в поле citys города
    const nameCustomer = request.body.fullname;//имя пользователя из поля fullname
    console.log('request.body: ', request.body);

    if (resultSearch === 'yes!') { //присваивание нужного результата в переменную для сообщение в зависимости от итога функции поиска города
        resultSearch = `Hello, mister (madam) ${nameCustomer}! We are glad to cooperate with you. We will contact you shortly to clarify the details of the order.`;
    } else resultSearch = `Sorry, mister (madam) ${nameCustomer}! The terms of your order do not suit us. We look forward to working with you next time.`

    const transporter = nodemailer.createTransport({//создание транспортера с эл.ящиком сервера
        host: 'smtp.yandex.ru',
        port: 465,
        secure: true,
        auth: {
            user: 'olga281205',
            pass: 'Test-@pp-2022$',
        },
    });

    async function sendEmail(resultSearch) {//функция, принимает данные из формы отправки
        const info = await transporter.sendMail({
            from: 'olga281205@yandex.ru', // sender address
            to: request.body.mail, // list of receivers
            subject: "Message from carrier 2", // Subject line
            text: resultSearch, // plain text body
            html: resultSearch, // html body
        });

        console.log(`Email sent to ${request.body.mail}: ${resultSearch}`, info);
    };

    await sendEmail(resultSearch);//вызов функции отправки сообщения, принимающая в качестве 
    //info результат поиска города, возвращающий нужное сообщение
    console.log(request.body);//вывод в консоль для наглядности тела полученногообьекта
    respons.json(resultSearch);//отправка результата с текстом сообщения
});
// Сообщение на почту должно прийти такое же, как пишется в консоль браузера
app.listen(2022, () => {
    console.log('listen on 2022');
});