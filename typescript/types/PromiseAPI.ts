import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { Asset } from '../model/Asset';
import { AssetsResponse } from '../model/AssetsResponse';
import { Collection } from '../model/Collection';
import { CreatePlayerInput } from '../model/CreatePlayerInput';
import { Game } from '../model/Game';
import { MintBatchInput } from '../model/MintBatchInput';
import { MintInput } from '../model/MintInput';
import { MintInputAsset } from '../model/MintInputAsset';
import { Player } from '../model/Player';
import { PlayerAsset } from '../model/PlayerAsset';
import { SetContractUriInput } from '../model/SetContractUriInput';
import { SetSaleStatusInput } from '../model/SetSaleStatusInput';
import { TokenInput } from '../model/TokenInput';
import { Transaction } from '../model/Transaction';
import { UpdateAssetInput } from '../model/UpdateAssetInput';
import { ObservableAssetApi } from './ObservableAPI';

import { AssetApiRequestFactory, AssetApiResponseProcessor} from "../apis/AssetApi";
export class PromiseAssetApi {
    private api: ObservableAssetApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AssetApiRequestFactory,
        responseProcessor?: AssetApiResponseProcessor
    ) {
        this.api = new ObservableAssetApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Counts total assets in game.
     * Count assets
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param gameId 
     */
    public countByGame(authorization: string, gameId: string, _options?: Configuration): Promise<number> {
        const result = this.api.countByGame(authorization, gameId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve asset by ID in specific Game. Example: Find asset AK-47 in game Call of Duty
     * Retrieve asset by ID
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param id Asset ID to find
     * @param gameId Game ID to find asset in
     */
    public getAssetById(authorization: string, id: string, gameId: string, _options?: Configuration): Promise<Asset> {
        const result = this.api.getAssetById(authorization, id, gameId, _options);
        return result.toPromise();
    }

    /**
     * This API method retrieves a list of assets that match the specified filter criteria. Developers can use this method to retrieve assets by name, description or other properties
     * Retrieve assets
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param gameId Game ID to find assets in your game. Example: Fortnite, Minecraft, etc.
     * @param collectionId Filter assets by collection. Example: Get assets only from Weapons collection.
     * @param sort Asset field to sort by. You can sort by name, created_on and etc.
     * @param order Sort order (ASC for ascending or DESC for descending)
     * @param searchText Search assets by name
     * @param limit Number of assets to return per page
     * @param page Page number
     */
    public getAssets(authorization: string, gameId: string, collectionId?: string, sort?: string, order?: 'ASC' | 'DESC', searchText?: string, limit?: number, page?: number, _options?: Configuration): Promise<AssetsResponse> {
        const result = this.api.getAssets(authorization, gameId, collectionId, sort, order, searchText, limit, page, _options);
        return result.toPromise();
    }

    /**
     * Update asset by ID in specific collection. Example: Update asset AK-47 in collection Weapons
     * Update asset
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param id Asset ID to update
     * @param updateAssetInput 
     */
    public updateAsset(authorization: string, id: string, updateAssetInput: UpdateAssetInput, _options?: Configuration): Promise<Asset> {
        const result = this.api.updateAsset(authorization, id, updateAssetInput, _options);
        return result.toPromise();
    }


}



import { ObservableCollectionApi } from './ObservableAPI';

import { CollectionApiRequestFactory, CollectionApiResponseProcessor} from "../apis/CollectionApi";
export class PromiseCollectionApi {
    private api: ObservableCollectionApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CollectionApiRequestFactory,
        responseProcessor?: CollectionApiResponseProcessor
    ) {
        this.api = new ObservableCollectionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Count total collections in game.
     * Count collections
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param gameId Game ID to count collections in
     */
    public countCollectionsByGameId(authorization: string, gameId: string, _options?: Configuration): Promise<number> {
        const result = this.api.countCollectionsByGameId(authorization, gameId, _options);
        return result.toPromise();
    }

    /**
     * This API method retrieves a specific collection based on the unique identifier provided in the request.
     * Retrieve collection by ID
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param id Collection ID to find
     * @param gameId Game ID to find collection in
     */
    public getCollectionById(authorization: string, id: string, gameId: string, _options?: Configuration): Promise<Collection> {
        const result = this.api.getCollectionById(authorization, id, gameId, _options);
        return result.toPromise();
    }

    /**
     * This API method retrieves a list of collections that match the specified filter criteria. Developers can use this method to retrieve collections by name, category, status, or other properties.
     * Retrieve collections
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param gameId Game ID to find collections in your game. Example: Fortnite, Minecraft, etc.
     * @param sort Collection field to sort by. You can sort by name, created_on and etc.
     * @param order Sort order (ASC for ascending or DESC for descending)
     * @param searchText Search collections by name
     * @param limit Number of collections to return per page
     * @param page Page number
     */
    public getCollections(authorization: string, gameId: string, sort?: string, order?: string, searchText?: string, limit?: number, page?: number, _options?: Configuration): Promise<Array<Collection>> {
        const result = this.api.getCollections(authorization, gameId, sort, order, searchText, limit, page, _options);
        return result.toPromise();
    }


}



import { ObservableContractApi } from './ObservableAPI';

import { ContractApiRequestFactory, ContractApiResponseProcessor} from "../apis/ContractApi";
export class PromiseContractApi {
    private api: ObservableContractApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ContractApiRequestFactory,
        responseProcessor?: ContractApiResponseProcessor
    ) {
        this.api = new ObservableContractApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Count total contract in game.
     * Collection size
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param collectionId 
     * @param gameId 
     */
    public countContractsByGameId(authorization: string, collectionId: string, gameId: string, _options?: Configuration): Promise<void> {
        const result = this.api.countContractsByGameId(authorization, collectionId, gameId, _options);
        return result.toPromise();
    }

    /**
     * Gets contract uri of contract
     * Get Contract URI
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param collectionId 
     * @param gameId 
     */
    public getContractURI(authorization: string, collectionId: string, gameId: string, _options?: Configuration): Promise<void> {
        const result = this.api.getContractURI(authorization, collectionId, gameId, _options);
        return result.toPromise();
    }

    /**
     * Update Contract URI
     * Update Contract URI
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param setContractUriInput 
     */
    public setContractURI(authorization: string, setContractUriInput: SetContractUriInput, _options?: Configuration): Promise<void> {
        const result = this.api.setContractURI(authorization, setContractUriInput, _options);
        return result.toPromise();
    }

    /**
     * Update Sale status to PAUSED, PRE_SALE or PUBLIC
     * Update Sale status
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param setSaleStatusInput 
     */
    public updateSaleStatus(authorization: string, setSaleStatusInput: SetSaleStatusInput, _options?: Configuration): Promise<void> {
        const result = this.api.updateSaleStatus(authorization, setSaleStatusInput, _options);
        return result.toPromise();
    }


}



import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public chatControllerWebhook(_options?: Configuration): Promise<void> {
        const result = this.api.chatControllerWebhook(_options);
        return result.toPromise();
    }


}



import { ObservableGameApi } from './ObservableAPI';

import { GameApiRequestFactory, GameApiResponseProcessor} from "../apis/GameApi";
export class PromiseGameApi {
    private api: ObservableGameApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GameApiRequestFactory,
        responseProcessor?: GameApiResponseProcessor
    ) {
        this.api = new ObservableGameApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get Game by ID created on the platform.
     * Retrieve Game
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param gameId Game ID
     */
    public getGameById(authorization: string, gameId: string, _options?: Configuration): Promise<Game> {
        const result = this.api.getGameById(authorization, gameId, _options);
        return result.toPromise();
    }


}



import { ObservableMintApi } from './ObservableAPI';

import { MintApiRequestFactory, MintApiResponseProcessor} from "../apis/MintApi";
export class PromiseMintApi {
    private api: ObservableMintApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MintApiRequestFactory,
        responseProcessor?: MintApiResponseProcessor
    ) {
        this.api = new ObservableMintApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Airdrop asset to player
     * Airdrop asset to player
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param mintInput 
     */
    public airdropAssetToPlayer(authorization: string, mintInput: MintInput, _options?: Configuration): Promise<void> {
        const result = this.api.airdropAssetToPlayer(authorization, mintInput, _options);
        return result.toPromise();
    }

    /**
     * Award asset to player
     * Award asset to player
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param mintInput 
     */
    public awardAssetToPlayer(authorization: string, mintInput: MintInput, _options?: Configuration): Promise<void> {
        const result = this.api.awardAssetToPlayer(authorization, mintInput, _options);
        return result.toPromise();
    }

    /**
     * Batch mint assets by player. Player must have enough balance to mint.
     * Batch mint assets by player
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param mintBatchInput 
     */
    public batchMintAssetByPlayer(authorization: string, mintBatchInput: MintBatchInput, _options?: Configuration): Promise<void> {
        const result = this.api.batchMintAssetByPlayer(authorization, mintBatchInput, _options);
        return result.toPromise();
    }

    /**
     * Mint an asset by admin to player
     * Mint asset
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param mintInput 
     */
    public mintAsset(authorization: string, mintInput: MintInput, _options?: Configuration): Promise<void> {
        const result = this.api.mintAsset(authorization, mintInput, _options);
        return result.toPromise();
    }

    /**
     * Mint asset by player. Player must have enough balance to mint.
     * Mint asset by player
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param mintInput 
     */
    public mintAssetByPlayer(authorization: string, mintInput: MintInput, _options?: Configuration): Promise<void> {
        const result = this.api.mintAssetByPlayer(authorization, mintInput, _options);
        return result.toPromise();
    }

    /**
     * Batch mint assets by admin to player
     * Batch mint assets
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param mintBatchInput 
     */
    public mintBatchAsset(authorization: string, mintBatchInput: MintBatchInput, _options?: Configuration): Promise<void> {
        const result = this.api.mintBatchAsset(authorization, mintBatchInput, _options);
        return result.toPromise();
    }


}



import { ObservablePlayerApi } from './ObservableAPI';

import { PlayerApiRequestFactory, PlayerApiResponseProcessor} from "../apis/PlayerApi";
export class PromisePlayerApi {
    private api: ObservablePlayerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PlayerApiRequestFactory,
        responseProcessor?: PlayerApiResponseProcessor
    ) {
        this.api = new ObservablePlayerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Count players in game. Example: count players in game Call of Duty.
     * Count players
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param gameId Game Id
     */
    public countPlayersByGameId(authorization: string, gameId: string, _options?: Configuration): Promise<number> {
        const result = this.api.countPlayersByGameId(authorization, gameId, _options);
        return result.toPromise();
    }

    /**
     * Create new player for Game. Example: Create new player Jack in game Call of Duty.
     * Create new player
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param createPlayerInput 
     */
    public createPlayer(authorization: string, createPlayerInput: CreatePlayerInput, _options?: Configuration): Promise<Player> {
        const result = this.api.createPlayer(authorization, createPlayerInput, _options);
        return result.toPromise();
    }

    /**
     * Retrieve player asset by ID. Player asset represents a single asset that a player owns. It has amount field that represents how many of this asset player owns.
     * Retrieve player asset by ID
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param id 
     * @param gameId 
     */
    public getPlayerAssetById(authorization: string, id: string, gameId: string, _options?: Configuration): Promise<PlayerAsset> {
        const result = this.api.getPlayerAssetById(authorization, id, gameId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a specific player by ID associated with Game. Example: retrieve player Jack from game Call of Duty.
     * Retrieve player by ID
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param id Player ID that you created in your Game. Example: Jack, George, etc.
     * @param gameId Game ID to find asset in. Example: Call of Duty, Fortnite, etc.
     */
    public getPlayerById(authorization: string, id: string, gameId: string, _options?: Configuration): Promise<Player> {
        const result = this.api.getPlayerById(authorization, id, gameId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of players that match the specified filter criteria. Developers can use this method to retrieve players by name, category, status, or other properties. Example: Retrieve players from game Call of Duty.
     * Retrieve players
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param gameId Game ID to find player in your game. Example: Fortnite, Minecraft, etc.
     * @param sort Player field to sort by. You can sort by name, created_on and etc.
     * @param order Sort order (ASC for ascending or DESC for descending)
     * @param searchText Search player by name
     * @param limit Number of players to return per page
     * @param page Page number
     */
    public getPlayers(authorization: string, gameId: string, sort?: string, order?: string, searchText?: string, limit?: number, page?: number, _options?: Configuration): Promise<Array<Player>> {
        const result = this.api.getPlayers(authorization, gameId, sort, order, searchText, limit, page, _options);
        return result.toPromise();
    }

    /**
     * This API method retrieves a list of Player assets that match the specified filter criteria. Developers can use this method to retrieve Player assets by player, Game or other properties.
     * Retrieve player assets
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param gameId Game ID to find player assets in your game. Example: Fortnite, Minecraft, etc.
     * @param assetId Game ID to find player assets in your game. Example: Fortnite, Minecraft, etc.
     * @param playerId Game ID to find player assets in your game. Example: Fortnite, Minecraft, etc.
     * @param sort Player asset field to sort by. You can sort by name, created_on and etc.
     * @param order Sort order (ASC for ascending or DESC for descending)
     * @param limit Number of player assets to return per page
     * @param page Page number
     */
    public playerAssets(authorization: string, gameId: string, assetId?: string, playerId?: string, sort?: string, order?: string, limit?: number, page?: number, _options?: Configuration): Promise<Array<PlayerAsset>> {
        const result = this.api.playerAssets(authorization, gameId, assetId, playerId, sort, order, limit, page, _options);
        return result.toPromise();
    }

    /**
     * This API method allows developers to update an existing Player by providing the ID of the Player and the updated properties and associated assets.
     * Update an existing Player
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     */
    public updatePlayer(authorization: string, _options?: Configuration): Promise<Player> {
        const result = this.api.updatePlayer(authorization, _options);
        return result.toPromise();
    }


}



import { ObservableTransactionApi } from './ObservableAPI';

import { TransactionApiRequestFactory, TransactionApiResponseProcessor} from "../apis/TransactionApi";
export class PromiseTransactionApi {
    private api: ObservableTransactionApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TransactionApiRequestFactory,
        responseProcessor?: TransactionApiResponseProcessor
    ) {
        this.api = new ObservableTransactionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve transaction by ID
     * Retrieve Transaction by ID
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param id 
     * @param gameId 
     */
    public getTransactionById(authorization: string, id: string, gameId: string, _options?: Configuration): Promise<Transaction> {
        const result = this.api.getTransactionById(authorization, id, gameId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve all transactions.
     * Retrieve transactions
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param gameId Game ID to find transactions in your game. Example: Fortnite, Minecraft, etc.
     * @param collectionId Filter transactions by collection. Example: Get transactions only from Weapons collection.
     * @param playerId Player ID to mint to. You can provide player ID or player address
     * @param sort Asset field to sort by. You can sort by name, created_on and etc.
     * @param order Sort order (ASC for ascending or DESC for descending)
     * @param searchText Search transactions by name
     * @param limit Number of transactions to return per page
     * @param page Page number
     */
    public getTransactions(authorization: string, gameId: string, collectionId?: string, playerId?: string, sort?: string, order?: 'ASC' | 'DESC', searchText?: string, limit?: number, page?: number, _options?: Configuration): Promise<Transaction> {
        const result = this.api.getTransactions(authorization, gameId, collectionId, playerId, sort, order, searchText, limit, page, _options);
        return result.toPromise();
    }


}



import { ObservableUtilitiesApi } from './ObservableAPI';

import { UtilitiesApiRequestFactory, UtilitiesApiResponseProcessor} from "../apis/UtilitiesApi";
export class PromiseUtilitiesApi {
    private api: ObservableUtilitiesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UtilitiesApiRequestFactory,
        responseProcessor?: UtilitiesApiResponseProcessor
    ) {
        this.api = new ObservableUtilitiesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public utilityControllerHealth(_options?: Configuration): Promise<void> {
        const result = this.api.utilityControllerHealth(_options);
        return result.toPromise();
    }


}



