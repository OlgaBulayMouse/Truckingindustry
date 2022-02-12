'use strict';

const express = require('express');
const router = express.Router();
const searchCity = require('./service/searchCity');
const ROUTER = require('./Routers');
const searchRouters = require('.//service/searchRouters');
const sendLetters = require('./service/sendLetters');


router.post('/', async (request, respons) => {
    let resultSearch = searchCity(request.body.citys, ROUTER);//переменная - итог функции поиска введенного в поле citys города
    const nameCustomer = request.body.fullname;//имя пользователя из поля fullname
    
    const textMessage = searchRouters(resultSearch, nameCustomer);//формулировка письма

    sendLetters(textMessage, request.body.mail);//отправка письма

    respons.json(textMessage);//отправка результата с текстом сообщения

    console.log(request.body);

});

module.exports = router;
