import jsonfile from 'jsonfile';

export class MockRealms {

    private readonly dbFilePath = 'src/daos/MockRealms/salesrep-migration-request.json';

    protected openDb(): Promise<any> {
        return jsonfile.readFile(this.dbFilePath);
    }

    protected saveDb(db: any): Promise<any> {
        return jsonfile.writeFile(this.dbFilePath, db);
    }
}
