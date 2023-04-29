import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { AssetApiRequestFactory, AssetApiResponseProcessor} from "../apis/AssetApi";
export class ObservableAssetApi {
    private requestFactory: AssetApiRequestFactory;
    private responseProcessor: AssetApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AssetApiRequestFactory,
        responseProcessor?: AssetApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AssetApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AssetApiResponseProcessor();
    }

    /**
     * Counts total assets in game.
     * Count assets
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param gameId 
     */
    public countByGame(authorization: string, gameId: string, _options?: Configuration): Observable<number> {
        const requestContextPromise = this.requestFactory.countByGame(authorization, gameId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.countByGame(rsp)));
            }));
    }

    /**
     * Retrieve asset by ID in specific Game. Example: Find asset AK-47 in game Call of Duty
     * Retrieve asset by ID
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param id Asset ID to find
     * @param gameId Game ID to find asset in
     */
    public getAssetById(authorization: string, id: string, gameId: string, _options?: Configuration): Observable<Asset> {
        const requestContextPromise = this.requestFactory.getAssetById(authorization, id, gameId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAssetById(rsp)));
            }));
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
    public getAssets(authorization: string, gameId: string, collectionId?: string, sort?: string, order?: 'ASC' | 'DESC', searchText?: string, limit?: number, page?: number, _options?: Configuration): Observable<AssetsResponse> {
        const requestContextPromise = this.requestFactory.getAssets(authorization, gameId, collectionId, sort, order, searchText, limit, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAssets(rsp)));
            }));
    }

    /**
     * Update asset by ID in specific collection. Example: Update asset AK-47 in collection Weapons
     * Update asset
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param id Asset ID to update
     * @param updateAssetInput 
     */
    public updateAsset(authorization: string, id: string, updateAssetInput: UpdateAssetInput, _options?: Configuration): Observable<Asset> {
        const requestContextPromise = this.requestFactory.updateAsset(authorization, id, updateAssetInput, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAsset(rsp)));
            }));
    }

}

import { CollectionApiRequestFactory, CollectionApiResponseProcessor} from "../apis/CollectionApi";
export class ObservableCollectionApi {
    private requestFactory: CollectionApiRequestFactory;
    private responseProcessor: CollectionApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CollectionApiRequestFactory,
        responseProcessor?: CollectionApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CollectionApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CollectionApiResponseProcessor();
    }

    /**
     * Count total collections in game.
     * Count collections
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param gameId Game ID to count collections in
     */
    public countCollectionsByGameId(authorization: string, gameId: string, _options?: Configuration): Observable<number> {
        const requestContextPromise = this.requestFactory.countCollectionsByGameId(authorization, gameId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.countCollectionsByGameId(rsp)));
            }));
    }

    /**
     * This API method retrieves a specific collection based on the unique identifier provided in the request.
     * Retrieve collection by ID
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param id Collection ID to find
     * @param gameId Game ID to find collection in
     */
    public getCollectionById(authorization: string, id: string, gameId: string, _options?: Configuration): Observable<Collection> {
        const requestContextPromise = this.requestFactory.getCollectionById(authorization, id, gameId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCollectionById(rsp)));
            }));
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
    public getCollections(authorization: string, gameId: string, sort?: string, order?: string, searchText?: string, limit?: number, page?: number, _options?: Configuration): Observable<Array<Collection>> {
        const requestContextPromise = this.requestFactory.getCollections(authorization, gameId, sort, order, searchText, limit, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCollections(rsp)));
            }));
    }

}

import { ContractApiRequestFactory, ContractApiResponseProcessor} from "../apis/ContractApi";
export class ObservableContractApi {
    private requestFactory: ContractApiRequestFactory;
    private responseProcessor: ContractApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ContractApiRequestFactory,
        responseProcessor?: ContractApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ContractApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ContractApiResponseProcessor();
    }

    /**
     * Count total contract in game.
     * Collection size
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param collectionId 
     * @param gameId 
     */
    public countContractsByGameId(authorization: string, collectionId: string, gameId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.countContractsByGameId(authorization, collectionId, gameId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.countContractsByGameId(rsp)));
            }));
    }

    /**
     * Gets contract uri of contract
     * Get Contract URI
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param collectionId 
     * @param gameId 
     */
    public getContractURI(authorization: string, collectionId: string, gameId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.getContractURI(authorization, collectionId, gameId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getContractURI(rsp)));
            }));
    }

    /**
     * Update Contract URI
     * Update Contract URI
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param setContractUriInput 
     */
    public setContractURI(authorization: string, setContractUriInput: SetContractUriInput, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.setContractURI(authorization, setContractUriInput, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setContractURI(rsp)));
            }));
    }

    /**
     * Update Sale status to PAUSED, PRE_SALE or PUBLIC
     * Update Sale status
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param setSaleStatusInput 
     */
    public updateSaleStatus(authorization: string, setSaleStatusInput: SetSaleStatusInput, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.updateSaleStatus(authorization, setSaleStatusInput, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateSaleStatus(rsp)));
            }));
    }

}

