const nodemailer = require("nodemailer");
async function emailVerification(email,emailTemplate){
    let transporter = nodemailer.createTransport({
       service:'gmail',
        auth: {
          user: process.env.USEREMAIL, 
          pass: process.env.USERPASS, 
        },
      });
      let info = await transporter.sendMail({
        from: 'citexam', // sender address
        to:email, // list of receivers
        subject: "Creative it Website ", // Subject line
        html: emailTemplate, // html body
      });
}

module.exports = emailVerification;