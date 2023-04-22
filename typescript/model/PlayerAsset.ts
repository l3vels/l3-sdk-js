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

export class PlayerAsset {
    /**
    * The unique identifier for the Player asset entity.
    */
    'id': string;
    /**
    * The amount of the specific asset that the player has.
    */
    'amount': number;
    /**
    * The unique identifier of the player that the asset is associated with.
    */
    'playerId': string;
    /**
    * The unique identifier of the asset that the asset is associated with.
    */
    'assetId': string;
    /**
    * The unique identifier of the collection that the Player asset is associated with.
    */
    'collectionId': string;
    /**
    * The unique identifier of the account that the Player belongs to.
    */
    'accountId': string;
    /**
    * The unique identifier of the game that the Player is associated with. This allows developers to organize their players by game and helps with tracking and reporting.
    */
    'gameId': string;
    /**
    * The date when the player was created.
    */
    'createdOn': Date;
    /**
    * The date when the player was last modified.
    */
    'modifiedOn': Date;
    /**
    * The Id of the user who created the player.
    */
    'createdBy': string;
    /**
    * The Id of the user who last modified the player.
    */
    'modifiedBy': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": ""
        },
        {
            "name": "playerId",
            "baseName": "player_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "assetId",
            "baseName": "asset_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "collectionId",
            "baseName": "collection_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "accountId",
            "baseName": "account_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "gameId",
            "baseName": "game_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdOn",
            "baseName": "created_on",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "modifiedOn",
            "baseName": "modified_on",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "createdBy",
            "baseName": "created_by",
            "type": "string",
            "format": ""
        },
        {
            "name": "modifiedBy",
            "baseName": "modified_by",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PlayerAsset.attributeTypeMap;
    }

    public constructor() {
    }
}
