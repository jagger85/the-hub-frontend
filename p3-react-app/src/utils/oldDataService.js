export const dataService = {
    
    currency : '',

    get currency(){
        return this.currency
    },

    get portfolios() {
        return JSON.parse(localStorage.getItem('portfolios'))
    },

    getPortfolioWallets: function(name){
      return JSON.parse(localStorage.getItem('portfolios')).find( x => x.name == name ).wallets
    },

    addPortfolio: function(portfolio) {
        const portfolios = JSON.parse(localStorage.getItem('portfolios')) || [];
        localStorage.setItem('portfolios',
          JSON.stringify(
                portfolios.some(e => e.name === portfolio) // Check if the portfolio exists
              ? portfolios
              : [...portfolios, { name: portfolio, wallets: [] }]
          ));
      },

    removePortfolios: function(portfolio){
        let portfolios = JSON.parse(localStorage.getItem('portfolios'))
        
        localStorage.setItem('portfolios',JSON.stringify(portfolios.filter( e =>{
            return e.name != portfolio
        })))
    },

    removePortfolio: function(portfolio){
        const portfolios = JSON.parse(localStorage.getItem('portfolios') || '[]');
        
        const filteredPortfolios = portfolios.filter(e => e.name !== portfolio);
      
        if (filteredPortfolios.length == portfolios.length) { //Check if the portfolio existed
          console.log(`Could not find portfolio "${portfolio}"`);
        }
      
        localStorage.setItem('portfolios', JSON.stringify(filteredPortfolios));
      },

      addWallet: function(portfolioName,alias,wallet){
        let portfolios = JSON.parse(localStorage.getItem('portfolios'))
        // Check first if there is the same alias already
        if(portfolios.find(x => x.name = portfolioName).wallets.every(x => x.alias != alias)){
          portfolios.find(x => x.name = portfolioName).wallets.push({alias:alias,address:wallet})
        }
          localStorage.setItem('portfolios',JSON.stringify(portfolios))
      },
      removeWallet: function(portfolioName, alias){
        let portfolios = JSON.parse(localStorage.getItem('portfolios'))
        portfolios.find( x => x.name == portfolioName ).wallets = portfolios.find( x => x.name == portfolioName ).wallets.filter( x => x.alias != alias)
        localStorage.setItem('portfolios',JSON.stringify(portfolios))
      },
      

    setCurrency : function(currency){
        this.currency = currency
    },

}

