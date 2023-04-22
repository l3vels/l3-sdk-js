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

import { ObservableAssetApi } from "./ObservableAPI";
import { AssetApiRequestFactory, AssetApiResponseProcessor} from "../apis/AssetApi";

export interface AssetApiCountByGameRequest {
    /**
     * API key is associated with multiple games. Please include it in to use developers API.
     * @type string
     * @memberof AssetApicountByGame
     */
    authorization: string
    /**
     * 
     * @type string
     * @memberof AssetApicountByGame
     */
    gameId: string
}

export interface AssetApiGetAssetByIdRequest {
    /**
     * API key is associated with multiple games. Please include it in to use developers API.
     * @type string
     * @memberof AssetApigetAssetById
     */
    authorization: string
    /**
     * Asset ID to find
     * @type string
     * @memberof AssetApigetAssetById
     */
    id: string
    /**
     * Game ID to find asset in
     * @type string
     * @memberof AssetApigetAssetById
     */
    gameId: string
}

export interface AssetApiGetAssetsRequest {
    /**
     * API key is associated with multiple games. Please include it in to use developers API.
     * @type string
     * @memberof AssetApigetAssets
     */
    authorization: string
    /**
     * Game ID to find assets in your game. Example: Fortnite, Minecraft, etc.
     * @type string
     * @memberof AssetApigetAssets
     */
    gameId: string
    /**
     * Filter assets by collection. Example: Get assets only from Weapons collection.
     * @type string
     * @memberof AssetApigetAssets
     */
    collectionId?: string
    /**
     * Asset field to sort by. You can sort by name, created_on and etc.
     * @type string
     * @memberof AssetApigetAssets
     */
    sort?: string
    /**
     * Sort order (ASC for ascending or DESC for descending)
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof AssetApigetAssets
     */
    order?: 'ASC' | 'DESC'
    /**
     * Search assets by name
     * @type string
     * @memberof AssetApigetAssets
     */
    searchText?: string
    /**
     * Number of assets to return per page
     * @type number
     * @memberof AssetApigetAssets
     */
    limit?: number
    /**
     * Page number
     * @type number
     * @memberof AssetApigetAssets
     */
    page?: number
}

export interface AssetApiUpdateAssetRequest {
    /**
     * API key is associated with multiple games. Please include it in to use developers API.
     * @type string
     * @memberof AssetApiupdateAsset
     */
    authorization: string
    /**
     * Asset ID to update
     * @type string
     * @memberof AssetApiupdateAsset
     */
    id: string
    /**
     * 
     * @type UpdateAssetInput
     * @memberof AssetApiupdateAsset
     */
    updateAssetInput: UpdateAssetInput
}

export class ObjectAssetApi {
    private api: ObservableAssetApi

