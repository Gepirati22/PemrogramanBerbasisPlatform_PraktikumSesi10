const express = require('express');
const bodyParser = require('body-parser');
const mahasiswaController = require('./controllers/mahasiswaController');


const app = express();
const port = 5000;

app.use(bodyParser.json());

app.use('/mahasiswa', mahasiswaController);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
