import _ from 'lodash';

export default err => {
  const result = {};

  _.forEach(err, (val, key) => {
    result[key] = val.message;
  });

  return result;
};
