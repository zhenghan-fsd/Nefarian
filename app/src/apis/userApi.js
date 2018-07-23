import axios from 'axios';

export default {
  login: user =>
    axios.post('/api/user/login', { user }).then(res => res.data.user),
  signup: user =>
    axios.post('/api/user/signup', { user }).then(res => res.data.user),
  confirm: token =>
    axios.post('/api/user/confirm', { token }).then(res => res.data.user),
  forgotPassword: email =>
    axios
      .post('/api/user/forgot_password', { email })
      .then(res => res.data.user),
  resetPassword: data =>
    axios.post('/api/user/reset_password', { data }).then(res => res.data.user),
  verifyResetPassword: token =>
    axios
      .post('/api/user/verify_reset_password', { token })
      .then(res => res.data.user)
};
