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


import * as runtime from '../runtime';
import type {
  MintBatchInput,
  MintInput,
} from '../models';
import {
    MintBatchInputFromJSON,
    MintBatchInputToJSON,
    MintInputFromJSON,
    MintInputToJSON,
} from '../models';

export interface AirdropAssetToPlayerRequest {
    authorization: string;
    mintInput: MintInput;
}

export interface AwardAssetToPlayerRequest {
    authorization: string;
    mintInput: MintInput;
}

export interface BatchMintAssetByPlayerRequest {
    authorization: string;
    mintBatchInput: MintBatchInput;
}

export interface MintAssetRequest {
    authorization: string;
    mintInput: MintInput;
}

export interface MintAssetByPlayerRequest {
    authorization: string;
    mintInput: MintInput;
}

export interface MintBatchAssetRequest {
    authorization: string;
    mintBatchInput: MintBatchInput;
}

/**
 * 
 */
export class MintApi extends runtime.BaseAPI {

    /**
     * Airdrop asset to player
     * Airdrop asset to player
     */
    async airdropAssetToPlayerRaw(requestParameters: AirdropAssetToPlayerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling airdropAssetToPlayer.');
        }

        if (requestParameters.mintInput === null || requestParameters.mintInput === undefined) {
            throw new runtime.RequiredError('mintInput','Required parameter requestParameters.mintInput was null or undefined when calling airdropAssetToPlayer.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['Authorization'] = String(requestParameters.authorization);
        }

        const response = await this.request({
            path: `/v1/mint/airdrop`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MintInputToJSON(requestParameters.mintInput),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Airdrop asset to player
     * Airdrop asset to player
     */
    async airdropAssetToPlayer(requestParameters: AirdropAssetToPlayerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.airdropAssetToPlayerRaw(requestParameters, initOverrides);
    }

    /**
     * Award asset to player
     * Award asset to player
     */
    async awardAssetToPlayerRaw(requestParameters: AwardAssetToPlayerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling awardAssetToPlayer.');
        }

        if (requestParameters.mintInput === null || requestParameters.mintInput === undefined) {
            throw new runtime.RequiredError('mintInput','Required parameter requestParameters.mintInput was null or undefined when calling awardAssetToPlayer.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['Authorization'] = String(requestParameters.authorization);
        }

        const response = await this.request({
            path: `/v1/mint/award`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MintInputToJSON(requestParameters.mintInput),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Award asset to player
     * Award asset to player
     */
    async awardAssetToPlayer(requestParameters: AwardAssetToPlayerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.awardAssetToPlayerRaw(requestParameters, initOverrides);
    }

    /**
     * Batch mint assets by player. Player must have enough balance to mint.
     * Batch mint assets by player
     */
    async batchMintAssetByPlayerRaw(requestParameters: BatchMintAssetByPlayerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling batchMintAssetByPlayer.');
        }

        if (requestParameters.mintBatchInput === null || requestParameters.mintBatchInput === undefined) {
            throw new runtime.RequiredError('mintBatchInput','Required parameter requestParameters.mintBatchInput was null or undefined when calling batchMintAssetByPlayer.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['Authorization'] = String(requestParameters.authorization);
        }

        const response = await this.request({
            path: `/v1/mint/batch-player`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MintBatchInputToJSON(requestParameters.mintBatchInput),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Batch mint assets by player. Player must have enough balance to mint.
     * Batch mint assets by player
     */
    async batchMintAssetByPlayer(requestParameters: BatchMintAssetByPlayerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.batchMintAssetByPlayerRaw(requestParameters, initOverrides);
    }

    /**
     * Mint an asset by admin to player
     * Mint asset
     */
    async mintAssetRaw(requestParameters: MintAssetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling mintAsset.');
        }

        if (requestParameters.mintInput === null || requestParameters.mintInput === undefined) {
            throw new runtime.RequiredError('mintInput','Required parameter requestParameters.mintInput was null or undefined when calling mintAsset.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['Authorization'] = String(requestParameters.authorization);
        }

        const response = await this.request({
            path: `/v1/mint`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MintInputToJSON(requestParameters.mintInput),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Mint an asset by admin to player
     * Mint asset
     */
    async mintAsset(requestParameters: MintAssetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.mintAssetRaw(requestParameters, initOverrides);
    }

    /**
     * Mint asset by player. Player must have enough balance to mint.
     * Mint asset by player
     */
    async mintAssetByPlayerRaw(requestParameters: MintAssetByPlayerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling mintAssetByPlayer.');
        }

        if (requestParameters.mintInput === null || requestParameters.mintInput === undefined) {
            throw new runtime.RequiredError('mintInput','Required parameter requestParameters.mintInput was null or undefined when calling mintAssetByPlayer.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['Authorization'] = String(requestParameters.authorization);
        }

        const response = await this.request({
            path: `/v1/mint/player`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MintInputToJSON(requestParameters.mintInput),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Mint asset by player. Player must have enough balance to mint.
     * Mint asset by player
     */
    async mintAssetByPlayer(requestParameters: MintAssetByPlayerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.mintAssetByPlayerRaw(requestParameters, initOverrides);
    }

    /**
     * Batch mint assets by admin to player
     * Batch mint assets
     */
    async mintBatchAssetRaw(requestParameters: MintBatchAssetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling mintBatchAsset.');
        }

        if (requestParameters.mintBatchInput === null || requestParameters.mintBatchInput === undefined) {
            throw new runtime.RequiredError('mintBatchInput','Required parameter requestParameters.mintBatchInput was null or undefined when calling mintBatchAsset.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['Authorization'] = String(requestParameters.authorization);
        }

        const response = await this.request({
            path: `/v1/mint/batch`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MintBatchInputToJSON(requestParameters.mintBatchInput),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Batch mint assets by admin to player
     * Batch mint assets
     */
    async mintBatchAsset(requestParameters: MintBatchAssetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.mintBatchAssetRaw(requestParameters, initOverrides);
    }

}
