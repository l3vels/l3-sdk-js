/* tslint:disable */
/* eslint-disable */
/**
 * L3vels Api
 * L3vels API for Game developers
 *
 * The version of the OpenAPI document: 0.1
 * Contact: games@l3vels.xyz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  MintBatchDto,
  MintDto,
} from '../models';
import {
    MintBatchDtoFromJSON,
    MintBatchDtoToJSON,
    MintDtoFromJSON,
    MintDtoToJSON,
} from '../models';

export interface MintControllerAirdropRequest {
    authorization: string;
    mintDto: MintDto;
}

export interface MintControllerAwardRequest {
    authorization: string;
    mintDto: MintDto;
}

export interface MintControllerMintRequest {
    authorization: string;
    mintDto: MintDto;
}

export interface MintControllerMintBatchRequest {
    authorization: string;
    mintBatchDto: MintBatchDto;
}

export interface MintControllerPlayerMintRequest {
    authorization: string;
    mintDto: MintDto;
}

export interface MintControllerPlayerMintBatchRequest {
    authorization: string;
    mintBatchDto: MintBatchDto;
}

/**
 * 
 */
export class MintApi extends runtime.BaseAPI {

    /**
     * Airdrop asset to player
     * Airdrop asset to player
     */
    async mintControllerAirdropRaw(requestParameters: MintControllerAirdropRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling mintControllerAirdrop.');
        }

        if (requestParameters.mintDto === null || requestParameters.mintDto === undefined) {
            throw new runtime.RequiredError('mintDto','Required parameter requestParameters.mintDto was null or undefined when calling mintControllerAirdrop.');
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
            body: MintDtoToJSON(requestParameters.mintDto),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Airdrop asset to player
     * Airdrop asset to player
     */
    async mintControllerAirdrop(requestParameters: MintControllerAirdropRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.mintControllerAirdropRaw(requestParameters, initOverrides);
    }

    /**
     * Award asset to player
     * Award asset to player
     */
    async mintControllerAwardRaw(requestParameters: MintControllerAwardRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling mintControllerAward.');
        }

        if (requestParameters.mintDto === null || requestParameters.mintDto === undefined) {
            throw new runtime.RequiredError('mintDto','Required parameter requestParameters.mintDto was null or undefined when calling mintControllerAward.');
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
            body: MintDtoToJSON(requestParameters.mintDto),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Award asset to player
     * Award asset to player
     */
    async mintControllerAward(requestParameters: MintControllerAwardRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.mintControllerAwardRaw(requestParameters, initOverrides);
    }

    /**
     * Mint an asset by admin to player
     * Mint asset
     */
    async mintControllerMintRaw(requestParameters: MintControllerMintRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling mintControllerMint.');
        }

        if (requestParameters.mintDto === null || requestParameters.mintDto === undefined) {
            throw new runtime.RequiredError('mintDto','Required parameter requestParameters.mintDto was null or undefined when calling mintControllerMint.');
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
            body: MintDtoToJSON(requestParameters.mintDto),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Mint an asset by admin to player
     * Mint asset
     */
    async mintControllerMint(requestParameters: MintControllerMintRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.mintControllerMintRaw(requestParameters, initOverrides);
    }

    /**
     * Batch mint assets by admin to player
     * Batch mint assets
     */
    async mintControllerMintBatchRaw(requestParameters: MintControllerMintBatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling mintControllerMintBatch.');
        }

        if (requestParameters.mintBatchDto === null || requestParameters.mintBatchDto === undefined) {
            throw new runtime.RequiredError('mintBatchDto','Required parameter requestParameters.mintBatchDto was null or undefined when calling mintControllerMintBatch.');
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
            body: MintBatchDtoToJSON(requestParameters.mintBatchDto),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Batch mint assets by admin to player
     * Batch mint assets
     */
    async mintControllerMintBatch(requestParameters: MintControllerMintBatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.mintControllerMintBatchRaw(requestParameters, initOverrides);
    }

    /**
     * Mint asset by player. Player must have enough balance to mint.
     * Mint asset by player
     */
    async mintControllerPlayerMintRaw(requestParameters: MintControllerPlayerMintRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling mintControllerPlayerMint.');
        }

        if (requestParameters.mintDto === null || requestParameters.mintDto === undefined) {
            throw new runtime.RequiredError('mintDto','Required parameter requestParameters.mintDto was null or undefined when calling mintControllerPlayerMint.');
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
            body: MintDtoToJSON(requestParameters.mintDto),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Mint asset by player. Player must have enough balance to mint.
     * Mint asset by player
     */
    async mintControllerPlayerMint(requestParameters: MintControllerPlayerMintRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.mintControllerPlayerMintRaw(requestParameters, initOverrides);
    }

    /**
     * Batch mint assets by player. Player must have enough balance to mint.
     * Batch mint assets by player
     */
    async mintControllerPlayerMintBatchRaw(requestParameters: MintControllerPlayerMintBatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling mintControllerPlayerMintBatch.');
        }

        if (requestParameters.mintBatchDto === null || requestParameters.mintBatchDto === undefined) {
            throw new runtime.RequiredError('mintBatchDto','Required parameter requestParameters.mintBatchDto was null or undefined when calling mintControllerPlayerMintBatch.');
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
            body: MintBatchDtoToJSON(requestParameters.mintBatchDto),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Batch mint assets by player. Player must have enough balance to mint.
     * Batch mint assets by player
     */
    async mintControllerPlayerMintBatch(requestParameters: MintControllerPlayerMintBatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.mintControllerPlayerMintBatchRaw(requestParameters, initOverrides);
    }

}
