import req from './req';

export default (category, parameters, options = {}) =>
req(category, parameters, Object.assign({}, options));
