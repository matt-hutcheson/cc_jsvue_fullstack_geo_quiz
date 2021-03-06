const port = process.env.PORT || 3000;
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require("morgan");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require('dotenv').config();

const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());
app.use(morgan("dev"));

mongoose.connect(process.env.SERVER_KEY, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true })
    .then(() => {
        console.log("Database is connected");
    })
    .catch(err => {
        console.log({ database_error: err })
    })

const resultsRouter = require("./helpers/UserRouter.js")
app.use('/api', resultsRouter)

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/public/'));
    app.get("/", (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

app.listen(port, function() {
    console.log(process.env.NODE_ENV)
    console.log(`Listening on port ${ this.address().port }`);
});

// MongoClient.connect(process.env.SERVER_KEY, { useNewUrlParser: true})
//     .then((client) => {
//         const db = client.db('geoquiz');
//         const resultsCollection = db.collection('results');
//         const resultsRouter = createRouter(resultsCollection);
//         app.use('/api/results', resultsRouter);
//     })
//     .catch(console.error);


