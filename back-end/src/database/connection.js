const mongoose = require('mongoose');

try {
    mongoose.connect('mongodb+srv://john_doe:00000@cluster0.1heam.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    });
} catch (error) {
    return error;
}


module.exports = mongoose;