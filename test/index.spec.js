'use strict';

var mongoose = require('mongoose');

// Connect
mongoose.connect('mongodb://admin:admin@localhost:27017').catch(err => {
    // eslint-disable-next-line no-console
    console.error(err);
    throw err;
}).then(() => {
    // eslint-disable-next-line no-console
    console.log('Connected to the database...');
});

describe('Mongoose Unique Validator', function() {
    require('./tests/validation.spec')(mongoose);
    require('./tests/types.spec.js')(mongoose);
    require('./tests/messages.spec')(mongoose);

    after(function() {
        mongoose.connection.dropDatabase();
    });
});
