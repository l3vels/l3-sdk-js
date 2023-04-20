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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Transaction
 */
export interface Transaction {
    /**
     * The unique identifier for the transaction entity.
     * @type {string}
     * @memberof Transaction
     */
    id: string;
    /**
     * Transaction status in Blockchain. Can be pending, success or fail
     * @type {string}
     * @memberof Transaction
     */
    status: string;
    /**
     * Address of the sender of the transaction.
     * @type {string}
     * @memberof Transaction
     */
    from: string;
    /**
     * Address of the receiver of the transaction. It can be contract address or player address if it is a transfer transaction.
     * @type {string}
     * @memberof Transaction
     */
    to: string;
    /**
     * Contract ID the transaction is associated with.
     * @type {string}
     * @memberof Transaction
     */
    contractId: string;
    /**
     * Contract address where the transaction happened.
     * @type {string}
     * @memberof Transaction
     */
    contractAddress: string;
    /**
     * Main blockchain identifier: Ethereum, Polygon, etc.
     * @type {string}
     * @memberof Transaction
     */
    blockchain: string;
    /**
     * Chain name identifier: Ethereum, Goerli, Sepolia, PolygonPoS, etc.
     * @type {string}
     * @memberof Transaction
     */
    chainName: string;
    /**
     * Chain ID: 1 for Ethereum, 5 for Goerli, 80001 for Polygon Mumbai, etc.
     * @type {number}
     * @memberof Transaction
     */
    chainId: number;
    /**
     * Chain environment: Testnet, Mainnet, etc.
     * @type {string}
     * @memberof Transaction
     */
    environment: string;
    /**
     * Unique transaction hash in the blockchain.
     * @type {string}
     * @memberof Transaction
     */
    transactionHash: string;
    /**
     * Unique block number in the blockchain.
     * @type {number}
     * @memberof Transaction
     */
    blockNumber: number;
    /**
     * Transaction type: Mint, Transfer, Award, Airdrop, etc.
     * @type {string}
     * @memberof Transaction
     */
    type: string;
    /**
     * Function method name that was called in smart contract
     * @type {string}
     * @memberof Transaction
     */
    method: string;
    /**
     * List of events that were emitted in the transaction
     * @type {Array<string>}
     * @memberof Transaction
     */
    events: Array<string>;
    /**
     * The unique identifier of the project that the transaction is associated with. This allows developers to organize their transactions by project and helps with tracking and reporting.
     * @type {string}
     * @memberof Transaction
     */
    projectId: string;
    /**
     * The unique identifier of the collection that the transaction is associated with. This allows developers to organize their transactions by project and helps with tracking and reporting.
     * @type {string}
     * @memberof Transaction
     */
    collectionId: string;
    /**
     * The unique identifier of the account that the transaction belongs to.
     * @type {number}
     * @memberof Transaction
     */
    accountId: number;
    /**
     * The date when the collection was created.
     * @type {Date}
     * @memberof Transaction
     */
    createdOn: Date;
    /**
     * The date when the collection was last modified.
     * @type {Date}
     * @memberof Transaction
     */
    modifiedOn: Date;
    /**
     * The Id of the user who created the collection.
     * @type {number}
     * @memberof Transaction
     */
    createdBy: number;
    /**
     * The Id of the user who last modified the collection.
     * @type {number}
     * @memberof Transaction
     */
    modifiedBy: number;
}

/**
 * Check if a given object implements the Transaction interface.
 */
export function instanceOfTransaction(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "from" in value;
    isInstance = isInstance && "to" in value;
    isInstance = isInstance && "contractId" in value;
    isInstance = isInstance && "contractAddress" in value;
    isInstance = isInstance && "blockchain" in value;
    isInstance = isInstance && "chainName" in value;
    isInstance = isInstance && "chainId" in value;
    isInstance = isInstance && "environment" in value;
    isInstance = isInstance && "transactionHash" in value;
    isInstance = isInstance && "blockNumber" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "method" in value;
    isInstance = isInstance && "events" in value;
    isInstance = isInstance && "projectId" in value;
    isInstance = isInstance && "collectionId" in value;
    isInstance = isInstance && "accountId" in value;
    isInstance = isInstance && "createdOn" in value;
    isInstance = isInstance && "modifiedOn" in value;
    isInstance = isInstance && "createdBy" in value;
    isInstance = isInstance && "modifiedBy" in value;

    return isInstance;
}

export function TransactionFromJSON(json: any): Transaction {
    return TransactionFromJSONTyped(json, false);
}

export function TransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Transaction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'status': json['status'],
        'from': json['from'],
        'to': json['to'],
        'contractId': json['contract_id'],
        'contractAddress': json['contract_address'],
        'blockchain': json['blockchain'],
        'chainName': json['chain_name'],
        'chainId': json['chain_id'],
        'environment': json['environment'],
        'transactionHash': json['transaction_hash'],
        'blockNumber': json['block_number'],
        'type': json['type'],
        'method': json['method'],
        'events': json['events'],
        'projectId': json['project_id'],
        'collectionId': json['collection_id'],
        'accountId': json['account_id'],
        'createdOn': (new Date(json['created_on'])),
        'modifiedOn': (new Date(json['modified_on'])),
        'createdBy': json['created_by'],
        'modifiedBy': json['modified_by'],
    };
}

export function TransactionToJSON(value?: Transaction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'status': value.status,
        'from': value.from,
        'to': value.to,
        'contract_id': value.contractId,
        'contract_address': value.contractAddress,
        'blockchain': value.blockchain,
        'chain_name': value.chainName,
        'chain_id': value.chainId,
        'environment': value.environment,
        'transaction_hash': value.transactionHash,
        'block_number': value.blockNumber,
        'type': value.type,
        'method': value.method,
        'events': value.events,
        'project_id': value.projectId,
        'collection_id': value.collectionId,
        'account_id': value.accountId,
        'created_on': (value.createdOn.toISOString()),
        'modified_on': (value.modifiedOn.toISOString()),
        'created_by': value.createdBy,
        'modified_by': value.modifiedBy,
    };
}