    public constructor(configuration: Configuration, requestFactory?: AssetApiRequestFactory, responseProcessor?: AssetApiResponseProcessor) {
        this.api = new ObservableAssetApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Counts total assets in game.
     * Count assets
     * @param param the request object
     */
    public countByGame(param: AssetApiCountByGameRequest, options?: Configuration): Promise<number> {
        return this.api.countByGame(param.authorization, param.gameId,  options).toPromise();
    }

    /**
     * Retrieve asset by ID in specific Game. Example: Find asset AK-47 in game Call of Duty
     * Retrieve asset by ID
     * @param param the request object
     */
    public getAssetById(param: AssetApiGetAssetByIdRequest, options?: Configuration): Promise<Asset> {
        return this.api.getAssetById(param.authorization, param.id, param.gameId,  options).toPromise();
    }

    /**
     * This API method retrieves a list of assets that match the specified filter criteria. Developers can use this method to retrieve assets by name, description or other properties
     * Retrieve assets
     * @param param the request object
     */
    public getAssets(param: AssetApiGetAssetsRequest, options?: Configuration): Promise<AssetsResponse> {
        return this.api.getAssets(param.authorization, param.gameId, param.collectionId, param.sort, param.order, param.searchText, param.limit, param.page,  options).toPromise();
    }

    /**
     * Update asset by ID in specific collection. Example: Update asset AK-47 in collection Weapons
     * Update asset
     * @param param the request object
     */
    public updateAsset(param: AssetApiUpdateAssetRequest, options?: Configuration): Promise<Asset> {
        return this.api.updateAsset(param.authorization, param.id, param.updateAssetInput,  options).toPromise();
    }

}

import { ObservableCollectionApi } from "./ObservableAPI";
import { CollectionApiRequestFactory, CollectionApiResponseProcessor} from "../apis/CollectionApi";

export interface CollectionApiCountCollectionsByGameIdRequest {
    /**
     * API key is associated with multiple games. Please include it in to use developers API.
     * @type string
     * @memberof CollectionApicountCollectionsByGameId
     */
    authorization: string
    /**
     * Game ID to count collections in
     * @type string
     * @memberof CollectionApicountCollectionsByGameId
     */
    gameId: string
}

export interface CollectionApiGetCollectionByIdRequest {
    /**
     * API key is associated with multiple games. Please include it in to use developers API.
     * @type string
     * @memberof CollectionApigetCollectionById
     */
    authorization: string
    /**
     * Collection ID to find
     * @type string
     * @memberof CollectionApigetCollectionById
     */
    id: string
    /**
     * Game ID to find collection in
     * @type string
     * @memberof CollectionApigetCollectionById
     */
    gameId: string
}

export interface CollectionApiGetCollectionsRequest {
    /**
     * API key is associated with multiple games. Please include it in to use developers API.
     * @type string
     * @memberof CollectionApigetCollections
     */
    authorization: string
    /**
     * Game ID to find collections in your game. Example: Fortnite, Minecraft, etc.
     * @type string
     * @memberof CollectionApigetCollections
     */
    gameId: string
    /**
     * Collection field to sort by. You can sort by name, created_on and etc.
     * @type string
     * @memberof CollectionApigetCollections
     */
    sort?: string
    /**
     * Sort order (ASC for ascending or DESC for descending)
     * @type string
     * @memberof CollectionApigetCollections
     */
    order?: string
    /**
     * Search collections by name
     * @type string
     * @memberof CollectionApigetCollections
     */
    searchText?: string
    /**
     * Number of collections to return per page
     * @type number
     * @memberof CollectionApigetCollections
     */
    limit?: number
    /**
     * Page number
     * @type number
     * @memberof CollectionApigetCollections
     */
    page?: number
}

export class ObjectCollectionApi {
    private api: ObservableCollectionApi

    public constructor(configuration: Configuration, requestFactory?: CollectionApiRequestFactory, responseProcessor?: CollectionApiResponseProcessor) {
        this.api = new ObservableCollectionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Count total collections in game.
     * Count collections
     * @param param the request object
     */
    public countCollectionsByGameId(param: CollectionApiCountCollectionsByGameIdRequest, options?: Configuration): Promise<number> {
        return this.api.countCollectionsByGameId(param.authorization, param.gameId,  options).toPromise();
    }

    /**
     * This API method retrieves a specific collection based on the unique identifier provided in the request.
     * Retrieve collection by ID
     * @param param the request object
     */
    public getCollectionById(param: CollectionApiGetCollectionByIdRequest, options?: Configuration): Promise<Collection> {
        return this.api.getCollectionById(param.authorization, param.id, param.gameId,  options).toPromise();
    }

    /**
     * This API method retrieves a list of collections that match the specified filter criteria. Developers can use this method to retrieve collections by name, category, status, or other properties.
     * Retrieve collections
     * @param param the request object
     */
    public getCollections(param: CollectionApiGetCollectionsRequest, options?: Configuration): Promise<Array<Collection>> {
        return this.api.getCollections(param.authorization, param.gameId, param.sort, param.order, param.searchText, param.limit, param.page,  options).toPromise();
    }

}

import { ObservableContractApi } from "./ObservableAPI";
import { ContractApiRequestFactory, ContractApiResponseProcessor} from "../apis/ContractApi";

export interface ContractApiCountContractsByGameIdRequest {
    /**
     * API key is associated with multiple games. Please include it in to use developers API.
     * @type string
     * @memberof ContractApicountContractsByGameId
     */
    authorization: string
    /**
     * 
     * @type string
     * @memberof ContractApicountContractsByGameId
     */
    collectionId: string
    /**
     * 
     * @type string
     * @memberof ContractApicountContractsByGameId
     */
    gameId: string
}

export interface ContractApiGetContractURIRequest {
    /**
     * API key is associated with multiple games. Please include it in to use developers API.
     * @type string
     * @memberof ContractApigetContractURI
     */
    authorization: string
    /**
     * 
     * @type string
     * @memberof ContractApigetContractURI
     */
    collectionId: string
    /**
     * 
     * @type string
     * @memberof ContractApigetContractURI
     */
    gameId: string
}

export interface ContractApiSetContractURIRequest {
    /**
     * API key is associated with multiple games. Please include it in to use developers API.
     * @type string
     * @memberof ContractApisetContractURI
     */
    authorization: string
    /**
     * 
     * @type SetContractUriInput
     * @memberof ContractApisetContractURI
     */
    setContractUriInput: SetContractUriInput
}

export interface ContractApiUpdateSaleStatusRequest {
    /**
     * API key is associated with multiple games. Please include it in to use developers API.
     * @type string
     * @memberof ContractApiupdateSaleStatus
     */
    authorization: string
    /**
     * 
     * @type SetSaleStatusInput
     * @memberof ContractApiupdateSaleStatus
     */
    setSaleStatusInput: SetSaleStatusInput
}

export class ObjectContractApi {
    private api: ObservableContractApi

