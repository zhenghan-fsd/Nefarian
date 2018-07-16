import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const UserSchema = new mongoose.Schema(
  {
    userEmail: { type: String, required: true, lowercase: true, index: true },
    userName: { type: String, required: true },
    userPassword: { type: String, required: true }
  },
  { timestamps: true }
);

UserSchema.methods.isValidPassword = function isValidPassword(userPassword) {
  return bcrypt.compareSync(userPassword, this.userPassword);
};

UserSchema.methods.generateToken = function generateToken() {
  return jwt.sign(
    {
      userEmail: this.userEmail
    },
    'jwtsecret'
  );
};

UserSchema.methods.userLoginResJson = function userLoginResJson() {
  return {
    userEmail: this.userEmail,
    userName: this.userName,
    token: this.generateToken()
  };
};

export default mongoose.model('User', UserSchema);
