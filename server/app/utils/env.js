/*
    ENV константы
 */
import envs from '../constants/envs';

/*
    Текущий ENV
 */
const ENV = process.env.NODE_ENV || 'development';

/*
    Константы проверки текущего ENV
 */
const IS_DEV = ENV === envs.development;
const IS_PROD = ENV === envs.production;

export {
    IS_DEV,
    IS_PROD
};

export default ENV;