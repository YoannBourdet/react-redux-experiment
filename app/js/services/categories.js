import { api } from '../../../global.config.babel';
import req from './req';

const pathToApi = (category) => `${api.path}/${category}?ts=${api.keys.timestamp}&apikey=${api.keys.public}&hash=${api.md5}`;

export default (category) => req(pathToApi(category), {});
