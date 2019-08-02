export interface ISalesrepMigrationRequest {
    uuid: string;
    user_id: string;
    requested_version: number;
    requested_date: Date;
    completed_date?: Date;
    is_success?: boolean;
}
