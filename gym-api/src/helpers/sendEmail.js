const transport = require("./smtpTransport");
const { USER_EMAIL } = require("../config/index");

const sendVerificationEmail = (email, verificationToken) => {
  const mailOptions = {
    to: email,
    from: USER_EMAIL,
    subject: "Account Verfication",
    html: `<h1>Your verification token is ${verificationToken}</h1>`,
  };

  transport.sendMail(mailOptions, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Verification email sent");
    }
  });

  console.log("Verification email sent");
};

module.exports = sendVerificationEmail;
