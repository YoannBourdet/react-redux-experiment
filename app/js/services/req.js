import { api } from '../../../global.config.babel';
import queryString from 'query-string';
import toastr from '../tools/toastr';

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  return response.text().then((text) => Promise.reject(text));
};

export default (path, parameters, options = {}) => {

  const defaultParameters = {
    ts: api.keys.timestamp,
    apikey: api.keys.public,
    hash: api.md5,
  };

  const basePath = `${api.path}/${path}`;
  const updatedParameters = Object.assign({}, defaultParameters, parameters);

  const qsParameters = queryString.stringify(updatedParameters);

  return fetch(
    `${basePath}?${qsParameters}`,
    Object.assign({ credentials: 'same-origin' }, options)
  )
  .then(checkStatus)
  .then((response) => response.json())
  .then((response) => {
    toastr('success', 'Request succeeded', response);
    return response;
  })
  .catch((error) => {
    toastr('warning', 'Request failed', error);
    return Promise.reject(error);
  });
};
