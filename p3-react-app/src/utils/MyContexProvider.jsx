import { createContext, useContext, useEffect, useReducer } from 'react';
import { dataService } from './dataService';
const MyContext = createContext();

const actionTypes = {
  UPDATE_PORTFOLIOS: 'UPDATE_PORTFOLIOS',
  REMOVE_PORTFOLIO: 'REMOVE_PORFOLIO',
  UPDATE_WALLETS: 'UPDATE_WALLETS',
  REMOVE_WALLETS: 'REMOVE_WALLET',
  SET_PREFERRED_PORTFOLIO: 'SET_PREFERRED_PORTFOLIO',
  SET_SELECTED_PORTFOLIO: 'SET_SELECTED_PORTFOLIO'
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_PORTFOLIOS:
      return { ...state, portfolios: action.portfolios };
    case actionTypes.SET_PREFERRED_PORTFOLIO:
      return { ...state, preferredPortfolio: action.portfolioAlias };
    case actionTypes.SET_SELECTED_PORTFOLIO:
      return { ...state, selectedPortfolio: action.selectedPortfolio}
    default:
      console.log(`Action : ${action.type} not supported`);
      return { ...state };
  }
};

const MyContextProvider = ({ children }) => {
  const initialState = { portfolios: [], preferredPortfolio: null };
  const [state, dispatch] = useReducer(reducer, initialState);

const getPortfolio = () => {
  return state.selectedPortfolio ?? state.preferredPortfolio
}
  useEffect(() => {
    const init = async () => {
      const portfolios = await dataService.getPortfolios();
      dispatch({ type: actionTypes.UPDATE_PORTFOLIOS, portfolios: portfolios });
      const preferredPortfolio = await dataService.getPreferredPortfolio()
      dispatch({type: actionTypes.SET_PREFERRED_PORTFOLIO, portfolioAlias:preferredPortfolio})
    };
    init();
  }, []);

  return <MyContext.Provider value={{ state, dispatch, getPortfolio }}>{children}</MyContext.Provider>;
};

export { MyContext, MyContextProvider, actionTypes };
