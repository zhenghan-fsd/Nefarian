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

const confirmEmailTemplate = user =>
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
    html: confirmEmailTemplate(user)
  };

  transporter.sendMail(mail);
};

const resetPasswordEmailTemplate = user =>
  `
  <h3>Hey ${user.username},</h3>
  <p>Please reset your password with us by visiting the following link.</p>
  <a href=${user.generateResetPasswordUrl()}>Reset Password</a>
  <p>Alternatively, open the following url in your browser:</p> 
  <p>${user.generateResetPasswordUrl()}</p>
  <p>Thanks</p>
  <p>Nefarian Team</p>
  `;

export const sendResetPasswordEmail = user => {
  const transporter = setup();

  // setup email data with unicode symbols
  const mail = {
    from: '"Nefarian Team" <zhus8251@163.com>',
    to: user.email,
    subject: 'Nefarian Account reset password instructions',
    html: resetPasswordEmailTemplate(user)
  };

  transporter.sendMail(mail);
};