    public constructor(configuration: Configuration, requestFactory?: ContractApiRequestFactory, responseProcessor?: ContractApiResponseProcessor) {
        this.api = new ObservableContractApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Count total contract in game.
     * Collection size
     * @param param the request object
     */
    public countContractsByGameId(param: ContractApiCountContractsByGameIdRequest, options?: Configuration): Promise<void> {
        return this.api.countContractsByGameId(param.authorization, param.collectionId, param.gameId,  options).toPromise();
    }

    /**
     * Gets contract uri of contract
     * Get Contract URI
     * @param param the request object
     */
    public getContractURI(param: ContractApiGetContractURIRequest, options?: Configuration): Promise<void> {
        return this.api.getContractURI(param.authorization, param.collectionId, param.gameId,  options).toPromise();
    }

    /**
     * Update Contract URI
     * Update Contract URI
     * @param param the request object
     */
    public setContractURI(param: ContractApiSetContractURIRequest, options?: Configuration): Promise<void> {
        return this.api.setContractURI(param.authorization, param.setContractUriInput,  options).toPromise();
    }

    /**
     * Update Sale status to PAUSED, PRE_SALE or PUBLIC
     * Update Sale status
     * @param param the request object
     */
    public updateSaleStatus(param: ContractApiUpdateSaleStatusRequest, options?: Configuration): Promise<void> {
        return this.api.updateSaleStatus(param.authorization, param.setSaleStatusInput,  options).toPromise();
    }

}

import { ObservableGameApi } from "./ObservableAPI";
import { GameApiRequestFactory, GameApiResponseProcessor} from "../apis/GameApi";

export interface GameApiGetGameByIdRequest {
    /**
     * API key is associated with multiple games. Please include it in to use developers API.
     * @type string
     * @memberof GameApigetGameById
     */
    authorization: string
    /**
     * Game or Game Id
     * @type string
     * @memberof GameApigetGameById
     */
    id: string
}

export class ObjectGameApi {
    private api: ObservableGameApi

