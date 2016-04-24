import toastr from '../tools/toastr';

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  return response.text().then((text) => Promise.reject(text));
};

export default (path, options = {}) =>
  fetch(
    path,
    Object.assign({ credentials: 'same-origin' }, options)
  )
  .then(checkStatus)
  .then((response) => response.json())
  .then((response) => {
    toastr('success', 'request succeeded', response);
    return response;
  })
  .catch((error) => {
    toastr('warning', 'request failed', error);
    return Promise.reject(error);
  });
