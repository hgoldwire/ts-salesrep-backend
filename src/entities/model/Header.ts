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

export interface Header {
    createEpoch: number;
    createdBy?: string;
    objectType: string;
    refId?: string; // Used to chain messages to trace the lineage of its generation
    uri: string;
    version: string;
}
