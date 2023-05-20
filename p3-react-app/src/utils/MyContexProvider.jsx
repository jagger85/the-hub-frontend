import { createContext, useContext, useEffect, useReducer } from 'react';
import { dataService } from './dataService';
const MyContext = createContext();

const actionTypes = {
  UPDATE_PORTFOLIOS: 'UPDATE_PORTFOLIOS',
  REMOVE_PORTFOLIO: 'REMOVE_PORFOLIO',
  UPDATE_WALLETS: 'UPDATE_WALLETS',
  REMOVE_WALLETS: 'REMOVE_WALLET',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_PORTFOLIOS:
      return { ...state, portfolios: action.portfolios };
    case actionTypes.REMOVE_PORTFOLIO:
      return { ...state };
    case actionTypes.UPDATE_WALLETS:
      return { ...state };
    case actionTypes.REMOVE_WALLETS:
      return { ...state };
    default:
      console.log(`Action : ${action.type} not supported`);
      return { ...state };
  }
};

const MyContextProvider = ({ children }) => {
  const initialState = { portfolios: [] };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const init = async () => {
     const updatedPortfolios = await dataService.getPortfolios();
      dispatch({ type: actionTypes.UPDATE_PORTFOLIOS, portfolios: updatedPortfolios });
    };
    init();
  }, []);

  return <MyContext.Provider value={{state, dispatch}}>{children}</MyContext.Provider>;
};

export {MyContext, MyContextProvider, actionTypes}
