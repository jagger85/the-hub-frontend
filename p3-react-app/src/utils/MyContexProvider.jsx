import { createContext, useContext, useEffect, useReducer } from 'react';
import { dataService } from './dataService';
const MyContext = createContext();

const actionTypes = {
  UPDATE_PORTFOLIOS: 'UPDATE_PORTFOLIOS',
  REMOVE_PORTFOLIO: 'REMOVE_PORFOLIO',
  UPDATE_WALLETS: 'UPDATE_WALLETS',
  REMOVE_WALLETS: 'REMOVE_WALLET',
  SET_PREFERRED_PORTFOLIO: 'SET_PREFERRED_PORTFOLIO',
  SET_SELECTED_PORTFOLIO: 'SET_SELECTED_PORTFOLIO',
  LOGIN:'LOGIN',
  LOGOUT:'LOGOUT'
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {...state, logged: true}
    case actionTypes.LOGOUT:
      return {...state, logged: false}
    case actionTypes.UPDATE_PORTFOLIOS:
      return { ...state, portfolios: action.portfolios };
    case actionTypes.SET_PREFERRED_PORTFOLIO:
      return { ...state, preferredPortfolio: action.portfolioAlias };
    case actionTypes.SET_SELECTED_PORTFOLIO:
      sessionStorage.setItem('portfolio',JSON.stringify(action.selectedPortfolio ));
      return { ...state, selectedPortfolio: action.selectedPortfolio}
    default:
      console.log(`Action : ${action.type} not supported`);
      return { ...state };
  }
};

const MyContextProvider = ({ children }) => {
  const initialState = { logged:false }
  const [state, dispatch] = useReducer(reducer, initialState);
  
const getPortfolio = () => {
  return JSON.parse(sessionStorage.getItem('portfolio')) 
}

//This function is called when the user log in
const init = async () => {
  try{
    const portfolios = await dataService.getPortfolios();
    dispatch({ type: actionTypes.UPDATE_PORTFOLIOS, portfolios: portfolios });
    const preferredPortfolio = await dataService.getPreferredPortfolio()
    if(preferredPortfolio){
        dispatch({type: actionTypes.SET_SELECTED_PORTFOLIO, selectedPortfolio: preferredPortfolio})
        return 'ok'
      } 
    }catch(e){
      throw e
    }}

    useEffect(()=>{
     if(sessionStorage.getItem('token')) init()
    },[])


  return <MyContext.Provider value={{ state, dispatch, getPortfolio, init }}>{children}</MyContext.Provider>;
};

export { MyContext, MyContextProvider, actionTypes };
