import {ISalesrepMigrationRequest, SalesrepMigrationRequest} from '@entities';
import {ISalesrepMigrationRequestsDao} from './ISalesrepMigrationRequestsDao';
import {MockRealms} from '../MockRealms/Realms.mock';

export class SalesrepMigrationRequestsDao extends MockRealms implements ISalesrepMigrationRequestsDao {

    public async getAll(): Promise<SalesrepMigrationRequest[]> {
        try {
            const db = await super.openDb();
            const objects: IterableIterator<SalesrepMigrationRequest & Realm.Object> = db.objects<SalesrepMigrationRequest>('SalesrepMigrationRequest').values();
            return db.objects<SalesrepMigrationRequest>('SalesrepMigrationRequest').map((f) => f);
        } catch (err) {
            throw err;
        }
    }
}
