'use strict';

const searchRouters = (data, name) => {
    let message;
    if (data === 'yes!') { //присваивание нужного результата в переменную для сообщение в зависимости от итога функции поиска города
        message = `Hello, mister (madam) ${name}! We are glad to cooperate with you. We will contact you shortly to clarify the details of the order.`;
    } else message = `Sorry, mister (madam) ${name}! The terms of your order do not suit us. We look forward to working with you next time.`;
    return message;
};

module.exports = searchRouters;
