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
import {Addresses} from './Addresses';
import {AlyvantInsights} from './AlyvantInsights';
import {BasicInfo} from './BasicInfo';
import {CallLog} from './CallLog';
import {Header} from './Header';
import {Identifiers} from './Identifiers';
import {OtherNames} from './OtherNames';
import {PatientInfo} from './PatientInfo';
import {PhysicianInfo} from './PhysicianInfo';
import {Product} from './Product';
import {Relationship} from './Relationship';
import {Schedule} from './Schedule';
import {Signal} from './Signal';
import {Taxonomies} from './Taxonomies';

export interface Provider {
    address: Addresses[];
    alyvantInsights?: AlyvantInsights[];
    basicInfo?: BasicInfo;
    callLogFormId?: string;
    callLogs?: CallLog[];
    enumerationType: string;
    header: Header;
    id: string;
    identifiers?: Identifiers[];
    isActive: boolean;
    npiNumber: number;
    otherNames?: OtherNames[];
    patientInfo?: PatientInfo[];
    physicianInfo: PhysicianInfo;
    products?: Product[];
    relationship: Relationship;
    schedules?: Schedule[];
    signals?: Signal[];
    taxonomies: Taxonomies[];
}