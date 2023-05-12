# .TransactionApi

All URIs are relative to *https://api-dev.l3vels.xyz*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTransactionById**](TransactionApi.md#getTransactionById) | **GET** /v1/transaction/{game_id}/{id} | Retrieve Transaction by ID
[**getTransactions**](TransactionApi.md#getTransactions) | **GET** /v1/transaction | Retrieve transactions


# **getTransactionById**
> Transaction getTransactionById()

Retrieve transaction by ID

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TransactionApi(configuration);

let body:.TransactionApiGetTransactionByIdRequest = {
  // string | API key is associated with multiple games. Please include it in to use developers API.
  authorization: "Authorization_example",
  // string
  id: "id_example",
  // string
  gameId: "game_id_example",
};

apiInstance.getTransactionById(body).then((data:any) => {
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

**Transaction**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The transaction has been found. |  -  |
**400** | Bad Request, The request was unacceptable, often due to missing a required parameter. |  -  |
**401** | Unauthorized, No valid API key provided. |  -  |
**404** | Not Found, The requested resource doesn&#39;t exist. |  -  |
**409** | Conflict, The request conflicts with another request (perhaps due to using the same idempotent key). |  -  |
**429** | Too Many Requests, Too many requests hit the API too quickly. We recommend an exponential backoff of your requests. |  -  |
**500** | Server Errors, Something went wrong on L3vels&#39;s end. |  -  |
**504** | Gateway Timeout, Your request took too long. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTransactions**
> Transaction getTransactions()

Retrieve all transactions.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TransactionApi(configuration);

let body:.TransactionApiGetTransactionsRequest = {
  // string | API key is associated with multiple games. Please include it in to use developers API.
  authorization: "Authorization_example",
  // string | Game ID to find transactions in your game. Example: Fortnite, Minecraft, etc.
  gameId: "a44b646a-ae14-4e05-ae09-b12d5e7269bf",
  // string | Filter transactions by collection. Example: Get transactions only from Weapons collection. (optional)
  collectionId: "a44b646a-ae14-4e05-ae09-b12d5e7269bf",
  // string | Player ID to mint to. You can provide player ID or player address (optional)
  playerId: "a44b646a-ae14-4e05-ae09-b12d5e7269bf",
  // string | Asset field to sort by. You can sort by name, created_on and etc. (optional)
  sort: "name",
  // 'ASC' | 'DESC' | Sort order (ASC for ascending or DESC for descending) (optional)
  order: "ASC",
  // string | Search transactions by name (optional)
  searchText: "Hammer",
  // number | Number of transactions to return per page (optional)
  limit: 10,
  // number | Page number (optional)
  page: 1,
};

apiInstance.getTransactions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | [**string**] | API key is associated with multiple games. Please include it in to use developers API. | defaults to undefined
 **gameId** | [**string**] | Game ID to find transactions in your game. Example: Fortnite, Minecraft, etc. | defaults to undefined
 **collectionId** | [**string**] | Filter transactions by collection. Example: Get transactions only from Weapons collection. | (optional) defaults to undefined
 **playerId** | [**string**] | Player ID to mint to. You can provide player ID or player address | (optional) defaults to undefined
 **sort** | [**string**] | Asset field to sort by. You can sort by name, created_on and etc. | (optional) defaults to undefined
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | Sort order (ASC for ascending or DESC for descending) | (optional) defaults to undefined
 **searchText** | [**string**] | Search transactions by name | (optional) defaults to undefined
 **limit** | [**number**] | Number of transactions to return per page | (optional) defaults to undefined
 **page** | [**number**] | Page number | (optional) defaults to undefined


### Return type

**Transaction**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The transactions has been found. |  -  |
**400** | Bad Request, The request was unacceptable, often due to missing a required parameter. |  -  |
**401** | Unauthorized, No valid API key provided. |  -  |
**404** | Not Found, The requested resource doesn&#39;t exist. |  -  |
**409** | Conflict, The request conflicts with another request (perhaps due to using the same idempotent key). |  -  |
**429** | Too Many Requests, Too many requests hit the API too quickly. We recommend an exponential backoff of your requests. |  -  |
**500** | Server Errors, Something went wrong on L3vels&#39;s end. |  -  |
**504** | Gateway Timeout, Your request took too long. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


