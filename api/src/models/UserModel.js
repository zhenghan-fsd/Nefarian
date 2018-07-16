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
    username: { type: String, required: true },
    password: { type: String, required: true },
    confirmed: { type: Boolean, default: false }
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
      email: this.email
    },
    'jwtsecret'
  );
};

UserSchema.methods.userLoginResJson = function userLoginResJson() {
  return {
    email: this.email,
    username: this.username,
    confirmed: this.confirmed,
    token: this.generateToken()
  };
};

UserSchema.plugin(uniqueValidator, { message: 'Email is already taken.' });

export default mongoose.model('User', UserSchema);
