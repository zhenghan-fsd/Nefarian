import _ from 'lodash';

export default err => {
  const result = {};

  _.forEach(err, (val, key) => {
    console.log('*****************************');
    console.log(val);
    console.log(key);
    console.log('*****************************');
    result[key] = val.message;
  });

  return result;
};
