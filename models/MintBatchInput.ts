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
 * @interface MintBatchInput
 */
export interface MintBatchInput {
    /**
     * Game Id
     * @type {string}
     * @memberof MintBatchInput
     */
    gameId: string;
    /**
     * Collection Id
     * @type {string}
     * @memberof MintBatchInput
     */
    collectionId: string;
    /**
     * Player address to mint token to
     * @type {string}
     * @memberof MintBatchInput
     */
    playerAddress: string;
    /**
     * Player ID to mint to. You can provide this or player_address
     * @type {string}
     * @memberof MintBatchInput
     */
    playerId: string;
    /**
     * Array of tokens to mint
     * @type {Array<string>}
     * @memberof MintBatchInput
     */
    assets: Array<string>;
}

/**
 * Check if a given object implements the MintBatchInput interface.
 */
export function instanceOfMintBatchInput(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "gameId" in value;
    isInstance = isInstance && "collectionId" in value;
    isInstance = isInstance && "playerAddress" in value;
    isInstance = isInstance && "playerId" in value;
    isInstance = isInstance && "assets" in value;

    return isInstance;
}

export function MintBatchInputFromJSON(json: any): MintBatchInput {
    return MintBatchInputFromJSONTyped(json, false);
}

export function MintBatchInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): MintBatchInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'gameId': json['game_id'],
        'collectionId': json['collection_id'],
        'playerAddress': json['player_address'],
        'playerId': json['player_id'],
        'assets': json['assets'],
    };
}

export function MintBatchInputToJSON(value?: MintBatchInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'game_id': value.gameId,
        'collection_id': value.collectionId,
        'player_address': value.playerAddress,
        'player_id': value.playerId,
        'assets': value.assets,
    };
}
