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

export interface CreateUserRequest {
    header: Header;
    /**
     * Realm password
     */
    password: string;
    /**
     * salesrep ID from back-backend system
     */
    salesRepId: string;
    /**
     * Person or system requesting the addition
     */
    submitterId: string;
    /**
     * Realm username (aka providerId in realm parlance)
     */
    username: string;
}
