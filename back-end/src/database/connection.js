const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { 
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }).catch(error => {
    return 'Database connection failed.';
});

module.exports = mongoose;


