const res = require('express/lib/response');
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'suvarnasatkar7@gmail.com',
        pass: 'Shalmalie@1'
    }
});


const sentwelcomemail = (user_email, user_name) => {

    var mailOptions = {
        to: user_email,
        from: 'suvarnasatkar7@gmail.com',
        subject: 'sending welcome mail',
        text: 'hi welcome. ${user_name} hi !'
    };
    transporter.sendMail(mailOptions, function (error, info) {


        if (error) 
        {
            console.log(error);
        }
        else{

            console.log('email sent'+info.response);
            res.send(info.response)
        }
    })
}
module.exports={sentwelcomemail}