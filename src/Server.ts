import 'reflect-metadata'; // this shim is required
import {createExpressServer, useContainer} from 'routing-controllers';
import logger from 'morgan';
import {Container} from 'typedi';
import {UserDao} from './daos/User/UserDao';
import {UserDao as FakeUserDao} from './daos/User/UserDao.mock';
import {SalesrepMigrationRequestsDao} from './daos/SalesrepMigrationRequests/MigrationRequestsDao.mock';
import {UserController} from './controllers/UserController';
import {MigrationRequestsController} from './controllers/SalesrepMigrationRequestsController';

useContainer(Container);

// Container.set(UserDao, new UserDao());
Container.set(UserDao, new FakeUserDao());
Container.set(SalesrepMigrationRequestsDao, new SalesrepMigrationRequestsDao());

// new SalesrepMigrationRequestsDao().getAll().then(smr => console.log(smr));

const app = createExpressServer({
    controllers: [UserController, MigrationRequestsController], // we specify controllers we want to use
});

app.use(logger('dev'));

export default app;
