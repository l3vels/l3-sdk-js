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
 * @interface SetSaleStatusInput
 */
export interface SetSaleStatusInput {
    /**
     * Game Id
     * @type {string}
     * @memberof SetSaleStatusInput
     */
    gameId: string;
    /**
     * Collection Id
     * @type {string}
     * @memberof SetSaleStatusInput
     */
    collectionId: string;
    /**
     * Sale Status of the contract
     * @type {object}
     * @memberof SetSaleStatusInput
     */
    saleStatus: object;
}

/**
 * Check if a given object implements the SetSaleStatusInput interface.
 */
export function instanceOfSetSaleStatusInput(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "gameId" in value;
    isInstance = isInstance && "collectionId" in value;
    isInstance = isInstance && "saleStatus" in value;

    return isInstance;
}

export function SetSaleStatusInputFromJSON(json: any): SetSaleStatusInput {
    return SetSaleStatusInputFromJSONTyped(json, false);
}

export function SetSaleStatusInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetSaleStatusInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'gameId': json['game_id'],
        'collectionId': json['collection_id'],
        'saleStatus': json['sale_status'],
    };
}

export function SetSaleStatusInputToJSON(value?: SetSaleStatusInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'game_id': value.gameId,
        'collection_id': value.collectionId,
        'sale_status': value.saleStatus,
    };
}

