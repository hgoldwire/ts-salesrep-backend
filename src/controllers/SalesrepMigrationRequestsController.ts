import {Get, JsonController} from 'routing-controllers';
import {SalesrepMigrationRequestsDao} from '../daos/SalesrepMigrationRequests/MigrationRequestsDao.mock';

@JsonController()
export class MigrationRequestsController {

    constructor(private migrationsRequestsDao: SalesrepMigrationRequestsDao) {
    }

    @Get('/migration_requests')
    private getAll() {
        // return 'This action returns all Schema Migration Requests';
        return this.migrationsRequestsDao.getAll();
    }

}