    public constructor(configuration: Configuration, requestFactory?: GameApiRequestFactory, responseProcessor?: GameApiResponseProcessor) {
        this.api = new ObservableGameApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get Game by ID created on the platform.
     * Retrieve Game
     * @param param the request object
     */
    public getGameById(param: GameApiGetGameByIdRequest, options?: Configuration): Promise<Game> {
        return this.api.getGameById(param.authorization, param.id,  options).toPromise();
    }

}

import { ObservableMintApi } from "./ObservableAPI";
import { MintApiRequestFactory, MintApiResponseProcessor} from "../apis/MintApi";

export interface MintApiAirdropAssetToPlayerRequest {
    /**
     * API key is associated with multiple games. Please include it in to use developers API.
     * @type string
     * @memberof MintApiairdropAssetToPlayer
     */
    authorization: string
    /**
     * 
     * @type MintInput
     * @memberof MintApiairdropAssetToPlayer
     */
    mintInput: MintInput
}

export interface MintApiAwardAssetToPlayerRequest {
    /**
     * API key is associated with multiple games. Please include it in to use developers API.
     * @type string
     * @memberof MintApiawardAssetToPlayer
     */
    authorization: string
    /**
     * 
     * @type MintInput
     * @memberof MintApiawardAssetToPlayer
     */
    mintInput: MintInput
}

export interface MintApiBatchMintAssetByPlayerRequest {
    /**
     * API key is associated with multiple games. Please include it in to use developers API.
     * @type string
     * @memberof MintApibatchMintAssetByPlayer
     */
    authorization: string
    /**
     * 
     * @type MintBatchInput
     * @memberof MintApibatchMintAssetByPlayer
     */
    mintBatchInput: MintBatchInput
}

export interface MintApiMintAssetRequest {
    /**
     * API key is associated with multiple games. Please include it in to use developers API.
     * @type string
     * @memberof MintApimintAsset
     */
    authorization: string
    /**
     * 
     * @type MintInput
     * @memberof MintApimintAsset
     */
    mintInput: MintInput
}

export interface MintApiMintAssetByPlayerRequest {
    /**
     * API key is associated with multiple games. Please include it in to use developers API.
     * @type string
     * @memberof MintApimintAssetByPlayer
     */
    authorization: string
    /**
     * 
     * @type MintInput
     * @memberof MintApimintAssetByPlayer
     */
    mintInput: MintInput
}

export interface MintApiMintBatchAssetRequest {
    /**
     * API key is associated with multiple games. Please include it in to use developers API.
     * @type string
     * @memberof MintApimintBatchAsset
     */
    authorization: string
    /**
     * 
     * @type MintBatchInput
     * @memberof MintApimintBatchAsset
     */
    mintBatchInput: MintBatchInput
}

export class ObjectMintApi {
    private api: ObservableMintApi

