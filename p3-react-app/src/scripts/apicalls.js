const mainnetEndpoints = [
  {
    text: "EOSNATION",
    value: "http://ultra.api.eosnation.io",
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
  endpoint: "http://ultra.api.eosnation.io",
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

  getWalletTransactions: async function (wallet) {
    return fetch(
      `https://api.mainnet.ultra.io/v0/search/transactions?q=(auth:${wallet} OR receiver:${wallet})&sort=desc&limit=100&block_count=5000000&start_block=0&limit=5&cursor&with_reversible=true`
    )
      .then((res) => res.json())
      .then((data) => data.transactions)
      .catch((error) => console.log("error", error));
  },

  getWalletInfo: async function (wallet) {

      return fetch(`${this.endpoint}/v1/chain/get_account`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `{ "account_name": "${wallet}" }`,
      })
      .then((res) =>  res.json())
      .then((data) => {if(data.code != '500') return  data})
      .catch((error) => console.log(error))
    },


  getWalletUniqs: async function (wallet) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      code: "eosio.nft.ft",
      table: "token.a",
      json: true,
      scope: `${wallet}`,
      limit: 10000,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    return fetch(
      `${this.endpoint}/v1/chain/get_table_rows`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        if(result.rows.length != 0 ) return result.rows}
        )
      .catch((error) => console.log("error", error));
  },
  
  getCollectionById: async function (id) {
    console.log(id)
    return fetch(`${this.endpoint}/v1/chain/get_table_rows`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: ` {
        "scope": "eosio.nft.ft",
        "code": "eosio.nft.ft",
        "table": "factory.a",
        "lower_bound": ${id},  
        "limit": 1,             
        "json": true
      }`,
    })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.log("error", error));
  },
  
  getCollections: async function () {
    return fetch(`${this.endpoint}/v1/chain/get_table_rows`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: '{"scope":"eosio.nft.ft", "code":"eosio.nft.ft", "table":"factory.a", "json": true}',
    })
    .then((res) => res.json())
    .then((data) => data.rows);
  },

  getUniqsOnSale: async function () {
    return fetch(
      "https://api.mainnet.ultra.io/v0/search/transactions?q=action%3Aresell&start_block=0&sort=desc&block_count=5000000&limit=25&cursor=&with_reversible=true"
      )
      .then((response) => response.json())
      .then((result) => result.transactions)
      .catch((error) => console.log("error", error));
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
  