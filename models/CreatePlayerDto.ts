/* tslint:disable */
/* eslint-disable */
/**
 * L3vels Api
 * L3vels API for Game developers
 *
 * The version of the OpenAPI document: 0.2
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
 * @interface CreatePlayerDto
 */
export interface CreatePlayerDto {
    /**
     * You can send your generated unique ID for player if it's handy for game. If field is empty, we will generate unique ID.
     * @type {string}
     * @memberof CreatePlayerDto
     */
    uniqueId?: string;
    /**
     * The name of the player.
     * @type {string}
     * @memberof CreatePlayerDto
     */
    name: string;
    /**
     * The username of the player.
     * @type {string}
     * @memberof CreatePlayerDto
     */
    username?: string;
    /**
     * The email of the player.
     * @type {string}
     * @memberof CreatePlayerDto
     */
    email?: string;
    /**
     * The image URL of the player avatar.
     * @type {string}
     * @memberof CreatePlayerDto
     */
    avatar?: string;
    /**
     * Game/project ID to create the player for. Example: Create player Jack for game Fortnite.
     * @type {string}
     * @memberof CreatePlayerDto
     */
    projectId: string;
    /**
     * Should create wallet for player or not.
     * @type {boolean}
     * @memberof CreatePlayerDto
     */
    isCreateWallet?: boolean;
    /**
     * Custom props for player.
     * @type {Array<string>}
     * @memberof CreatePlayerDto
     */
    customProps?: Array<string>;
}

/**
 * Check if a given object implements the CreatePlayerDto interface.
 */
export function instanceOfCreatePlayerDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "projectId" in value;

    return isInstance;
}

export function CreatePlayerDtoFromJSON(json: any): CreatePlayerDto {
    return CreatePlayerDtoFromJSONTyped(json, false);
}

export function CreatePlayerDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatePlayerDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uniqueId': !exists(json, 'unique_id') ? undefined : json['unique_id'],
        'name': json['name'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'avatar': !exists(json, 'avatar') ? undefined : json['avatar'],
        'projectId': json['project_id'],
        'isCreateWallet': !exists(json, 'is_create_wallet') ? undefined : json['is_create_wallet'],
        'customProps': !exists(json, 'custom_props') ? undefined : json['custom_props'],
    };
}

export function CreatePlayerDtoToJSON(value?: CreatePlayerDto | null): any {
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
        'project_id': value.projectId,
        'is_create_wallet': value.isCreateWallet,
        'custom_props': value.customProps,
    };
}

