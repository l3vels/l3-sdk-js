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
import type { MintDtoAsset } from './MintDtoAsset';
import {
    MintDtoAssetFromJSON,
    MintDtoAssetFromJSONTyped,
    MintDtoAssetToJSON,
} from './MintDtoAsset';

/**
 * 
 * @export
 * @interface MintDto
 */
export interface MintDto {
    /**
     * Contract ID
     * @type {string}
     * @memberof MintDto
     */
    contractId?: string;
    /**
     * Game/project ID. Example: Call of Duty
     * @type {string}
     * @memberof MintDto
     */
    projectId: string;
    /**
     * Collection ID to use. Example: Characters, Weapons, etc.
     * @type {string}
     * @memberof MintDto
     */
    collectionId: string;
    /**
     * Player address to mint token to. You can provide player ID or player address
     * @type {string}
     * @memberof MintDto
     */
    playerAddress?: string;
    /**
     * Player ID to mint to. You can provide player ID or player address
     * @type {string}
     * @memberof MintDto
     */
    playerId?: string;
    /**
     * 
     * @type {MintDtoAsset}
     * @memberof MintDto
     */
    asset: MintDtoAsset;
}

/**
 * Check if a given object implements the MintDto interface.
 */
export function instanceOfMintDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "projectId" in value;
    isInstance = isInstance && "collectionId" in value;
    isInstance = isInstance && "asset" in value;

    return isInstance;
}

export function MintDtoFromJSON(json: any): MintDto {
    return MintDtoFromJSONTyped(json, false);
}

export function MintDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MintDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contractId': !exists(json, 'contract_id') ? undefined : json['contract_id'],
        'projectId': json['project_id'],
        'collectionId': json['collection_id'],
        'playerAddress': !exists(json, 'player_address') ? undefined : json['player_address'],
        'playerId': !exists(json, 'player_id') ? undefined : json['player_id'],
        'asset': MintDtoAssetFromJSON(json['asset']),
    };
}

export function MintDtoToJSON(value?: MintDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contract_id': value.contractId,
        'project_id': value.projectId,
        'collection_id': value.collectionId,
        'player_address': value.playerAddress,
        'player_id': value.playerId,
        'asset': MintDtoAssetToJSON(value.asset),
    };
}

