import axios from 'axios'

const a = axios.create({
    baseURL: 'https://the-hub-dt35.onrender.com/',
})

export const dataService = {
    getCurrency: async function () {
        let config = {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            },
        }
        return await a
            .get(`settings/currency/${sessionStorage.getItem('user')}`, config)
            .then((res) => res.data)
    },

    setCurrency: async function (currency) {
        let config = {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            },
        }
        return await a
            .post(
                `settings/currency/${sessionStorage.getItem('user')}`,
                { currency: currency },
                config
            )
            .then((res) => res.data)
    },

    getPreferredPortfolio: async function () {
        let config = {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            },
        }
        return await a
            .get(`settings/portfolio/${sessionStorage.getItem('user')}`, config)
            .then((res) => res.data)
    },

    setPreferredPortfolio: async function (portfolioName) {
        let config = {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            },
        }
        return await a
            .post(
                `settings/portfolio/${sessionStorage.getItem('user')}`,
                { preferredPortfolio: portfolioName },
                config
            )
            .then((res) => res.data)
    },

    getPortfolios: async function () {
        let config = {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            },
        }
        return await a
            .get(`user/portfolios/${sessionStorage.getItem('user')}`, config)
            .then((res) => res.data.portfolios)
    },

    getPortfolio: async function (portfolioAlias) {
        let config = {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            },
        }
        return await a
            .get(
                `user/${sessionStorage.getItem('user')}/${portfolioAlias}/`,
                config
            )
            .then((res) => res.data.portfolio)
    },

    getWallet: async function (portfolioAlias, walletAlias) {
        let config = {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            },
        }
        return await a
            .get(
                `user/${sessionStorage.getItem(
                    'user'
                )}/${portfolioAlias}/${walletAlias}`,
                config
            )
            .then((res) => res.data.wallets)
    },

    createUser: async function (username, email, password) {
        return await a
            .post(`register`, {
                username: username,
                email: email,
                password: password,
            })
            .then((res) => res.data)
    },

    logInUser: async function (username, password) {
        return a
            .post(`login`, { username: username, password: password })
            .then((response) => {
                if (response.data.token) {
                    sessionStorage.setItem('token', response.data.token)
                    sessionStorage.setItem('user', username)
                    return response.data.message
                } else {
                    return response.data.error
                }
            })
    },

    getPortfolioWallets: async function (portfolioAlias) {
        let config = {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            },
        }
        return await a
            .get(
                `/user/${sessionStorage.getItem(
                    'user'
                )}/${portfolioAlias}/wallets`,
                config
            )
            .then((res) => res.data.wallets)
    },

    addPortfolio: async function (portfolioAlias) {
        let config = {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            },
        }
        return await a
            .post(
                `user/portfolios/${sessionStorage.getItem('user')}`,
                { alias: portfolioAlias },
                config
            )
            .then((res) => res.data)
    },

    removePortfolio: async function (portfolioAlias) {
        let config = {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            },
        }
        return await a
            .delete(`user/portfolios/${sessionStorage.getItem('user')}`, {
                ...config,
                data: { alias: portfolioAlias },
            })
            .then((res) => res.data)
    },

    addWallet: async function (portfolioAlias, walletAlias, walletAddress) {
        let config = {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            },
        }
        return await a
            .post(
                `user/portfolios/wallets/${sessionStorage.getItem('user')}`,
                {
                    alias: portfolioAlias,
                    walletAlias: walletAlias,
                    walletAddress: walletAddress,
                },
                config
            )
            .then((res) => res.data)
    },

    removeWallet: async function (portfolioAlias, walletAlias) {
        let config = {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            },
        }
        return await a
            .delete(
                `user/portfolios/wallets/${sessionStorage.getItem('user')}`,
                {
                    ...config,
                    data: { alias: portfolioAlias, walletAlias: walletAlias },
                }
            )
            .then((res) => res.data)
    },
}