    public constructor(configuration: Configuration, requestFactory?: MintApiRequestFactory, responseProcessor?: MintApiResponseProcessor) {
        this.api = new ObservableMintApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Airdrop asset to player
     * Airdrop asset to player
     * @param param the request object
     */
    public airdropAssetToPlayer(param: MintApiAirdropAssetToPlayerRequest, options?: Configuration): Promise<void> {
        return this.api.airdropAssetToPlayer(param.authorization, param.mintInput,  options).toPromise();
    }

    /**
     * Award asset to player
     * Award asset to player
     * @param param the request object
     */
    public awardAssetToPlayer(param: MintApiAwardAssetToPlayerRequest, options?: Configuration): Promise<void> {
        return this.api.awardAssetToPlayer(param.authorization, param.mintInput,  options).toPromise();
    }

    /**
     * Batch mint assets by player. Player must have enough balance to mint.
     * Batch mint assets by player
     * @param param the request object
     */
    public batchMintAssetByPlayer(param: MintApiBatchMintAssetByPlayerRequest, options?: Configuration): Promise<void> {
        return this.api.batchMintAssetByPlayer(param.authorization, param.mintBatchInput,  options).toPromise();
    }

    /**
     * Mint an asset by admin to player
     * Mint asset
     * @param param the request object
     */
    public mintAsset(param: MintApiMintAssetRequest, options?: Configuration): Promise<void> {
        return this.api.mintAsset(param.authorization, param.mintInput,  options).toPromise();
    }

    /**
     * Mint asset by player. Player must have enough balance to mint.
     * Mint asset by player
     * @param param the request object
     */
    public mintAssetByPlayer(param: MintApiMintAssetByPlayerRequest, options?: Configuration): Promise<void> {
        return this.api.mintAssetByPlayer(param.authorization, param.mintInput,  options).toPromise();
    }

    /**
     * Batch mint assets by admin to player
     * Batch mint assets
     * @param param the request object
     */
    public mintBatchAsset(param: MintApiMintBatchAssetRequest, options?: Configuration): Promise<void> {
        return this.api.mintBatchAsset(param.authorization, param.mintBatchInput,  options).toPromise();
    }

}

import { ObservablePlayerApi } from "./ObservableAPI";
import { PlayerApiRequestFactory, PlayerApiResponseProcessor} from "../apis/PlayerApi";

export interface PlayerApiCountPlayersByGameIdRequest {
    /**
     * API key is associated with multiple games. Please include it in to use developers API.
     * @type string
     * @memberof PlayerApicountPlayersByGameId
     */
    authorization: string
    /**
     * Game Id
     * @type string
     * @memberof PlayerApicountPlayersByGameId
     */
    gameId: string
}

export interface PlayerApiCreatePlayerRequest {
    /**
     * API key is associated with multiple games. Please include it in to use developers API.
     * @type string
     * @memberof PlayerApicreatePlayer
     */
    authorization: string
    /**
     * 
     * @type CreatePlayerInput
     * @memberof PlayerApicreatePlayer
     */
    createPlayerInput: CreatePlayerInput
}

export interface PlayerApiGetPlayerAssetByIdRequest {
    /**
     * API key is associated with multiple games. Please include it in to use developers API.
     * @type string
     * @memberof PlayerApigetPlayerAssetById
     */
    authorization: string
    /**
     * 
     * @type string
     * @memberof PlayerApigetPlayerAssetById
     */
    id: string
    /**
     * 
     * @type string
     * @memberof PlayerApigetPlayerAssetById
     */
    gameId: string
}

export interface PlayerApiGetPlayerByIdRequest {
    /**
     * API key is associated with multiple games. Please include it in to use developers API.
     * @type string
     * @memberof PlayerApigetPlayerById
     */
    authorization: string
    /**
     * Player ID that you created in your Game. Example: Jack, George, etc.
     * @type string
     * @memberof PlayerApigetPlayerById
     */
    id: string
    /**
     * Game ID to find asset in. Example: Call of Duty, Fortnite, etc.
     * @type string
     * @memberof PlayerApigetPlayerById
     */
    gameId: string
}

export interface PlayerApiGetPlayersRequest {
    /**
     * API key is associated with multiple games. Please include it in to use developers API.
     * @type string
     * @memberof PlayerApigetPlayers
     */
    authorization: string
    /**
     * Game ID to find player in your game. Example: Fortnite, Minecraft, etc.
     * @type string
     * @memberof PlayerApigetPlayers
     */
    gameId: string
    /**
     * Player field to sort by. You can sort by name, created_on and etc.
     * @type string
     * @memberof PlayerApigetPlayers
     */
    sort?: string
    /**
     * Sort order (ASC for ascending or DESC for descending)
     * @type string
     * @memberof PlayerApigetPlayers
     */
    order?: string
    /**
     * Search player by name
     * @type string
     * @memberof PlayerApigetPlayers
     */
    searchText?: string
    /**
     * Number of players to return per page
     * @type number
     * @memberof PlayerApigetPlayers
     */
    limit?: number
    /**
     * Page number
     * @type number
     * @memberof PlayerApigetPlayers
     */
    page?: number
}

export interface PlayerApiPlayerAssetsRequest {
    /**
     * API key is associated with multiple games. Please include it in to use developers API.
     * @type string
     * @memberof PlayerApiplayerAssets
     */
    authorization: string
    /**
     * Game ID to find player assets in your game. Example: Fortnite, Minecraft, etc.
     * @type string
     * @memberof PlayerApiplayerAssets
     */
    gameId: string
    /**
     * Game ID to find player assets in your game. Example: Fortnite, Minecraft, etc.
     * @type string
     * @memberof PlayerApiplayerAssets
     */
    assetId?: string
    /**
     * Game ID to find player assets in your game. Example: Fortnite, Minecraft, etc.
     * @type string
     * @memberof PlayerApiplayerAssets
     */
    playerId?: string
    /**
     * Player asset field to sort by. You can sort by name, created_on and etc.
     * @type string
     * @memberof PlayerApiplayerAssets
     */
    sort?: string
    /**
     * Sort order (ASC for ascending or DESC for descending)
     * @type string
     * @memberof PlayerApiplayerAssets
     */
    order?: string
    /**
     * Number of player assets to return per page
     * @type number
     * @memberof PlayerApiplayerAssets
     */
    limit?: number
    /**
     * Page number
     * @type number
     * @memberof PlayerApiplayerAssets
     */
    page?: number
}

export interface PlayerApiUpdatePlayerRequest {
    /**
     * API key is associated with multiple games. Please include it in to use developers API.
     * @type string
     * @memberof PlayerApiupdatePlayer
     */
    authorization: string
}

export class ObjectPlayerApi {
    private api: ObservablePlayerApi

