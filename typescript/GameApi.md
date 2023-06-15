# .GameApi

All URIs are relative to *https://api-dev.l3vels.xyz*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createGame**](GameApi.md#createGame) | **POST** /v1/game | Create Game
[**gameControllerGetGames**](GameApi.md#gameControllerGetGames) | **GET** /v1/game | Retrieve all games
[**getGameById**](GameApi.md#getGameById) | **GET** /v1/game/{game_id} | Retrieve Game


# **createGame**
> Game createGame(body)

Create game on platform.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameApi(configuration);

let body:.GameApiCreateGameRequest = {
  // string | API key is associated with multiple games. Please include it in to use developers API.
  authorization: "Authorization_example",
  // any
  body: {},
};

apiInstance.createGame(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **authorization** | [**string**] | API key is associated with multiple games. Please include it in to use developers API. | defaults to undefined


### Return type

**Game**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Game has been found. |  -  |
**400** | Bad Request, The request was unacceptable, often due to missing a required parameter. |  -  |
**401** | Unauthorized, No valid API key provided. |  -  |
**404** | Not Found, The requested resource doesn&#39;t exist. |  -  |
**409** | Conflict, The request conflicts with another request (perhaps due to using the same idempotent key). |  -  |
**429** | Too Many Requests, Too many requests hit the API too quickly. We recommend an exponential backoff of your requests. |  -  |
**500** | Server Errors, Something went wrong on L3vels&#39;s end. |  -  |
**504** | Gateway Timeout, Your request took too long. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameControllerGetGames**
> Game gameControllerGetGames()

Retrieve all your games/games created on the platform. You can filter games by name, description. You can sort games by field

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameApi(configuration);

let body:.GameApiGameControllerGetGamesRequest = {
  // string | API key is associated with multiple games. Please include it in to use developers API.
  authorization: "Authorization_example",
  // string | Game ID
  gameId: "a44b646a-ae14-4e05-ae09-b12d5e7269bf",
  // string | In which order to sort the results. Can be ASC for ascending or DESC for descending order (optional)
  sort: "ASC",
  // string | Filter by game name or description (optional)
  searchText: "Call of Duty",
  // number | Number of players to return per page (optional)
  limit: 10,
  // number | Page number (optional)
  page: 1,
};

apiInstance.gameControllerGetGames(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | [**string**] | API key is associated with multiple games. Please include it in to use developers API. | defaults to undefined
 **gameId** | [**string**] | Game ID | defaults to undefined
 **sort** | [**string**] | In which order to sort the results. Can be ASC for ascending or DESC for descending order | (optional) defaults to undefined
 **searchText** | [**string**] | Filter by game name or description | (optional) defaults to undefined
 **limit** | [**number**] | Number of players to return per page | (optional) defaults to undefined
 **page** | [**number**] | Page number | (optional) defaults to undefined


### Return type

**Game**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The games has been found. |  -  |
**400** | Bad Request, The request was unacceptable, often due to missing a required parameter. |  -  |
**401** | Unauthorized, No valid API key provided. |  -  |
**404** | Not Found, The requested resource doesn&#39;t exist. |  -  |
**409** | Conflict, The request conflicts with another request (perhaps due to using the same idempotent key). |  -  |
**429** | Too Many Requests, Too many requests hit the API too quickly. We recommend an exponential backoff of your requests. |  -  |
**500** | Server Errors, Something went wrong on L3vels&#39;s end. |  -  |
**504** | Gateway Timeout, Your request took too long. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getGameById**
> Game getGameById()

Get Game by ID created on the platform.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameApi(configuration);

let body:.GameApiGetGameByIdRequest = {
  // string | API key is associated with multiple games. Please include it in to use developers API.
  authorization: "Authorization_example",
  // string | Game ID
  gameId: "a44b646a-ae14-4e05-ae09-b12d5e7269bf",
};

apiInstance.getGameById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | [**string**] | API key is associated with multiple games. Please include it in to use developers API. | defaults to undefined
 **gameId** | [**string**] | Game ID | defaults to undefined


### Return type

**Game**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Game has been found. |  -  |
**400** | Bad Request, The request was unacceptable, often due to missing a required parameter. |  -  |
**401** | Unauthorized, No valid API key provided. |  -  |
**404** | Not Found, The requested resource doesn&#39;t exist. |  -  |
**409** | Conflict, The request conflicts with another request (perhaps due to using the same idempotent key). |  -  |
**429** | Too Many Requests, Too many requests hit the API too quickly. We recommend an exponential backoff of your requests. |  -  |
**500** | Server Errors, Something went wrong on L3vels&#39;s end. |  -  |
**504** | Gateway Timeout, Your request took too long. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


