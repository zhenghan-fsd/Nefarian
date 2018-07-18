import nodemailer from 'nodemailer';
import mailerConf from '../conf/mailerConf';

const setup = () =>
  nodemailer.createTransport({
    host: mailerConf.host,
    port: mailerConf.port,
    secure: false, // true for 465, false for other ports
    auth: {
      user: mailerConf.user, // generated ethereal user
      pass: mailerConf.pass // generated ethereal password
    }
  });

const emailTemplate = user =>
  `
  <h3>Hey ${user.username},</h3>
  <p>Please verify your account with us by visiting the following link.</p>
  <a href=${user.generateEmailConfirmationUrl()}>Confirm Account</a>
  <p>Alternatively, open the following url in your browser:</p> 
  <p>${user.generateEmailConfirmationUrl()}</p>
  <p>Thanks</p>
  <p>Nefarian Team</p>
  `;

export const sendConfirmationEmail = user => {
  const transporter = setup();

  // setup email data with unicode symbols
  const mail = {
    from: '"Nefarian Team" <zhus8251@163.com>',
    to: user.email,
    subject: 'Nefarian Account verrification instructions',
    html: emailTemplate(user)
  };

  transporter.sendMail(mail);
};
