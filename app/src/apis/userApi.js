import axios from 'axios';

export default {
  login: user =>
    axios.post('/api/user/login', { user }).then(res => res.data.user),
  signup: user =>
    axios.post('/api/user/signup', { user }).then(res => res.data.user),
  confirm: token =>
    axios.post('/api/user/confirm', { token }).then(res => res.data.user)
};
