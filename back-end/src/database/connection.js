const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://john_doe:00000@cluster0.1heam.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }).catch(error => {
    return 'Database connection failed.';
});

module.exports = mongoose;


