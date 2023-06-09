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
import type { MintInputAsset } from './MintInputAsset';
import {
    MintInputAssetFromJSON,
    MintInputAssetFromJSONTyped,
    MintInputAssetToJSON,
} from './MintInputAsset';

/**
 * 
 * @export
 * @interface MintInput
 */
export interface MintInput {
    /**
     * Contract ID
     * @type {string}
     * @memberof MintInput
     */
    contractId?: string;
    /**
     * Game ID. Example: Call of Duty
     * @type {string}
     * @memberof MintInput
     */
    gameId: string;
    /**
     * Collection ID to use. Example: Characters, Weapons, etc.
     * @type {string}
     * @memberof MintInput
     */
    collectionId: string;
    /**
     * Player address to mint token to. You can provide player ID or player address
     * @type {string}
     * @memberof MintInput
     */
    playerAddress?: string;
    /**
     * Player ID to mint to. You can provide player ID or player address
     * @type {string}
     * @memberof MintInput
     */
    playerId?: string;
    /**
     * 
     * @type {MintInputAsset}
     * @memberof MintInput
     */
    asset: MintInputAsset;
}

/**
 * Check if a given object implements the MintInput interface.
 */
export function instanceOfMintInput(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "gameId" in value;
    isInstance = isInstance && "collectionId" in value;
    isInstance = isInstance && "asset" in value;

    return isInstance;
}

export function MintInputFromJSON(json: any): MintInput {
    return MintInputFromJSONTyped(json, false);
}

export function MintInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): MintInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contractId': !exists(json, 'contract_id') ? undefined : json['contract_id'],
        'gameId': json['game_id'],
        'collectionId': json['collection_id'],
        'playerAddress': !exists(json, 'player_address') ? undefined : json['player_address'],
        'playerId': !exists(json, 'player_id') ? undefined : json['player_id'],
        'asset': MintInputAssetFromJSON(json['asset']),
    };
}

export function MintInputToJSON(value?: MintInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contract_id': value.contractId,
        'game_id': value.gameId,
        'collection_id': value.collectionId,
        'player_address': value.playerAddress,
        'player_id': value.playerId,
        'asset': MintInputAssetToJSON(value.asset),
    };
}