    public constructor(configuration: Configuration, requestFactory?: PlayerApiRequestFactory, responseProcessor?: PlayerApiResponseProcessor) {
        this.api = new ObservablePlayerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Count players in game. Example: count players in game Call of Duty.
     * Count players
     * @param param the request object
     */
    public countPlayersByGameId(param: PlayerApiCountPlayersByGameIdRequest, options?: Configuration): Promise<number> {
        return this.api.countPlayersByGameId(param.authorization, param.gameId,  options).toPromise();
    }

    /**
     * Create new player for Game. Example: Create new player Jack in game Call of Duty.
     * Create new player
     * @param param the request object
     */
    public createPlayer(param: PlayerApiCreatePlayerRequest, options?: Configuration): Promise<Player> {
        return this.api.createPlayer(param.authorization, param.createPlayerInput,  options).toPromise();
    }

    /**
     * Retrieve player asset by ID. Player asset represents a single asset that a player owns. It has amount field that represents how many of this asset player owns.
     * Retrieve player asset by ID
     * @param param the request object
     */
    public getPlayerAssetById(param: PlayerApiGetPlayerAssetByIdRequest, options?: Configuration): Promise<PlayerAsset> {
        return this.api.getPlayerAssetById(param.authorization, param.id, param.gameId,  options).toPromise();
    }

    /**
     * Retrieves a specific player by ID associated with Game. Example: retrieve player Jack from game Call of Duty.
     * Retrieve player by ID
     * @param param the request object
     */
    public getPlayerById(param: PlayerApiGetPlayerByIdRequest, options?: Configuration): Promise<Player> {
        return this.api.getPlayerById(param.authorization, param.id, param.gameId,  options).toPromise();
    }

    /**
     * Retrieve a list of players that match the specified filter criteria. Developers can use this method to retrieve players by name, category, status, or other properties. Example: Retrieve players from game Call of Duty.
     * Retrieve players
     * @param param the request object
     */
    public getPlayers(param: PlayerApiGetPlayersRequest, options?: Configuration): Promise<Array<Player>> {
        return this.api.getPlayers(param.authorization, param.gameId, param.sort, param.order, param.searchText, param.limit, param.page,  options).toPromise();
    }

    /**
     * This API method retrieves a list of Player assets that match the specified filter criteria. Developers can use this method to retrieve Player assets by player, Game or other properties.
     * Retrieve player assets
     * @param param the request object
     */
    public playerAssets(param: PlayerApiPlayerAssetsRequest, options?: Configuration): Promise<Array<PlayerAsset>> {
        return this.api.playerAssets(param.authorization, param.gameId, param.assetId, param.playerId, param.sort, param.order, param.limit, param.page,  options).toPromise();
    }

    /**
     * This API method allows developers to update an existing Player by providing the ID of the Player and the updated properties and associated assets.
     * Update an existing Player
     * @param param the request object
     */
    public updatePlayer(param: PlayerApiUpdatePlayerRequest, options?: Configuration): Promise<Player> {
        return this.api.updatePlayer(param.authorization,  options).toPromise();
    }

}

import { ObservableTransactionApi } from "./ObservableAPI";
import { TransactionApiRequestFactory, TransactionApiResponseProcessor} from "../apis/TransactionApi";

export interface TransactionApiGetTransactionByIdRequest {
    /**
     * API key is associated with multiple games. Please include it in to use developers API.
     * @type string
     * @memberof TransactionApigetTransactionById
     */
    authorization: string
    /**
     * 
     * @type string
     * @memberof TransactionApigetTransactionById
     */
    id: string
    /**
     * 
     * @type string
     * @memberof TransactionApigetTransactionById
     */
    gameId: string
}

export interface TransactionApiGetTransactionsRequest {
    /**
     * API key is associated with multiple games. Please include it in to use developers API.
     * @type string
     * @memberof TransactionApigetTransactions
     */
    authorization: string
    /**
     * Game ID to find transactions in your game. Example: Fortnite, Minecraft, etc.
     * @type string
     * @memberof TransactionApigetTransactions
     */
    gameId: string
    /**
     * Filter transactions by collection. Example: Get transactions only from Weapons collection.
     * @type string
     * @memberof TransactionApigetTransactions
     */
    collectionId?: string
    /**
     * Player ID to mint to. You can provide player ID or player address
     * @type string
     * @memberof TransactionApigetTransactions
     */
    playerId?: string
    /**
     * Asset field to sort by. You can sort by name, created_on and etc.
     * @type string
     * @memberof TransactionApigetTransactions
     */
    sort?: string
    /**
     * Sort order (ASC for ascending or DESC for descending)
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof TransactionApigetTransactions
     */
    order?: 'ASC' | 'DESC'
    /**
     * Search transactions by name
     * @type string
     * @memberof TransactionApigetTransactions
     */
    searchText?: string
    /**
     * Number of transactions to return per page
     * @type number
     * @memberof TransactionApigetTransactions
     */
    limit?: number
    /**
     * Page number
     * @type number
     * @memberof TransactionApigetTransactions
     */
    page?: number
}

export interface TransactionApiTransactionControllerWebhookRequest {
    /**
     * API key is associated with multiple games. Please include it in to use developers API.
     * @type string
     * @memberof TransactionApitransactionControllerWebhook
     */
    authorization: string
}

export class ObjectTransactionApi {
    private api: ObservableTransactionApi

