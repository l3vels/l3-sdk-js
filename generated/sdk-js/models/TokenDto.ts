/* tslint:disable */
/* eslint-disable */
/**
 * L3vels Api
 * L3vels API for Game developers
 *
 * The version of the OpenAPI document: 0.1
 * Contact: games@l3vels.xyz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TokenDto
 */
export interface TokenDto {
    /**
     * Token ID to mint. You can provide this or asset_id
     * @type {number}
     * @memberof TokenDto
     */
    tokenId?: number;
    /**
     * Asset ID to mint. You can provide this or token_id
     * @type {string}
     * @memberof TokenDto
     */
    assetId?: string;
    /**
     * Amount to mint
     * @type {number}
     * @memberof TokenDto
     */
    amount: number;
}

/**
 * Check if a given object implements the TokenDto interface.
 */
export function instanceOfTokenDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "amount" in value;

    return isInstance;
}

export function TokenDtoFromJSON(json: any): TokenDto {
    return TokenDtoFromJSONTyped(json, false);
}

export function TokenDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tokenId': !exists(json, 'token_id') ? undefined : json['token_id'],
        'assetId': !exists(json, 'asset_id') ? undefined : json['asset_id'],
        'amount': json['amount'],
    };
}

export function TokenDtoToJSON(value?: TokenDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'token_id': value.tokenId,
        'asset_id': value.assetId,
        'amount': value.amount,
    };
}

