# .AssetApi

All URIs are relative to *https://api-dev.l3vels.xyz*

Method | HTTP request | Description
------------- | ------------- | -------------
[**countByGame**](AssetApi.md#countByGame) | **GET** /v1/asset/count/{game_id} | Count assets
[**createAsset**](AssetApi.md#createAsset) | **POST** /v1/asset | Create asset 
[**getAssetById**](AssetApi.md#getAssetById) | **GET** /v1/asset/{game_id}/{id} | Retrieve asset by ID
[**getAssets**](AssetApi.md#getAssets) | **GET** /v1/asset | Retrieve assets
[**updateAsset**](AssetApi.md#updateAsset) | **PATCH** /v1/asset/{id} | Update asset


# **countByGame**
> number countByGame()

Counts total assets in game.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssetApi(configuration);

let body:.AssetApiCountByGameRequest = {
  // string | API key is associated with multiple games. Please include it in to use developers API.
  authorization: "Authorization_example",
  // string
  gameId: "game_id_example",
};

apiInstance.countByGame(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | [**string**] | API key is associated with multiple games. Please include it in to use developers API. | defaults to undefined
 **gameId** | [**string**] |  | defaults to undefined


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
**200** | The assets has been counted. |  -  |
**400** | Bad Request, The request was unacceptable, often due to missing a required parameter. |  -  |
**401** | Unauthorized, No valid API key provided. |  -  |
**404** | Not Found, The requested resource doesn&#39;t exist. |  -  |
**409** | Conflict, The request conflicts with another request (perhaps due to using the same idempotent key). |  -  |
**429** | Too Many Requests, Too many requests hit the API too quickly. We recommend an exponential backoff of your requests. |  -  |
**500** | Server Errors, Something went wrong on L3vels&#39;s end. |  -  |
**504** | Gateway Timeout, Your request took too long. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createAsset**
> Asset createAsset(body)

Create asset in specific collection. Example: Create asset AK-47 in collection Weapons

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssetApi(configuration);

let body:.AssetApiCreateAssetRequest = {
  // string | API key is associated with multiple games. Please include it in to use developers API.
  authorization: "Authorization_example",
  // any
  body: {},
};

apiInstance.createAsset(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **authorization** | [**string**] | API key is associated with multiple games. Please include it in to use developers API. | defaults to undefined


### Return type

**Asset**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The asset has been created. |  -  |
**400** | Bad Request, The request was unacceptable, often due to missing a required parameter. |  -  |
**401** | Unauthorized, No valid API key provided. |  -  |
**404** | Not Found, The requested resource doesn&#39;t exist. |  -  |
**409** | Conflict, The request conflicts with another request (perhaps due to using the same idempotent key). |  -  |
**429** | Too Many Requests, Too many requests hit the API too quickly. We recommend an exponential backoff of your requests. |  -  |
**500** | Server Errors, Something went wrong on L3vels&#39;s end. |  -  |
**504** | Gateway Timeout, Your request took too long. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAssetById**
> Asset getAssetById()

Retrieve asset by ID in specific Game. Example: Find asset AK-47 in game Call of Duty

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssetApi(configuration);

let body:.AssetApiGetAssetByIdRequest = {
  // string | API key is associated with multiple games. Please include it in to use developers API.
  authorization: "Authorization_example",
  // string | Asset ID to find
  id: "9abd57ce-b11c-4828-ab6a-19f568a8081a",
  // string | Game ID to find asset in
  gameId: "556a2843-b302-4b9d-916c-cefcb5d66053",
};

apiInstance.getAssetById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | [**string**] | API key is associated with multiple games. Please include it in to use developers API. | defaults to undefined
 **id** | [**string**] | Asset ID to find | defaults to undefined
 **gameId** | [**string**] | Game ID to find asset in | defaults to undefined


### Return type

**Asset**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The asset has been found. |  -  |
**400** | Bad Request, The request was unacceptable, often due to missing a required parameter. |  -  |
**401** | Unauthorized, No valid API key provided. |  -  |
**404** | Not Found, The requested resource doesn&#39;t exist. |  -  |
**409** | Conflict, The request conflicts with another request (perhaps due to using the same idempotent key). |  -  |
**429** | Too Many Requests, Too many requests hit the API too quickly. We recommend an exponential backoff of your requests. |  -  |
**500** | Server Errors, Something went wrong on L3vels&#39;s end. |  -  |
**504** | Gateway Timeout, Your request took too long. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAssets**
> AssetsResponse getAssets()

This API method retrieves a list of assets that match the specified filter criteria. Developers can use this method to retrieve assets by name, description or other properties

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssetApi(configuration);

let body:.AssetApiGetAssetsRequest = {
  // string | API key is associated with multiple games. Please include it in to use developers API.
  authorization: "Authorization_example",
  // string | Game ID to find assets in your game. Example: Fortnite, Minecraft, etc.
  gameId: "a44b646a-ae14-4e05-ae09-b12d5e7269bf",
  // string | Filter assets by collection. Example: Get assets only from Weapons collection. (optional)
  collectionId: "a44b646a-ae14-4e05-ae09-b12d5e7269bf",
  // string | Asset field to sort by. You can sort by name, created_on and etc. (optional)
  sort: "name",
  // 'ASC' | 'DESC' | Sort order (ASC for ascending or DESC for descending) (optional)
  order: "ASC",
  // string | Search assets by name (optional)
  searchText: "Hammer",
  // number | Number of assets to return per page (optional)
  limit: 10,
  // number | Page number (optional)
  page: 1,
};

apiInstance.getAssets(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | [**string**] | API key is associated with multiple games. Please include it in to use developers API. | defaults to undefined
 **gameId** | [**string**] | Game ID to find assets in your game. Example: Fortnite, Minecraft, etc. | defaults to undefined
 **collectionId** | [**string**] | Filter assets by collection. Example: Get assets only from Weapons collection. | (optional) defaults to undefined
 **sort** | [**string**] | Asset field to sort by. You can sort by name, created_on and etc. | (optional) defaults to undefined
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | Sort order (ASC for ascending or DESC for descending) | (optional) defaults to undefined
 **searchText** | [**string**] | Search assets by name | (optional) defaults to undefined
 **limit** | [**number**] | Number of assets to return per page | (optional) defaults to undefined
 **page** | [**number**] | Page number | (optional) defaults to undefined


### Return type

**AssetsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The assets has been found. |  -  |
**400** | Bad Request, The request was unacceptable, often due to missing a required parameter. |  -  |
**401** | Unauthorized, No valid API key provided. |  -  |
**404** | Not Found, The requested resource doesn&#39;t exist. |  -  |
**409** | Conflict, The request conflicts with another request (perhaps due to using the same idempotent key). |  -  |
**429** | Too Many Requests, Too many requests hit the API too quickly. We recommend an exponential backoff of your requests. |  -  |
**500** | Server Errors, Something went wrong on L3vels&#39;s end. |  -  |
**504** | Gateway Timeout, Your request took too long. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateAsset**
> Asset updateAsset(updateAssetInput)

Update asset by ID in specific collection. Example: Update asset AK-47 in collection Weapons

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssetApi(configuration);

let body:.AssetApiUpdateAssetRequest = {
  // string | API key is associated with multiple games. Please include it in to use developers API.
  authorization: "Authorization_example",
  // string | Asset ID to update
  id: "353c69f6-76a6-4baa-b68b-852c1c531953",
  // UpdateAssetInput
  updateAssetInput: {
    name: "AK-47",
    description: "Assault rifle operated by gas pressure. Developed in the Soviet Union.",
    price: 10,
    supply: 10,
    assetUrl: "https://example.com/ak47.png",
    customProps: {},
    collectionId: "353c69f6-76a6-4baa-b68b-852c1c531953",
    gameId: "353c69f6-76a6-4baa-b68b-852c1c531953",
  },
};

apiInstance.updateAsset(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateAssetInput** | **UpdateAssetInput**|  |
 **authorization** | [**string**] | API key is associated with multiple games. Please include it in to use developers API. | defaults to undefined
 **id** | [**string**] | Asset ID to update | defaults to undefined


### Return type

**Asset**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The asset has been updated. |  -  |
**400** | Bad Request, The request was unacceptable, often due to missing a required parameter. |  -  |
**401** | Unauthorized, No valid API key provided. |  -  |
**404** | Not Found, The requested resource doesn&#39;t exist. |  -  |
**409** | Conflict, The request conflicts with another request (perhaps due to using the same idempotent key). |  -  |
**429** | Too Many Requests, Too many requests hit the API too quickly. We recommend an exponential backoff of your requests. |  -  |
**500** | Server Errors, Something went wrong on L3vels&#39;s end. |  -  |
**504** | Gateway Timeout, Your request took too long. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


