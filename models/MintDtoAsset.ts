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
 * Asset to mint. You need to provide token ID or asset ID and amount to mint
 * @export
 * @interface MintDtoAsset
 */
export interface MintDtoAsset {
    /**
     * Token ID to mint. You can provide this or asset_id
     * @type {number}
     * @memberof MintDtoAsset
     */
    tokenId?: number;
    /**
     * Asset ID to mint. You can provide this or token_id
     * @type {string}
     * @memberof MintDtoAsset
     */
    assetId?: string;
    /**
     * Amount to mint
     * @type {number}
     * @memberof MintDtoAsset
     */
    amount: number;
}

/**
 * Check if a given object implements the MintDtoAsset interface.
 */
export function instanceOfMintDtoAsset(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "amount" in value;

    return isInstance;
}

export function MintDtoAssetFromJSON(json: any): MintDtoAsset {
    return MintDtoAssetFromJSONTyped(json, false);
}

export function MintDtoAssetFromJSONTyped(json: any, ignoreDiscriminator: boolean): MintDtoAsset {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tokenId': !exists(json, 'token_id') ? undefined : json['token_id'],
        'assetId': !exists(json, 'asset_id') ? undefined : json['asset_id'],
        'amount': json['amount'],
    };
}

export function MintDtoAssetToJSON(value?: MintDtoAsset | null): any {
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

