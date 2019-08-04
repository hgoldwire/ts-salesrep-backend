export interface ISalesrepMigrationRequest {
    uuid: string;
    user_id: string;
    requested_version: number;
    requested_date: Date;
    completed_date?: Date;
    is_success?: boolean;
}

export class SalesrepMigrationRequest implements ISalesrepMigrationRequest {
    public uuid: string;
    public user_id: string;
    public requested_version: number;
    public requested_date: Date;
    public completed_date?: Date;
    public is_success?: boolean;

    public static schema: Realm.ObjectSchema = {
        name: 'SalesrepMigrationRequest',
        primaryKey: 'uuid',
        properties: {
            uuid: 'string',
            user_id: 'string',
            requested_version: 'int',
            requested_date: 'date',
            completed_date: 'date?',
            is_success: 'bool?'
        },
    };

    constructor(blob: ISalesrepMigrationRequest) {
        this.uuid = blob.uuid;
        this.user_id = blob.user_id;
        this.requested_version = blob.requested_version;
        this.requested_date = blob.requested_date;
        this.completed_date = blob.completed_date;
        this.is_success = blob.is_success;
    }
}
