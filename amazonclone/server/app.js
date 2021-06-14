const express = require('express');
const connectDB = require('./config/db');
const morgan = require('morgan');

const app = express();

connectDB();

app.use(morgan('tiny'));

app.get('/', (req, res) => res.send('yo'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));

