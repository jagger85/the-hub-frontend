const explorer = new URL('https://api.mainnet.ultra.io/v0/')
import axios from 'axios';

const mainnetEndpoints = [
  {
    text: "EOSNATION",
    value: "https://ultra.api.eosnation.io",
  },
  {
    text: "EOSRIO",
    value: "https://ultra.eosrio.io",
  },
  {
    text: "CRYPTOLIONS",
    value: "https://api.ultra.cryptolions.io",
  },
  {
    text: "EOSUSA",
    value: "https://uos.eosusa.news",
  },
];
const testnetEndpoints = [
  {
    text: "EOSEOUL",
    value: "https://ultratest-api.eoseoul.io",
  },
  {
    text: "EOSNATION",
    value: "http://ultratest.api.eosnation.io",
  },
  {
    text: "EOSRIO",
    value: "https://testnet.ultra.eosrio.io",
  },
  {
    text: "CRYPTOLIONS",
    value: "https://api.ultra-testnet.cryptolions.io",
  },
];

export const apiCalls = {

  endpoints: mainnetEndpoints,
  endpoint: new URL("https://ultra.api.eosnation.io"),
  networks: ["mainnet", "testnet"],
  network: "mainnet",

  /**
   * @param {string} endpoint - The endpoint were is going to fecth by default
   */
  setEndpoint(endpoint) {
    this.endpoint = endpoint;
  },

  /**
   * @param {string} network - The network to call, mainnet or testnet
   */
  setNetwork(network) {
    this.network = network;
    network == "mainnet"
      ? ((this.endpoints = mainnetEndpoints),
        (this.endpoint = mainnetEndpoints[0]))
      : ((this.endpoints = testnetEndpoints),
        (this.endpoint = testnetEndpoints[0]));
  },

  get getNetworks() {
    return this.networks;
  },

  get getNetwork() {
    return this.network;
  },

  get getEndpoint() {
    return this.endpoint;
  },

  get getEndpoints() {
    return this.endpoints;
  },
  
/**
 * Retrieves transactions associated with a specific wallet.
 * @async
 * @function
 * @param {Object} params - The parameters for the search query.
 * @param {string} params.wallet - The wallet address to search for.
 * @param {string} [params.startBlock='0'] - The starting block height for the search.
 * @param {string} [params.sorting='desc'] - The sort order for the search results.
 * @param {string} [params.blockCount='5000000'] - The number of blocks to search.
 * @param {string} [params.limit='100'] - The maximum number of search results to return.
 * @param {string} [params.cursor=''] - The cursor for the search results.
 * @param {boolean} [params.reversible=true] - Whether to include reversible transactions.
 * @returns {Promise<Object[]>} A Promise that resolves with an array of transaction objects.
 */
  getWalletTransactions: async function (params) {

    let query = new URL('search/transactions',explorer) 
    query.searchParams.set('q', `auth:${params.wallet} OR receiver:${params.wallet}`)
    query.searchParams.set('start_block', params?.startBlock ?? '0' )
    query.searchParams.set('sort', params?.sorting ?? 'desc')
    query.searchParams.set('block_count', params?.blockCount ?? '5000000' )
    query.searchParams.set('limit', params?.limit ?? '100')
    query.searchParams.set('cursor', params?.cursor ?? '')
    query.searchParams.set('with_reversible', params?.reversible ?? 'true' )
    return axios.get(query)
    .then(res => res.data.transactions)

  },

  getWalletInfo: async function (wallet) {
    return wallet ?  axios.post(`${this.endpoint}/v1/chain/get_account`,
      { 
        account_name: wallet 
      })
      .then(res => res.data)
      .catch(e => console.log(e.response.data.error.what))
      : console.log('No wallet conected')
    },


  getWalletUniqs: async function (wallet) {
      return wallet ? axios.post(`${this.endpoint}/v1/chain/get_table_rows`,
        {
          code: "eosio.nft.ft",
          table: "token.a",
          json: true,
          scope: `${wallet}`,
          limit: 10000,
        })
        .then(res => res.data.rows)
        : console.log('No wallet connected')
   },
  
  getCollectionById: async function (id) {
    return axios.post(`${this.endpoint}/v1/chain/get_table_rows`,
      {
        scope: "eosio.nft.ft",
        code: "eosio.nft.ft",
        table: "factory.a",
        lower_bound: id,  
        limit: 1,             
        json: true
      })
      .then(res => res.data)
  },
  
  getCollections: async function () {
    return axios.post(`${this.endpoint}/v1/chain/get_table_rows`,
      {
        scope:"eosio.nft.ft", 
        code:"eosio.nft.ft",
        table:"factory.a", 
        json: true
      })  
      .then( res => res.data.rows);
  },


/**
*Get unique items that are currently on sale from the blockchain
*@async
*@function getUniqsOnSale
*@param {Object} params - Parameters for the search query
*@param {string} [params.startBlock='0'] - Start block number to search from
*@param {string} [params.sorting='desc'] - Sorting order for search results
*@param {string} [params.blockCount='5000000'] - Number of blocks to search within
*@param {string} [params.limit='25'] - Maximum number of transactions to return
*@param {string} [params.cursor=''] - Cursor to start search from
*@param {string} [params.reversible='true'] - Whether to include reversible transactions
*@returns {Promise<Array>} - Array of unique items currently on sale
*/

  getUniqsOnSale: async function (params) {

    let query = new URL('search/transactions',explorer) 
    query.searchParams.set('q', 'action:resell')
    query.searchParams.set('start_block', params?.startBlock ?? '0' )
    query.searchParams.set('sort', params?.sorting ?? 'desc')
    query.searchParams.set('block_count', params?.blockCount ?? '5000000' )
    query.searchParams.set('limit', params?.limit ?? '25')
    query.searchParams.set('cursor', params?.cursor ?? '')
    query.searchParams.set('with_reversible', params?.reversible ?? 'true' )
    return axios.get(query)
    .then(res => res.data.transactions)
    },
    
    getUniqsSold: function () {
      return fetch();
    },
    
    getAllWalletsHoldingUniqs: function () {
      return fetch();
    },
    getUniqsMinted: function () {
      return fetch();
    },
  };
  