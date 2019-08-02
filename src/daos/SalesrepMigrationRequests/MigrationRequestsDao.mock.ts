import {ISalesrepMigrationRequest} from '@entities';
import {ISalesrepMigrationRequestsDao} from './ISalesrepMigrationRequestsDao';
import {MockRealms} from '../MockRealms/Realms.mock';

export class SalesrepMigrationRequestsDao extends MockRealms implements ISalesrepMigrationRequestsDao {

    public async getAll(): Promise<ISalesrepMigrationRequest[]> {
        try {
            const db = await super.openDb();
            return db.SchemaMigrationRequest;
        } catch (err) {
            throw err;
        }
    }
}
