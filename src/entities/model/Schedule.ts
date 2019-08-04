/**
 * SalesRep API
 * Sales Rep Backend APIs
 *
 * OpenAPI spec version: 0.0.55
 * Contact: theodore.dasher@roivant.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface Schedule {
    appointmentType: string;
    durationMinutes: number;
    frequency: string;
    hasTime: boolean;
    id: string;
    placeId?: string;
    priorityIndex: number;
    providerId: string;
    sortIndex: number;
    startDate: string;
}
