const nodemailer = require('nodemailer');

// let testAccount = await nodemailer.createTestAccount();
async function main() {
  let testAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'demetrius.raynor6@ethereal.email', // generated ethereal user
        pass: 'RVpejvYPYGCNf55cyg', // generated ethereal password
      },

    });

    let info = await transporter.sendMail({
      from: '"Endless saveings 👻" <foo@example.com>', // sender address
      to: "adisemamo211@gmail.com
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.log(error););
