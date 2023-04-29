# .MintApi

All URIs are relative to *https://api-dev.l3vels.xyz*

Method | HTTP request | Description
------------- | ------------- | -------------
[**airdropAssetToPlayer**](MintApi.md#airdropAssetToPlayer) | **POST** /v1/mint/airdrop | Airdrop asset to player
[**awardAssetToPlayer**](MintApi.md#awardAssetToPlayer) | **POST** /v1/mint/award | Award asset to player
[**batchMintAssetByPlayer**](MintApi.md#batchMintAssetByPlayer) | **POST** /v1/mint/batch-player | Batch mint assets by player
[**mintAsset**](MintApi.md#mintAsset) | **POST** /v1/mint | Mint asset
[**mintAssetByPlayer**](MintApi.md#mintAssetByPlayer) | **POST** /v1/mint/player | Mint asset by player
[**mintBatchAsset**](MintApi.md#mintBatchAsset) | **POST** /v1/mint/batch | Batch mint assets


# **airdropAssetToPlayer**
> void airdropAssetToPlayer(mintInput)

Airdrop asset to player

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MintApi(configuration);

let body:.MintApiAirdropAssetToPlayerRequest = {
  // string | API key is associated with multiple games. Please include it in to use developers API.
  authorization: "Authorization_example",
  // MintInput
  mintInput: {
    gameId: "a44b646a-ae14-4e05-ae09-b12d5e7269bf",
    collectionId: "a44b646a-ae14-4e05-ae09-b12d5e7269bf",
    playerAddress: "0x0000000000000000000000000000000000000000",
    playerId: "a44b646a-ae14-4e05-ae09-b12d5e7269bf",
    asset: null,
  },
};

apiInstance.airdropAssetToPlayer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mintInput** | **MintInput**|  |
 **authorization** | [**string**] | API key is associated with multiple games. Please include it in to use developers API. | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully awarded asset to player |  -  |
**400** | Bad Request, The request was unacceptable, often due to missing a required parameter. |  -  |
**401** | Unauthorized, No valid API key provided. |  -  |
**404** | Not Found, The requested resource doesn&#39;t exist. |  -  |
**409** | Conflict, The request conflicts with another request (perhaps due to using the same idempotent key). |  -  |
**429** | Too Many Requests, Too many requests hit the API too quickly. We recommend an exponential backoff of your requests. |  -  |
**500** | Server Errors, Something went wrong on L3vels&#39;s end. |  -  |
**504** | Gateway Timeout, Your request took too long. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **awardAssetToPlayer**
> void awardAssetToPlayer(mintInput)

Award asset to player

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MintApi(configuration);

let body:.MintApiAwardAssetToPlayerRequest = {
  // string | API key is associated with multiple games. Please include it in to use developers API.
  authorization: "Authorization_example",
  // MintInput
  mintInput: {
    gameId: "a44b646a-ae14-4e05-ae09-b12d5e7269bf",
    collectionId: "a44b646a-ae14-4e05-ae09-b12d5e7269bf",
    playerAddress: "0x0000000000000000000000000000000000000000",
    playerId: "a44b646a-ae14-4e05-ae09-b12d5e7269bf",
    asset: null,
  },
};

apiInstance.awardAssetToPlayer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mintInput** | **MintInput**|  |
 **authorization** | [**string**] | API key is associated with multiple games. Please include it in to use developers API. | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully awarded asset to player |  -  |
**400** | Bad Request, The request was unacceptable, often due to missing a required parameter. |  -  |
**401** | Unauthorized, No valid API key provided. |  -  |
**404** | Not Found, The requested resource doesn&#39;t exist. |  -  |
**409** | Conflict, The request conflicts with another request (perhaps due to using the same idempotent key). |  -  |
**429** | Too Many Requests, Too many requests hit the API too quickly. We recommend an exponential backoff of your requests. |  -  |
**500** | Server Errors, Something went wrong on L3vels&#39;s end. |  -  |
**504** | Gateway Timeout, Your request took too long. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **batchMintAssetByPlayer**
> void batchMintAssetByPlayer(mintBatchInput)

Batch mint assets by player. Player must have enough balance to mint.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MintApi(configuration);

let body:.MintApiBatchMintAssetByPlayerRequest = {
  // string | API key is associated with multiple games. Please include it in to use developers API.
  authorization: "Authorization_example",
  // MintBatchInput
  mintBatchInput: {
    gameId: "a44b646a-ae14-4e05-ae09-b12d5e7269bf",
    collectionId: "a44b646a-ae14-4e05-ae09-b12d5e7269bf",
    playerAddress: "0x0000000000000000000000000000000000000000",
    playerId: "a44b646a-ae14-4e05-ae09-b12d5e7269bf",
    assets: [
      "[]",
    ],
  },
};

apiInstance.batchMintAssetByPlayer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mintBatchInput** | **MintBatchInput**|  |
 **authorization** | [**string**] | API key is associated with multiple games. Please include it in to use developers API. | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully minted assets by player |  -  |
**400** | Bad Request, The request was unacceptable, often due to missing a required parameter. |  -  |
**401** | Unauthorized, No valid API key provided. |  -  |
**404** | Not Found, The requested resource doesn&#39;t exist. |  -  |
**409** | Conflict, The request conflicts with another request (perhaps due to using the same idempotent key). |  -  |
**429** | Too Many Requests, Too many requests hit the API too quickly. We recommend an exponential backoff of your requests. |  -  |
**500** | Server Errors, Something went wrong on L3vels&#39;s end. |  -  |
**504** | Gateway Timeout, Your request took too long. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **mintAsset**
> void mintAsset(mintInput)

Mint an asset by admin to player

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MintApi(configuration);

let body:.MintApiMintAssetRequest = {
  // string | API key is associated with multiple games. Please include it in to use developers API.
  authorization: "Authorization_example",
  // MintInput
  mintInput: {
    gameId: "a44b646a-ae14-4e05-ae09-b12d5e7269bf",
    collectionId: "a44b646a-ae14-4e05-ae09-b12d5e7269bf",
    playerAddress: "0x0000000000000000000000000000000000000000",
    playerId: "a44b646a-ae14-4e05-ae09-b12d5e7269bf",
    asset: null,
  },
};

apiInstance.mintAsset(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mintInput** | **MintInput**|  |
 **authorization** | [**string**] | API key is associated with multiple games. Please include it in to use developers API. | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully minted asset to player |  -  |
**400** | Bad Request, The request was unacceptable, often due to missing a required parameter. |  -  |
**401** | Unauthorized, No valid API key provided. |  -  |
**404** | Not Found, The requested resource doesn&#39;t exist. |  -  |
**409** | Conflict, The request conflicts with another request (perhaps due to using the same idempotent key). |  -  |
**429** | Too Many Requests, Too many requests hit the API too quickly. We recommend an exponential backoff of your requests. |  -  |
**500** | Server Errors, Something went wrong on L3vels&#39;s end. |  -  |
**504** | Gateway Timeout, Your request took too long. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **mintAssetByPlayer**
> void mintAssetByPlayer(mintInput)

Mint asset by player. Player must have enough balance to mint.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MintApi(configuration);

let body:.MintApiMintAssetByPlayerRequest = {
  // string | API key is associated with multiple games. Please include it in to use developers API.
  authorization: "Authorization_example",
  // MintInput
  mintInput: {
    gameId: "a44b646a-ae14-4e05-ae09-b12d5e7269bf",
    collectionId: "a44b646a-ae14-4e05-ae09-b12d5e7269bf",
    playerAddress: "0x0000000000000000000000000000000000000000",
    playerId: "a44b646a-ae14-4e05-ae09-b12d5e7269bf",
    asset: null,
  },
};

apiInstance.mintAssetByPlayer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mintInput** | **MintInput**|  |
 **authorization** | [**string**] | API key is associated with multiple games. Please include it in to use developers API. | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully minted asset by player |  -  |
**400** | Bad Request, The request was unacceptable, often due to missing a required parameter. |  -  |
**401** | Unauthorized, No valid API key provided. |  -  |
**404** | Not Found, The requested resource doesn&#39;t exist. |  -  |
**409** | Conflict, The request conflicts with another request (perhaps due to using the same idempotent key). |  -  |
**429** | Too Many Requests, Too many requests hit the API too quickly. We recommend an exponential backoff of your requests. |  -  |
**500** | Server Errors, Something went wrong on L3vels&#39;s end. |  -  |
**504** | Gateway Timeout, Your request took too long. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **mintBatchAsset**
> void mintBatchAsset(mintBatchInput)

Batch mint assets by admin to player

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MintApi(configuration);

let body:.MintApiMintBatchAssetRequest = {
  // string | API key is associated with multiple games. Please include it in to use developers API.
  authorization: "Authorization_example",
  // MintBatchInput
  mintBatchInput: {
    gameId: "a44b646a-ae14-4e05-ae09-b12d5e7269bf",
    collectionId: "a44b646a-ae14-4e05-ae09-b12d5e7269bf",
    playerAddress: "0x0000000000000000000000000000000000000000",
    playerId: "a44b646a-ae14-4e05-ae09-b12d5e7269bf",
    assets: [
      "[]",
    ],
  },
};

apiInstance.mintBatchAsset(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mintBatchInput** | **MintBatchInput**|  |
 **authorization** | [**string**] | API key is associated with multiple games. Please include it in to use developers API. | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully minted assets to player |  -  |
**400** | Bad Request, The request was unacceptable, often due to missing a required parameter. |  -  |
**401** | Unauthorized, No valid API key provided. |  -  |
**404** | Not Found, The requested resource doesn&#39;t exist. |  -  |
**409** | Conflict, The request conflicts with another request (perhaps due to using the same idempotent key). |  -  |
**429** | Too Many Requests, Too many requests hit the API too quickly. We recommend an exponential backoff of your requests. |  -  |
**500** | Server Errors, Something went wrong on L3vels&#39;s end. |  -  |
**504** | Gateway Timeout, Your request took too long. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


