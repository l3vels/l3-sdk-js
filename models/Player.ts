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
 * @interface Player
 */
export interface Player {
    /**
     * The unique identifier for the Player entity.
     * @type {string}
     * @memberof Player
     */
    id: string;
    /**
     * The unique ID of the Player that can be provided by customers or generated by us.
     * @type {string}
     * @memberof Player
     */
    uniqueId: string;
    /**
     * The name of the player
     * @type {string}
     * @memberof Player
     */
    name: string;
    /**
     * Username of the player
     * @type {string}
     * @memberof Player
     */
    username: string;
    /**
     * Email of the player
     * @type {string}
     * @memberof Player
     */
    email: string;
    /**
     * Avatar URL of the player
     * @type {string}
     * @memberof Player
     */
    avatar: string;
    /**
     * Custom props for player
     * @type {object}
     * @memberof Player
     */
    customProps: object;
    /**
     * The date when player was active last time
     * @type {Date}
     * @memberof Player
     */
    lastSeen: Date;
    /**
     * The unique identifier of the account that the Player belongs to.
     * @type {number}
     * @memberof Player
     */
    accountId: number;
    /**
     * The unique identifier of the project that the Player is associated with. This allows developers to organize their players by project and helps with tracking and reporting. Example: Player Jack is associated with project Fortnite.
     * @type {string}
     * @memberof Player
     */
    projectId: string;
    /**
     * The date when the player was created.
     * @type {Date}
     * @memberof Player
     */
    createdOn: Date;
    /**
     * The date when the player was last modified.
     * @type {Date}
     * @memberof Player
     */
    modifiedOn: Date;
    /**
     * The Id of the user who created the player.
     * @type {number}
     * @memberof Player
     */
    createdBy: number;
    /**
     * The Id of the user who last modified the player.
     * @type {number}
     * @memberof Player
     */
    modifiedBy: number;
    /**
     * Boolean value indicating whether the player has wallet or not
     * @type {boolean}
     * @memberof Player
     */
    isCreateWallet: boolean;
}

/**
 * Check if a given object implements the Player interface.
 */
export function instanceOfPlayer(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "uniqueId" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "username" in value;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "avatar" in value;
    isInstance = isInstance && "customProps" in value;
    isInstance = isInstance && "lastSeen" in value;
    isInstance = isInstance && "accountId" in value;
    isInstance = isInstance && "projectId" in value;
    isInstance = isInstance && "createdOn" in value;
    isInstance = isInstance && "modifiedOn" in value;
    isInstance = isInstance && "createdBy" in value;
    isInstance = isInstance && "modifiedBy" in value;
    isInstance = isInstance && "isCreateWallet" in value;

    return isInstance;
}

export function PlayerFromJSON(json: any): Player {
    return PlayerFromJSONTyped(json, false);
}

export function PlayerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Player {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'uniqueId': json['unique_id'],
        'name': json['name'],
        'username': json['username'],
        'email': json['email'],
        'avatar': json['avatar'],
        'customProps': json['custom_props'],
        'lastSeen': (new Date(json['last_seen'])),
        'accountId': json['account_id'],
        'projectId': json['project_id'],
        'createdOn': (new Date(json['created_on'])),
        'modifiedOn': (new Date(json['modified_on'])),
        'createdBy': json['created_by'],
        'modifiedBy': json['modified_by'],
        'isCreateWallet': json['is_create_wallet'],
    };
}

export function PlayerToJSON(value?: Player | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'unique_id': value.uniqueId,
        'name': value.name,
        'username': value.username,
        'email': value.email,
        'avatar': value.avatar,
        'custom_props': value.customProps,
        'last_seen': (value.lastSeen.toISOString()),
        'account_id': value.accountId,
        'project_id': value.projectId,
        'created_on': (value.createdOn.toISOString()),
        'modified_on': (value.modifiedOn.toISOString()),
        'created_by': value.createdBy,
        'modified_by': value.modifiedBy,
        'is_create_wallet': value.isCreateWallet,
    };
}

