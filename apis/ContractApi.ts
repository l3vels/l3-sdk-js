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


import * as runtime from '../runtime';
import type {
  SetContractUriDto,
  SetSaleStatusDto,
} from '../models';
import {
    SetContractUriDtoFromJSON,
    SetContractUriDtoToJSON,
    SetSaleStatusDtoFromJSON,
    SetSaleStatusDtoToJSON,
} from '../models';

export interface ContractControllerCollectionSizeRequest {
    authorization: string;
    collectionId: string;
    projectId: string;
}

export interface ContractControllerContractUriRequest {
    authorization: string;
    collectionId: string;
    projectId: string;
}

export interface ContractControllerSetContractUriRequest {
    authorization: string;
    setContractUriDto: SetContractUriDto;
}

export interface ContractControllerSetSaleStatusRequest {
    authorization: string;
    setSaleStatusDto: SetSaleStatusDto;
}

/**
 * 
 */
export class ContractApi extends runtime.BaseAPI {

    /**
     * Get size of collection
     * Collection size
     */
    async contractControllerCollectionSizeRaw(requestParameters: ContractControllerCollectionSizeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling contractControllerCollectionSize.');
        }

        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling contractControllerCollectionSize.');
        }

        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling contractControllerCollectionSize.');
        }

        const queryParameters: any = {};

        if (requestParameters.collectionId !== undefined) {
            queryParameters['collection_id'] = requestParameters.collectionId;
        }

        if (requestParameters.projectId !== undefined) {
            queryParameters['project_id'] = requestParameters.projectId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['Authorization'] = String(requestParameters.authorization);
        }

        const response = await this.request({
            path: `/v1/contract/collection-size`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Get size of collection
     * Collection size
     */
    async contractControllerCollectionSize(requestParameters: ContractControllerCollectionSizeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.contractControllerCollectionSizeRaw(requestParameters, initOverrides);
    }

    /**
     * Gets contract uri of contract
     * Get Contract URI
     */
    async contractControllerContractUriRaw(requestParameters: ContractControllerContractUriRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling contractControllerContractUri.');
        }

        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling contractControllerContractUri.');
        }

        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling contractControllerContractUri.');
        }

        const queryParameters: any = {};

        if (requestParameters.collectionId !== undefined) {
            queryParameters['collection_id'] = requestParameters.collectionId;
        }

        if (requestParameters.projectId !== undefined) {
            queryParameters['project_id'] = requestParameters.projectId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['Authorization'] = String(requestParameters.authorization);
        }

        const response = await this.request({
            path: `/v1/contract/contract-uri`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Gets contract uri of contract
     * Get Contract URI
     */
    async contractControllerContractUri(requestParameters: ContractControllerContractUriRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.contractControllerContractUriRaw(requestParameters, initOverrides);
    }

    /**
     * Update Contract URI
     * Update Contract URI
     */
    async contractControllerSetContractUriRaw(requestParameters: ContractControllerSetContractUriRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling contractControllerSetContractUri.');
        }

        if (requestParameters.setContractUriDto === null || requestParameters.setContractUriDto === undefined) {
            throw new runtime.RequiredError('setContractUriDto','Required parameter requestParameters.setContractUriDto was null or undefined when calling contractControllerSetContractUri.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['Authorization'] = String(requestParameters.authorization);
        }

        const response = await this.request({
            path: `/v1/contract/contract-uri`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: SetContractUriDtoToJSON(requestParameters.setContractUriDto),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update Contract URI
     * Update Contract URI
     */
    async contractControllerSetContractUri(requestParameters: ContractControllerSetContractUriRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.contractControllerSetContractUriRaw(requestParameters, initOverrides);
    }

    /**
     * Update Sale status to PAUSED, PRE_SALE or PUBLIC
     * Update Sale status
     */
    async contractControllerSetSaleStatusRaw(requestParameters: ContractControllerSetSaleStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling contractControllerSetSaleStatus.');
        }

        if (requestParameters.setSaleStatusDto === null || requestParameters.setSaleStatusDto === undefined) {
            throw new runtime.RequiredError('setSaleStatusDto','Required parameter requestParameters.setSaleStatusDto was null or undefined when calling contractControllerSetSaleStatus.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['Authorization'] = String(requestParameters.authorization);
        }

        const response = await this.request({
            path: `/v1/contract/sale-status`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: SetSaleStatusDtoToJSON(requestParameters.setSaleStatusDto),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update Sale status to PAUSED, PRE_SALE or PUBLIC
     * Update Sale status
     */
    async contractControllerSetSaleStatus(requestParameters: ContractControllerSetSaleStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.contractControllerSetSaleStatusRaw(requestParameters, initOverrides);
    }

}