import { GameApiRequestFactory, GameApiResponseProcessor} from "../apis/GameApi";
export class ObservableGameApi {
    private requestFactory: GameApiRequestFactory;
    private responseProcessor: GameApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: GameApiRequestFactory,
        responseProcessor?: GameApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GameApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GameApiResponseProcessor();
    }

    /**
     * Get Game by ID created on the platform.
     * Retrieve Game
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param gameId Game ID
     */
    public getGameById(authorization: string, gameId: string, _options?: Configuration): Observable<Game> {
        const requestContextPromise = this.requestFactory.getGameById(authorization, gameId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGameById(rsp)));
            }));
    }

}

import { MintApiRequestFactory, MintApiResponseProcessor} from "../apis/MintApi";
export class ObservableMintApi {
    private requestFactory: MintApiRequestFactory;
    private responseProcessor: MintApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MintApiRequestFactory,
        responseProcessor?: MintApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MintApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MintApiResponseProcessor();
    }

    /**
     * Airdrop asset to player
     * Airdrop asset to player
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param mintInput 
     */
    public airdropAssetToPlayer(authorization: string, mintInput: MintInput, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.airdropAssetToPlayer(authorization, mintInput, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.airdropAssetToPlayer(rsp)));
            }));
    }

    /**
     * Award asset to player
     * Award asset to player
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param mintInput 
     */
    public awardAssetToPlayer(authorization: string, mintInput: MintInput, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.awardAssetToPlayer(authorization, mintInput, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.awardAssetToPlayer(rsp)));
            }));
    }

    /**
     * Batch mint assets by player. Player must have enough balance to mint.
     * Batch mint assets by player
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param mintBatchInput 
     */
    public batchMintAssetByPlayer(authorization: string, mintBatchInput: MintBatchInput, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.batchMintAssetByPlayer(authorization, mintBatchInput, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.batchMintAssetByPlayer(rsp)));
            }));
    }

    /**
     * Mint an asset by admin to player
     * Mint asset
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param mintInput 
     */
    public mintAsset(authorization: string, mintInput: MintInput, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.mintAsset(authorization, mintInput, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.mintAsset(rsp)));
            }));
    }

    /**
     * Mint asset by player. Player must have enough balance to mint.
     * Mint asset by player
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param mintInput 
     */
    public mintAssetByPlayer(authorization: string, mintInput: MintInput, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.mintAssetByPlayer(authorization, mintInput, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.mintAssetByPlayer(rsp)));
            }));
    }

    /**
     * Batch mint assets by admin to player
     * Batch mint assets
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param mintBatchInput 
     */
    public mintBatchAsset(authorization: string, mintBatchInput: MintBatchInput, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.mintBatchAsset(authorization, mintBatchInput, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.mintBatchAsset(rsp)));
            }));
    }

}

