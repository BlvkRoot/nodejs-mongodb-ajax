require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

require('../src/controllers/index')(app);

app.listen(PORT, () => console.log(`Server running at ${PORT}`));