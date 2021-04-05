const express = require('express');
const app = express();
const PORT = 5000

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:1234@cluster0.3sft5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello'));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));