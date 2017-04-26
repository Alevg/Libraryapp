var mongoose = require('mongoose');

module.exports = mongoose.model('Autor', {
    "firstName": string,
    "lastName": string,
    "id": number
});

module.exports = mongoose.model('Book', {
    "title": string,
    "id": string,
    "autorId": number
});
