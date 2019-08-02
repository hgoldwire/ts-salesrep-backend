import {ISalesrepMigrationRequest} from '@entities';

export interface ISalesrepMigrationRequestsDao {
    getAll: () => Promise<ISalesrepMigrationRequest[]>;
}
