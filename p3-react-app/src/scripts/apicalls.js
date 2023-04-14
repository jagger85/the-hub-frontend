const mainnetEndpoints = [
  {
    name: "EOSNATION",
    url: "http://ultra.api.eosnation.io",
  },
  {
    name: "EOSRIO",
    url: "https://ultra.eosrio.io",
  },
  {
    name: "CRYPTOLIONS",
    url: "https://api.ultra.cryptolions.io/",
  },
  {
    name: "EOSUSA",
    url: "https://uos.eosusa.news",
  },
];
const testnetEndpoints = [
  {
    name: "EOSEOUL",
    url: "https://ultratest-api.eoseoul.io/",
  },
  {
    name: "EOSNATION",
    url: "http://ultratest.api.eosnation.io",
  },
  {
    name: "EOSRIO",
    url: "https://testnet.ultra.eosrio.io",
  },
  {
    name: "CRYPTOLIONS",
    url: "https://api.ultra-testnet.cryptolions.io",
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
      .then((response) => response.json())
      .then((result) => result)
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
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => console.log("error", error));
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
      .then((result) => result )
      .catch((error) => console.log("error", error));
  },

  getTransactions: function () {
    return fetch();
  },

  getUniqsOnSale: function () {
    return fetch();
  },

  getUniqsSold: function () {
    return fetch();
  },

  getUniqsMinted: function () {
    return fetch();
  },

  getCollectionById: function () {
    return fetch();
  },

  getCollections: function () {
    return fetch();
  },

  getAllWalletsHoldingUniqs: function () {
    return fetch();
  },
};
