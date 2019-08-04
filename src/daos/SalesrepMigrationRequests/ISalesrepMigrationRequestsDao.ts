import {SalesrepMigrationRequest} from '@entities';

export interface ISalesrepMigrationRequestsDao {
    getAll: () => Promise<SalesrepMigrationRequest[]>;
}
