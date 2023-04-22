# .CollectionApi

All URIs are relative to *https://api-dev.l3vels.xyz*

Method | HTTP request | Description
------------- | ------------- | -------------
[**countCollectionsByGameId**](CollectionApi.md#countCollectionsByGameId) | **GET** /v1/collection/count/{game_id} | Count collections
[**getCollectionById**](CollectionApi.md#getCollectionById) | **GET** /v1/collection/{game_id}/{id} | Retrieve collection by ID
[**getCollections**](CollectionApi.md#getCollections) | **GET** /v1/collection | Retrieve collections


# **countCollectionsByGameId**
> number countCollectionsByGameId()

Count total collections in game.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CollectionApi(configuration);

let body:.CollectionApiCountCollectionsByGameIdRequest = {
  // string | API key is associated with multiple games. Please include it in to use developers API.
  authorization: "Authorization_example",
  // string | Game ID to count collections in
  gameId: "a44b646a-ae14-4e05-ae09-b12d5e7269bf",
};

apiInstance.countCollectionsByGameId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | [**string**] | API key is associated with multiple games. Please include it in to use developers API. | defaults to undefined
 **gameId** | [**string**] | Game ID to count collections in | defaults to undefined


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
**200** | The collections has been counted. |  -  |
**400** | Bad Request, The request was unacceptable, often due to missing a required parameter. |  -  |
**401** | Unauthorized, No valid API key provided. |  -  |
**404** | Not Found, The requested resource doesn&#39;t exist. |  -  |
**409** | Conflict, The request conflicts with another request (perhaps due to using the same idempotent key). |  -  |
**429** | Too Many Requests, Too many requests hit the API too quickly. We recommend an exponential backoff of your requests. |  -  |
**500** | Server Errors, Something went wrong on L3vels&#39;s end. |  -  |
**504** | Gateway Timeout, Your request took too long. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCollectionById**
> Collection getCollectionById()

This API method retrieves a specific collection based on the unique identifier provided in the request.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CollectionApi(configuration);

let body:.CollectionApiGetCollectionByIdRequest = {
  // string | API key is associated with multiple games. Please include it in to use developers API.
  authorization: "Authorization_example",
  // string | Collection ID to find
  id: "229fd9e0-b51f-4b20-9203-9db60995e6b1",
  // string | Game ID to find collection in
  gameId: "a44b646a-ae14-4e05-ae09-b12d5e7269bf",
};

apiInstance.getCollectionById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | [**string**] | API key is associated with multiple games. Please include it in to use developers API. | defaults to undefined
 **id** | [**string**] | Collection ID to find | defaults to undefined
 **gameId** | [**string**] | Game ID to find collection in | defaults to undefined


### Return type

**Collection**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The collection has been found. |  -  |
**400** | Bad Request, The request was unacceptable, often due to missing a required parameter. |  -  |
**401** | Unauthorized, No valid API key provided. |  -  |
**404** | Not Found, The requested resource doesn&#39;t exist. |  -  |
**409** | Conflict, The request conflicts with another request (perhaps due to using the same idempotent key). |  -  |
**429** | Too Many Requests, Too many requests hit the API too quickly. We recommend an exponential backoff of your requests. |  -  |
**500** | Server Errors, Something went wrong on L3vels&#39;s end. |  -  |
**504** | Gateway Timeout, Your request took too long. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCollections**
> Array<Collection> getCollections()

This API method retrieves a list of collections that match the specified filter criteria. Developers can use this method to retrieve collections by name, category, status, or other properties.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CollectionApi(configuration);

let body:.CollectionApiGetCollectionsRequest = {
  // string | API key is associated with multiple games. Please include it in to use developers API.
  authorization: "Authorization_example",
  // string | Game ID to find collections in your game. Example: Fortnite, Minecraft, etc.
  gameId: "a44b646a-ae14-4e05-ae09-b12d5e7269bf",
  // string | Collection field to sort by. You can sort by name, created_on and etc. (optional)
  sort: "name",
  // string | Sort order (ASC for ascending or DESC for descending) (optional)
  order: "ASC",
  // string | Search collections by name (optional)
  searchText: "Weapons",
  // number | Number of collections to return per page (optional)
  limit: 10,
  // number | Page number (optional)
  page: 1,
};

apiInstance.getCollections(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | [**string**] | API key is associated with multiple games. Please include it in to use developers API. | defaults to undefined
 **gameId** | [**string**] | Game ID to find collections in your game. Example: Fortnite, Minecraft, etc. | defaults to undefined
 **sort** | [**string**] | Collection field to sort by. You can sort by name, created_on and etc. | (optional) defaults to undefined
 **order** | [**string**] | Sort order (ASC for ascending or DESC for descending) | (optional) defaults to undefined
 **searchText** | [**string**] | Search collections by name | (optional) defaults to undefined
 **limit** | [**number**] | Number of collections to return per page | (optional) defaults to undefined
 **page** | [**number**] | Page number | (optional) defaults to undefined


### Return type

**Array<Collection>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The collections has been found |  -  |
**400** | Bad Request, The request was unacceptable, often due to missing a required parameter. |  -  |
**401** | Unauthorized, No valid API key provided. |  -  |
**404** | Not Found, The requested resource doesn&#39;t exist. |  -  |
**409** | Conflict, The request conflicts with another request (perhaps due to using the same idempotent key). |  -  |
**429** | Too Many Requests, Too many requests hit the API too quickly. We recommend an exponential backoff of your requests. |  -  |
**500** | Server Errors, Something went wrong on L3vels&#39;s end. |  -  |
**504** | Gateway Timeout, Your request took too long. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


