/* tslint:disable */
/* eslint-disable */
/**
 * L3vels Api
 * L3vels API for Game developers
 *
 * The version of the OpenAPI document: 0.3
 * Contact: support@l3vels.xyz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SetContractUriDto
 */
export interface SetContractUriDto {
    /**
     * Project Id
     * @type {string}
     * @memberof SetContractUriDto
     */
    projectId: string;
    /**
     * Collection Id
     * @type {string}
     * @memberof SetContractUriDto
     */
    collectionId: string;
    /**
     * Contract URI
     * @type {string}
     * @memberof SetContractUriDto
     */
    contractUri: string;
}

/**
 * Check if a given object implements the SetContractUriDto interface.
 */
export function instanceOfSetContractUriDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "projectId" in value;
    isInstance = isInstance && "collectionId" in value;
    isInstance = isInstance && "contractUri" in value;

    return isInstance;
}

export function SetContractUriDtoFromJSON(json: any): SetContractUriDto {
    return SetContractUriDtoFromJSONTyped(json, false);
}

export function SetContractUriDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetContractUriDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'projectId': json['project_id'],
        'collectionId': json['collection_id'],
        'contractUri': json['contract_uri'],
    };
}

export function SetContractUriDtoToJSON(value?: SetContractUriDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'project_id': value.projectId,
        'collection_id': value.collectionId,
        'contract_uri': value.contractUri,
    };
}

