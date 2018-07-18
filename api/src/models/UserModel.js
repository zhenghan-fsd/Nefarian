import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import uniqueValidator from 'mongoose-unique-validator';

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      index: true,
      unique: true
    },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    confirmed: { type: Boolean, default: false },
    emailConfirmation: { type: String, default: '' }
  },
  { timestamps: true }
);

UserSchema.methods.setPassword = function setPassword(password) {
  this.password = bcrypt.hashSync(password, 10);
};

UserSchema.methods.isValidPassword = function isValidPassword(password) {
  return bcrypt.compareSync(password, this.password);
};

UserSchema.methods.generateToken = function generateToken() {
  return jwt.sign(
    {
      email: this.email,
      username: this.username,
      confirmed: this.confirmed
    },
    'jwtsecret'
  );
};

UserSchema.methods.setEmailConfirmation = function setEmailConfirmation() {
  this.emailConfirmation = this.generateToken();
};

UserSchema.methods.generateEmailConfirmationUrl = function setEmailConfirmation() {
  return `${process.env.WEB_HOST}/confirmation/${this.emailConfirmation}`;
};

UserSchema.methods.userLoginResJson = function userLoginResJson() {
  return {
    email: this.email,
    username: this.username,
    confirmed: this.confirmed,
    token: this.generateToken()
  };
};

UserSchema.plugin(uniqueValidator, {
  message: '{PATH} has already been taken.'
});

export default mongoose.model('User', UserSchema);
