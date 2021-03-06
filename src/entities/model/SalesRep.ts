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
import {CallLogBarChart} from './CallLogBarChart';
import {Header} from './Header';
import {PrescribersBarChart} from './PrescribersBarChart';
import {PrescriptionGrowth} from './PrescriptionGrowth';
import {PriorityDistribution} from './PriorityDistribution';
import {SavingsCardRedemptionsBarChart} from './SavingsCardRedemptionsBarChart';

export interface SalesRep {
    callLogChart?: CallLogBarChart;
    doctorPriority: string[];
    firstName?: string;
    header: Header;
    lastName?: string;
    prescribers?: PrescribersBarChart;
    prescriptionGrowth?: PrescriptionGrowth;
    priorityDistribution?: PriorityDistribution;
    priorityListCompression?: number;
    relationshipHealth?: number;
    salesRepId: string;
    savingsCardRedemptions?: SavingsCardRedemptionsBarChart;
}
