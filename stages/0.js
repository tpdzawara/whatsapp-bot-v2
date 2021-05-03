const manual = require('../instruction');
const bank = require('../db');

function execute(user, msg, contact) {
    let menu = "*Welcome* \n\n";

Object.keys(manual.menu).forEach((value) => {
    let element = manual.menu[value];
    menu += `${value} - ${element.manual}   $ ${element.price} \n`
});

bank.db[user].stage = 1;


return [
    `Hi there! 😁
    Welcome to our WhatsApp Shop and Win Promotion.
    Before you start , do you mind introducing yourself to us.
    `
]

}

exports.execute = execute;

