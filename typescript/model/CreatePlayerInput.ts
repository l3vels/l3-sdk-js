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

export class CreatePlayerInput {
    /**
    * You can send your generated unique ID for player if it's handy for game. If field is empty, we will generate unique ID.
    */
    'uniqueId'?: string;
    /**
    * The name of the player.
    */
    'name': string;
    /**
    * The username of the player.
    */
    'username'?: string;
    /**
    * The email of the player.
    */
    'email'?: string;
    /**
    * The image URL of the player avatar.
    */
    'avatar'?: string;
    /**
    * Game ID to create the player for. Example: Create player Jack for game Fortnite.
    */
    'gameId': string;
    /**
    * Should create wallet for player or not.
    */
    'isCreateWallet'?: boolean;
    /**
    * Custom props for player.
    */
    'customProps'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "uniqueId",
            "baseName": "unique_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "avatar",
            "baseName": "avatar",
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
            "name": "isCreateWallet",
            "baseName": "is_create_wallet",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "customProps",
            "baseName": "custom_props",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreatePlayerInput.attributeTypeMap;
    }

    public constructor() {
    }
}

