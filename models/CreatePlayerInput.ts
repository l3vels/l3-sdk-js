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
 * @interface CreatePlayerInput
 */
export interface CreatePlayerInput {
    /**
     * You can send your generated unique ID for player if it's handy for game. If field is empty, we will generate unique ID.
     * @type {string}
     * @memberof CreatePlayerInput
     */
    uniqueId?: string;
    /**
     * The name of the player.
     * @type {string}
     * @memberof CreatePlayerInput
     */
    name: string;
    /**
     * The username of the player.
     * @type {string}
     * @memberof CreatePlayerInput
     */
    username?: string;
    /**
     * The email of the player.
     * @type {string}
     * @memberof CreatePlayerInput
     */
    email?: string;
    /**
     * The image URL of the player avatar.
     * @type {string}
     * @memberof CreatePlayerInput
     */
    avatar?: string;
    /**
     * Game ID to create the player for. Example: Create player Jack for game Fortnite.
     * @type {string}
     * @memberof CreatePlayerInput
     */
    gameId: string;
    /**
     * Should create wallet for player or not.
     * @type {boolean}
     * @memberof CreatePlayerInput
     */
    isCreateWallet?: boolean;
    /**
     * Custom props for player.
     * @type {Array<string>}
     * @memberof CreatePlayerInput
     */
    customProps?: Array<string>;
}

/**
 * Check if a given object implements the CreatePlayerInput interface.
 */
export function instanceOfCreatePlayerInput(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "gameId" in value;

    return isInstance;
}

export function CreatePlayerInputFromJSON(json: any): CreatePlayerInput {
    return CreatePlayerInputFromJSONTyped(json, false);
}

export function CreatePlayerInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatePlayerInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uniqueId': !exists(json, 'unique_id') ? undefined : json['unique_id'],
        'name': json['name'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'avatar': !exists(json, 'avatar') ? undefined : json['avatar'],
        'gameId': json['game_id'],
        'isCreateWallet': !exists(json, 'is_create_wallet') ? undefined : json['is_create_wallet'],
        'customProps': !exists(json, 'custom_props') ? undefined : json['custom_props'],
    };
}

export function CreatePlayerInputToJSON(value?: CreatePlayerInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'unique_id': value.uniqueId,
        'name': value.name,
        'username': value.username,
        'email': value.email,
        'avatar': value.avatar,
        'game_id': value.gameId,
        'is_create_wallet': value.isCreateWallet,
        'custom_props': value.customProps,
    };
}
