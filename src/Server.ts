import 'reflect-metadata'; // this shim is required
import {createExpressServer, useContainer} from 'routing-controllers';
import {UserController} from './controllers/UserController';
import logger from 'morgan';
import {Container} from 'typedi';
import {UserDao} from './daos/User/UserDao';
import {UserDao as FakeUserDao} from './daos/User/UserDao.mock';

useContainer(Container);

// Container.set(UserDao, new UserDao());
Container.set(UserDao, new FakeUserDao());

const app = createExpressServer({
    controllers: [UserController], // we specify controllers we want to use
    classTransformer: true,
    validation: true,
});

app.use(logger('dev'));

export default app;
