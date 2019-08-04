import jsonfile from 'jsonfile';
import Realm from 'realm';
import {ISalesrepMigrationRequest, SalesrepMigrationRequest} from '@entities';
import UpdateMode = Realm.UpdateMode;

export class MockRealms {

    private readonly dbFilePath = 'src/daos/MockRealms/salesrep-migration-request.json';

    private populateSalesRepMigrationRequests = (realm: Realm) => {
        const migrationsJson: ISalesrepMigrationRequest[] = jsonfile.readFileSync(this.dbFilePath).SchemaMigrationRequest;
        const migrations = migrationsJson.map((migration) => new SalesrepMigrationRequest(migration));
        realm.write(() => {
            migrations.forEach((smr) => {
                realm.create<SalesrepMigrationRequest>('SalesrepMigrationRequest', smr, UpdateMode.All)
            });
        });
        return realm;
    }

    protected async openDb(): Promise<Realm> {
        const config: Realm.Configuration = {
            inMemory: true,
            schema: [SalesrepMigrationRequest.schema],
            schemaVersion: 1,
        };
        const realm = await Realm.open(config);
        return this.populateSalesRepMigrationRequests(realm);
    }

    protected saveDb(db: any): Promise<any> {
        return jsonfile.writeFile(this.dbFilePath, db);
    }
}
