const express = require("express");
var jwt = require('jsonwebtoken');

const db = require('./models');

const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());

(async () => {
    try {
        await db.sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();


var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));


app.post('/login', (req, res) => {

    //res.json({ msg: 'hey there' });

    if (req.body.username == 'admin' && req.body.password == 'admin') {
        const jwtToken = jwt.sign(
            { id: 1, username: req.body.username },
            'sldkfjlskjflksjdflkjs;lkfdjlksajfoij83479832794kjlkjdslkj01209',
            { expiresIn: "10h" }
        )



        res.json({ status: true, msg: 'successfully loggedin', data: { token: jwtToken } });
    }
    else {
        res.json({ status: false, msg: 'login unsuccesful' });
    }

});


app.listen('2000', () => {
    console.log('api is on http://localhost:2000');
});