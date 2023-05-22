import axios from 'axios';

const a = axios.create({
  baseURL: 'https://the-hub-dt35.onrender.com/',
});

let config;

export const dataService = {
  user: '',

  getCurrency: async function () {
    return await a.get(`settings/currency/${this.user}`, config).then(res => res.data)
  },

  setCurrency: async function (currency) {
    return await a.post(`settings/currency/${this.user}`,{currency: currency}, config).then(res => res.data)
  },

  getPreferredPortfolio: async function () {
    return await a.get(`settings/portfolio/${this.user}`, config).then(res => res.data)
  },

  setPreferredPortfolio: async function (portfolioName) {
    return await a.post(`settings/portfolio/${this.user}`,{preferredPortfolio:portfolioName}, config).then(res => res.data)
  },

  setUser: function (username) {
    this.user = username;
  },

  getPortfolios: async function () {
    return await a.get(`user/portfolios/${this.user}`, config).then((res) => res.data.portfolios);
  },

  getPortfolio: async function (portfolioAlias) {
    return await a.get(`user/${this.user}/${portfolioAlias}/`, config).then((res) => res.data.portfolio);
  },

  getWallet: async function (portfolioAlias, walletAlias) {
    return await a.get(`user/${this.user}/${portfolioAlias}/${walletAlias}`, config).then((res) => res.data.wallets);
  },

  createUser: async function (username, email, password) {
    return await a
      .post(`register`, { username: username, email: email, password: password })
      .then((res) => console.log(res.data));
  },

  logInUser: async function (username, password) {
    return a.post(`login`, { username: username, password: password }).then((response) => {
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        this.user = username;
        config = {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        };
        return response.data.message;
      } else {
        return response.data.error;
      }
    });
  },

  getPortfolioWallets: async function (portfolioAlias) {
    return await a.get(`/user/${this.user}/${portfolioAlias}/wallets`, config).then((res) => res.data.wallets);
  },

  addPortfolio: async function (portfolioAlias) {
    return await a.post(`user/portfolios/${this.user}`, { alias: portfolioAlias }, config).then((res) => res.data);
  },

  removePortfolio: async function (portfolioAlias) {
    return await a
      .delete(`user/portfolios/${this.user}`, { ...config, data: { alias: portfolioAlias } })
      .then((res) => res.data);
  },

  addWallet: async function (portfolioAlias, walletAlias, walletAddress) {
    return await a
      .post(
        `user/portfolios/wallets/${this.user}`,
        {
          alias: portfolioAlias,
          walletAlias: walletAlias,
          walletAddress: walletAddress,
        },
        config
      )
      .then((res) => res.data);
  },

  removeWallet: async function (portfolioAlias, walletAlias) {
    return await a
      .delete(`user/portfolios/wallets/${this.user}`, {
        ...config,
        data: { alias: portfolioAlias, walletAlias: walletAlias },
      })
      .then((res) => res.data);
  }
};
