const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

require('../src/controllers/index')(app);

app.listen(PORT, () => `Server running at ${PORT}`);