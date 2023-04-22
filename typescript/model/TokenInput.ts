/**
 * L3vels Api
 * L3vels API for Game developers
 *
 * OpenAPI spec version: 0.3
 * Contact: support@l3vels.xyz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class TokenInput {
    /**
    * Token ID to mint. You can provide this or asset_id
    */
    'tokenId'?: number;
    /**
    * Asset ID to mint. You can provide this or token_id
    */
    'assetId'?: string;
    /**
    * Amount to mint
    */
    'amount': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tokenId",
            "baseName": "token_id",
            "type": "number",
            "format": ""
        },
        {
            "name": "assetId",
            "baseName": "asset_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TokenInput.attributeTypeMap;
    }

    public constructor() {
    }
}
