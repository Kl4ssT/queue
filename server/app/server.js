/*
    Получение порта сервера
 */
import { PORT } from './config';

/*
    Приложение
 */
import app from './app';

/*
    Запуск сервера
 */
app.listen(PORT, (err) => {
    if (err) throw new Error(err);

    console.log(`Running on port: ${PORT}`);
});