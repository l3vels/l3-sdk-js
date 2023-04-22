# .PlayerApi

All URIs are relative to *https://api-dev.l3vels.xyz*

Method | HTTP request | Description
------------- | ------------- | -------------
[**countPlayersByGameId**](PlayerApi.md#countPlayersByGameId) | **GET** /v1/player/count/{game_id} | Count players
[**createPlayer**](PlayerApi.md#createPlayer) | **POST** /v1/player | Create new player
[**getPlayerAssetById**](PlayerApi.md#getPlayerAssetById) | **GET** /v1/player-asset/{game_id}/{id} | Retrieve player asset by ID
[**getPlayerById**](PlayerApi.md#getPlayerById) | **GET** /v1/player/{game_id}/{id} | Retrieve player by ID
[**getPlayers**](PlayerApi.md#getPlayers) | **GET** /v1/player | Retrieve players
[**playerAssets**](PlayerApi.md#playerAssets) | **GET** /v1/player-asset | Retrieve player assets
[**updatePlayer**](PlayerApi.md#updatePlayer) | **PUT** /v1/player | Update an existing Player


# **countPlayersByGameId**
> number countPlayersByGameId()

Count players in game. Example: count players in game Call of Duty.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PlayerApi(configuration);

let body:.PlayerApiCountPlayersByGameIdRequest = {
  // string | API key is associated with multiple games. Please include it in to use developers API.
  authorization: "Authorization_example",
  // string | Game Id
  gameId: "1",
};

apiInstance.countPlayersByGameId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | [**string**] | API key is associated with multiple games. Please include it in to use developers API. | defaults to undefined
 **gameId** | [**string**] | Game Id | defaults to undefined


### Return type

**number**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The players has been found. |  -  |
**400** | Bad Request, The request was unacceptable, often due to missing a required parameter. |  -  |
**401** | Unauthorized, No valid API key provided. |  -  |
**404** | Not Found, The requested resource doesn&#39;t exist. |  -  |
**409** | Conflict, The request conflicts with another request (perhaps due to using the same idempotent key). |  -  |
**429** | Too Many Requests, Too many requests hit the API too quickly. We recommend an exponential backoff of your requests. |  -  |
**500** | Server Errors, Something went wrong on L3vels&#39;s end. |  -  |
**504** | Gateway Timeout, Your request took too long. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createPlayer**
> Player createPlayer(createPlayerInput)

Create new player for Game. Example: Create new player Jack in game Call of Duty.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PlayerApi(configuration);

let body:.PlayerApiCreatePlayerRequest = {
  // string | API key is associated with multiple games. Please include it in to use developers API.
  authorization: "Authorization_example",
  // CreatePlayerInput
  createPlayerInput: {
    uniqueId: "f811b994a31",
    name: "Jack",
    username: "jack",
    email: "jack@gmail.com",
    avatar: "https://example.com/avatar.png",
    gameId: "353c69f6-76a6-4baa-b68b-852c1c531953",
    isCreateWallet: true,
    customProps: [{"prop_name":"VIP","prop_type":"Boolean","prop_value":"true"}],
  },
};

apiInstance.createPlayer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPlayerInput** | **CreatePlayerInput**|  |
 **authorization** | [**string**] | API key is associated with multiple games. Please include it in to use developers API. | defaults to undefined


### Return type

**Player**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The players has successfully created. |  -  |
**400** | Bad Request, The request was unacceptable, often due to missing a required parameter. |  -  |
**401** | Unauthorized, No valid API key provided. |  -  |
**404** | Not Found, The requested resource doesn&#39;t exist. |  -  |
**409** | Conflict, The request conflicts with another request (perhaps due to using the same idempotent key). |  -  |
**429** | Too Many Requests, Too many requests hit the API too quickly. We recommend an exponential backoff of your requests. |  -  |
**500** | Server Errors, Something went wrong on L3vels&#39;s end. |  -  |
**504** | Gateway Timeout, Your request took too long. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPlayerAssetById**
> PlayerAsset getPlayerAssetById()

Retrieve player asset by ID. Player asset represents a single asset that a player owns. It has amount field that represents how many of this asset player owns.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PlayerApi(configuration);

let body:.PlayerApiGetPlayerAssetByIdRequest = {
  // string | API key is associated with multiple games. Please include it in to use developers API.
  authorization: "Authorization_example",
  // string
  id: "id_example",
  // string
  gameId: "game_id_example",
};

apiInstance.getPlayerAssetById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | [**string**] | API key is associated with multiple games. Please include it in to use developers API. | defaults to undefined
 **id** | [**string**] |  | defaults to undefined
 **gameId** | [**string**] |  | defaults to undefined


### Return type

**PlayerAsset**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The player asset has been found. |  -  |
**400** | Bad Request, The request was unacceptable, often due to missing a required parameter. |  -  |
**401** | Unauthorized, No valid API key provided. |  -  |
**404** | Not Found, The requested resource doesn&#39;t exist. |  -  |
**409** | Conflict, The request conflicts with another request (perhaps due to using the same idempotent key). |  -  |
**429** | Too Many Requests, Too many requests hit the API too quickly. We recommend an exponential backoff of your requests. |  -  |
**500** | Server Errors, Something went wrong on L3vels&#39;s end. |  -  |
**504** | Gateway Timeout, Your request took too long. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPlayerById**
> Player getPlayerById()

Retrieves a specific player by ID associated with Game. Example: retrieve player Jack from game Call of Duty.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PlayerApi(configuration);

let body:.PlayerApiGetPlayerByIdRequest = {
  // string | API key is associated with multiple games. Please include it in to use developers API.
  authorization: "Authorization_example",
  // string | Player ID that you created in your Game. Example: Jack, George, etc.
  id: "9abd57ce-b11c-4828-ab6a-19f568a8081a",
  // string | Game ID to find asset in. Example: Call of Duty, Fortnite, etc.
  gameId: "556a2843-b302-4b9d-916c-cefcb5d66053",
};

apiInstance.getPlayerById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | [**string**] | API key is associated with multiple games. Please include it in to use developers API. | defaults to undefined
 **id** | [**string**] | Player ID that you created in your Game. Example: Jack, George, etc. | defaults to undefined
 **gameId** | [**string**] | Game ID to find asset in. Example: Call of Duty, Fortnite, etc. | defaults to undefined


### Return type

**Player**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The player has been found. |  -  |
**400** | Bad Request, The request was unacceptable, often due to missing a required parameter. |  -  |
**401** | Unauthorized, No valid API key provided. |  -  |
**404** | Not Found, The requested resource doesn&#39;t exist. |  -  |
**409** | Conflict, The request conflicts with another request (perhaps due to using the same idempotent key). |  -  |
**429** | Too Many Requests, Too many requests hit the API too quickly. We recommend an exponential backoff of your requests. |  -  |
**500** | Server Errors, Something went wrong on L3vels&#39;s end. |  -  |
**504** | Gateway Timeout, Your request took too long. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPlayers**
> Array<Player> getPlayers()

Retrieve a list of players that match the specified filter criteria. Developers can use this method to retrieve players by name, category, status, or other properties. Example: Retrieve players from game Call of Duty.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PlayerApi(configuration);

let body:.PlayerApiGetPlayersRequest = {
  // string | API key is associated with multiple games. Please include it in to use developers API.
  authorization: "Authorization_example",
  // string | Game ID to find player in your game. Example: Fortnite, Minecraft, etc.
  gameId: "a44b646a-ae14-4e05-ae09-b12d5e7269bf",
  // string | Player field to sort by. You can sort by name, created_on and etc. (optional)
  sort: "name",
  // string | Sort order (ASC for ascending or DESC for descending) (optional)
  order: "ASC",
  // string | Search player by name (optional)
  searchText: "Jack",
  // number | Number of players to return per page (optional)
  limit: 10,
  // number | Page number (optional)
  page: 1,
};

apiInstance.getPlayers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | [**string**] | API key is associated with multiple games. Please include it in to use developers API. | defaults to undefined
 **gameId** | [**string**] | Game ID to find player in your game. Example: Fortnite, Minecraft, etc. | defaults to undefined
 **sort** | [**string**] | Player field to sort by. You can sort by name, created_on and etc. | (optional) defaults to undefined
 **order** | [**string**] | Sort order (ASC for ascending or DESC for descending) | (optional) defaults to undefined
 **searchText** | [**string**] | Search player by name | (optional) defaults to undefined
 **limit** | [**number**] | Number of players to return per page | (optional) defaults to undefined
 **page** | [**number**] | Page number | (optional) defaults to undefined


### Return type

**Array<Player>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The players has been found |  -  |
**400** | Bad Request, The request was unacceptable, often due to missing a required parameter. |  -  |
**401** | Unauthorized, No valid API key provided. |  -  |
**404** | Not Found, The requested resource doesn&#39;t exist. |  -  |
**409** | Conflict, The request conflicts with another request (perhaps due to using the same idempotent key). |  -  |
**429** | Too Many Requests, Too many requests hit the API too quickly. We recommend an exponential backoff of your requests. |  -  |
**500** | Server Errors, Something went wrong on L3vels&#39;s end. |  -  |
**504** | Gateway Timeout, Your request took too long. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **playerAssets**
> Array<PlayerAsset> playerAssets()

This API method retrieves a list of Player assets that match the specified filter criteria. Developers can use this method to retrieve Player assets by player, Game or other properties.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PlayerApi(configuration);

let body:.PlayerApiPlayerAssetsRequest = {
  // string | API key is associated with multiple games. Please include it in to use developers API.
  authorization: "Authorization_example",
  // string | Game ID to find player assets in your game. Example: Fortnite, Minecraft, etc.
  gameId: "a44b646a-ae14-4e05-ae09-b12d5e7269bf",
  // string | Game ID to find player assets in your game. Example: Fortnite, Minecraft, etc. (optional)
  assetId: "a44b646a-ae14-4e05-ae09-b12d5e7269bf",
  // string | Game ID to find player assets in your game. Example: Fortnite, Minecraft, etc. (optional)
  playerId: "a44b646a-ae14-4e05-ae09-b12d5e7269bf",
  // string | Player asset field to sort by. You can sort by name, created_on and etc. (optional)
  sort: "name",
  // string | Sort order (ASC for ascending or DESC for descending) (optional)
  order: "ASC",
  // number | Number of player assets to return per page (optional)
  limit: 10,
  // number | Page number (optional)
  page: 1,
};

apiInstance.playerAssets(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | [**string**] | API key is associated with multiple games. Please include it in to use developers API. | defaults to undefined
 **gameId** | [**string**] | Game ID to find player assets in your game. Example: Fortnite, Minecraft, etc. | defaults to undefined
 **assetId** | [**string**] | Game ID to find player assets in your game. Example: Fortnite, Minecraft, etc. | (optional) defaults to undefined
 **playerId** | [**string**] | Game ID to find player assets in your game. Example: Fortnite, Minecraft, etc. | (optional) defaults to undefined
 **sort** | [**string**] | Player asset field to sort by. You can sort by name, created_on and etc. | (optional) defaults to undefined
 **order** | [**string**] | Sort order (ASC for ascending or DESC for descending) | (optional) defaults to undefined
 **limit** | [**number**] | Number of player assets to return per page | (optional) defaults to undefined
 **page** | [**number**] | Page number | (optional) defaults to undefined


### Return type

**Array<PlayerAsset>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The player assets has been found |  -  |
**400** | Bad Request, The request was unacceptable, often due to missing a required parameter. |  -  |
**401** | Unauthorized, No valid API key provided. |  -  |
**404** | Not Found, The requested resource doesn&#39;t exist. |  -  |
**409** | Conflict, The request conflicts with another request (perhaps due to using the same idempotent key). |  -  |
**429** | Too Many Requests, Too many requests hit the API too quickly. We recommend an exponential backoff of your requests. |  -  |
**500** | Server Errors, Something went wrong on L3vels&#39;s end. |  -  |
**504** | Gateway Timeout, Your request took too long. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updatePlayer**
> Player updatePlayer()

This API method allows developers to update an existing Player by providing the ID of the Player and the updated properties and associated assets.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PlayerApi(configuration);

let body:.PlayerApiUpdatePlayerRequest = {
  // string | API key is associated with multiple games. Please include it in to use developers API.
  authorization: "Authorization_example",
};

apiInstance.updatePlayer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | [**string**] | API key is associated with multiple games. Please include it in to use developers API. | defaults to undefined


### Return type

**Player**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The players has successful updated. |  -  |
**400** | Bad Request, The request was unacceptable, often due to missing a required parameter. |  -  |
**401** | Unauthorized, No valid API key provided. |  -  |
**404** | Not Found, The requested resource doesn&#39;t exist. |  -  |
**409** | Conflict, The request conflicts with another request (perhaps due to using the same idempotent key). |  -  |
**429** | Too Many Requests, Too many requests hit the API too quickly. We recommend an exponential backoff of your requests. |  -  |
**500** | Server Errors, Something went wrong on L3vels&#39;s end. |  -  |
**504** | Gateway Timeout, Your request took too long. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