import { PlayerApiRequestFactory, PlayerApiResponseProcessor} from "../apis/PlayerApi";
export class ObservablePlayerApi {
    private requestFactory: PlayerApiRequestFactory;
    private responseProcessor: PlayerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PlayerApiRequestFactory,
        responseProcessor?: PlayerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PlayerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PlayerApiResponseProcessor();
    }

    /**
     * Count players in game. Example: count players in game Call of Duty.
     * Count players
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param gameId Game Id
     */
    public countPlayersByGameId(authorization: string, gameId: string, _options?: Configuration): Observable<number> {
        const requestContextPromise = this.requestFactory.countPlayersByGameId(authorization, gameId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.countPlayersByGameId(rsp)));
            }));
    }

    /**
     * Create new player for Game. Example: Create new player Jack in game Call of Duty.
     * Create new player
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param createPlayerInput 
     */
    public createPlayer(authorization: string, createPlayerInput: CreatePlayerInput, _options?: Configuration): Observable<Player> {
        const requestContextPromise = this.requestFactory.createPlayer(authorization, createPlayerInput, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPlayer(rsp)));
            }));
    }

    /**
     * Retrieve player asset by ID. Player asset represents a single asset that a player owns. It has amount field that represents how many of this asset player owns.
     * Retrieve player asset by ID
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param id 
     * @param gameId 
     */
    public getPlayerAssetById(authorization: string, id: string, gameId: string, _options?: Configuration): Observable<PlayerAsset> {
        const requestContextPromise = this.requestFactory.getPlayerAssetById(authorization, id, gameId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPlayerAssetById(rsp)));
            }));
    }

    /**
     * Retrieves a specific player by ID associated with Game. Example: retrieve player Jack from game Call of Duty.
     * Retrieve player by ID
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param id Player ID that you created in your Game. Example: Jack, George, etc.
     * @param gameId Game ID to find asset in. Example: Call of Duty, Fortnite, etc.
     */
    public getPlayerById(authorization: string, id: string, gameId: string, _options?: Configuration): Observable<Player> {
        const requestContextPromise = this.requestFactory.getPlayerById(authorization, id, gameId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPlayerById(rsp)));
            }));
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
    public getPlayers(authorization: string, gameId: string, sort?: string, order?: string, searchText?: string, limit?: number, page?: number, _options?: Configuration): Observable<Array<Player>> {
        const requestContextPromise = this.requestFactory.getPlayers(authorization, gameId, sort, order, searchText, limit, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPlayers(rsp)));
            }));
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
    public playerAssets(authorization: string, gameId: string, assetId?: string, playerId?: string, sort?: string, order?: string, limit?: number, page?: number, _options?: Configuration): Observable<Array<PlayerAsset>> {
        const requestContextPromise = this.requestFactory.playerAssets(authorization, gameId, assetId, playerId, sort, order, limit, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.playerAssets(rsp)));
            }));
    }

    /**
     * This API method allows developers to update an existing Player by providing the ID of the Player and the updated properties and associated assets.
     * Update an existing Player
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     */
    public updatePlayer(authorization: string, _options?: Configuration): Observable<Player> {
        const requestContextPromise = this.requestFactory.updatePlayer(authorization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updatePlayer(rsp)));
            }));
    }

}

import { TransactionApiRequestFactory, TransactionApiResponseProcessor} from "../apis/TransactionApi";
export class ObservableTransactionApi {
    private requestFactory: TransactionApiRequestFactory;
    private responseProcessor: TransactionApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TransactionApiRequestFactory,
        responseProcessor?: TransactionApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TransactionApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TransactionApiResponseProcessor();
    }

    /**
     * Retrieve transaction by ID
     * Retrieve Transaction by ID
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     * @param id 
     * @param gameId 
     */
    public getTransactionById(authorization: string, id: string, gameId: string, _options?: Configuration): Observable<Transaction> {
        const requestContextPromise = this.requestFactory.getTransactionById(authorization, id, gameId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTransactionById(rsp)));
            }));
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
    public getTransactions(authorization: string, gameId: string, collectionId?: string, playerId?: string, sort?: string, order?: 'ASC' | 'DESC', searchText?: string, limit?: number, page?: number, _options?: Configuration): Observable<Transaction> {
        const requestContextPromise = this.requestFactory.getTransactions(authorization, gameId, collectionId, playerId, sort, order, searchText, limit, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTransactions(rsp)));
            }));
    }

    /**
     * @param authorization API key is associated with multiple games. Please include it in to use developers API.
     */
    public transactionControllerWebhook(authorization: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.transactionControllerWebhook(authorization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.transactionControllerWebhook(rsp)));
            }));
    }

}

import { UtilitiesApiRequestFactory, UtilitiesApiResponseProcessor} from "../apis/UtilitiesApi";
export class ObservableUtilitiesApi {
    private requestFactory: UtilitiesApiRequestFactory;
    private responseProcessor: UtilitiesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UtilitiesApiRequestFactory,
        responseProcessor?: UtilitiesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UtilitiesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UtilitiesApiResponseProcessor();
    }

    /**
     */
    public utilityControllerHealth(_options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.utilityControllerHealth(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.utilityControllerHealth(rsp)));
            }));
    }

}
