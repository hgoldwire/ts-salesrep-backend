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
import {CallLog} from '../model/CallLog';
import {Header} from '../model/Header';

export interface AddCallLogRequest {
    callLog: CallLog;
    header: Header;
    /**
     * Sales Repo this view of the Doctor was prepared for
     */
    salesRepId: string;
    /**
     * Person or system requesting the addition
     */
    submitterId: string;
}
