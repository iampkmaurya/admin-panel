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
        await db.sequelize.sync();
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


app.post('/login', async (req, res) => {

    const user = await db.User.findOne({ where: { email: req.body.username } });

    if (!user) {
        res.json({ status: false, msg: 'login unsuccesful' });
        return;
    }

    if (req.body.password == user.password) {
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


app.get('/dashboard', async (req, res) => {


    res.json({
        status: true,
        message: '',
        data: {
            userCount: await db.User.count(),
            loginFailed: 106,
            loginSucess: 107
        }
    })

});



app.post('/account/register', async (req, res) => {

    try {

        const body = req.body;

        await db.User.create({
            firstName: body.fName,
            lastName: body.lName,
            email: body.email,
            password: body.password
        });


        res.json({ status: true, msg: 'successfully register' });
    } catch (error) {
        res.json({ status: false, msg: 'registration unsuccesful' });
    }


})


app.listen('2000', () => {
    console.log('api is on http://localhost:2000');
});