/*
    Инструменты
 */
import dotenv from 'dotenv';
import config from 'config';

/*
    ENV константы
 */
import envs from './constants/envs';

/*
    Текущий ENV
 */
import env from './utils/env';

/*
    Инициализация файла .env
 */
dotenv.config();

/*
    Проверка на существование ENV
 */
if (!envs[env])
    throw new Error(`Unknown env: '${env}'`);

/*
    Получение данных
 */
const PORT = process.env.PORT || config.get('port');
const DB = {
    db_name: process.env.DBNAME || config.get('db.name'),
    db_user: process.env.DBUSER || config.get('db.user'),
    db_pass: process.env.DBPASS || config.get('db.pass'),
    dialect: process.env.DIALECT || config.get('db.dialect')
};

const JWT_SECRET = process.env.JWT_SECRET;

export {
    PORT,
    DB,
    JWT_SECRET
};