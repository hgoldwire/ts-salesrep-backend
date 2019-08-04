import {SalesrepMigrationRequest} from '@entities';
import {ISalesrepMigrationRequestsDao} from './ISalesrepMigrationRequestsDao';
import {MockRealms} from '../MockRealms/Realms.mock';

export class SalesrepMigrationRequestsDao extends MockRealms implements ISalesrepMigrationRequestsDao {

    public async getAll(): Promise<SalesrepMigrationRequest[]> {
        try {
            const db = await super.openDb();
            const objects = db.objects<SalesrepMigrationRequest>('SalesrepMigrationRequest');
            return Array.from(objects);
        } catch (err) {
            throw err;
        }
    }
}
