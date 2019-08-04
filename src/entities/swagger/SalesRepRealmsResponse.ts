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
import {Header} from '../model';

export interface SalesRepRealmsResponse {
    header: Header;
    realms?: string[];
    /**
     * Return realms for the provided salesRepId
     */
    salesRepId: string;
}