    public constructor(configuration: Configuration, requestFactory?: TransactionApiRequestFactory, responseProcessor?: TransactionApiResponseProcessor) {
        this.api = new ObservableTransactionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve transaction by ID
     * Retrieve Transaction by ID
     * @param param the request object
     */
    public getTransactionById(param: TransactionApiGetTransactionByIdRequest, options?: Configuration): Promise<Transaction> {
        return this.api.getTransactionById(param.authorization, param.id, param.gameId,  options).toPromise();
    }

    /**
     * Retrieve all transactions.
     * Retrieve transactions
     * @param param the request object
     */
    public getTransactions(param: TransactionApiGetTransactionsRequest, options?: Configuration): Promise<Transaction> {
        return this.api.getTransactions(param.authorization, param.gameId, param.collectionId, param.playerId, param.sort, param.order, param.searchText, param.limit, param.page,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public transactionControllerWebhook(param: TransactionApiTransactionControllerWebhookRequest, options?: Configuration): Promise<void> {
        return this.api.transactionControllerWebhook(param.authorization,  options).toPromise();
    }

}

import { ObservableUtilitiesApi } from "./ObservableAPI";
import { UtilitiesApiRequestFactory, UtilitiesApiResponseProcessor} from "../apis/UtilitiesApi";

export interface UtilitiesApiUtilityControllerHealthRequest {
}

export class ObjectUtilitiesApi {
    private api: ObservableUtilitiesApi

    public constructor(configuration: Configuration, requestFactory?: UtilitiesApiRequestFactory, responseProcessor?: UtilitiesApiResponseProcessor) {
        this.api = new ObservableUtilitiesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public utilityControllerHealth(param: UtilitiesApiUtilityControllerHealthRequest = {}, options?: Configuration): Promise<void> {
        return this.api.utilityControllerHealth( options).toPromise();
    }

}
