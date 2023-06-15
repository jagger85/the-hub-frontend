import { createContext, useContext, useEffect, useReducer } from 'react'
import { dataService } from './dataService'
const MyContext = createContext()

const actionTypes = {
    UPDATE_PORTFOLIOS: 'UPDATE_PORTFOLIOS',
    REMOVE_PORTFOLIO: 'REMOVE_PORFOLIO',
    UPDATE_WALLETS: 'UPDATE_WALLETS',
    REMOVE_WALLETS: 'REMOVE_WALLET',
    SET_PREFERRED_PORTFOLIO: 'SET_PREFERRED_PORTFOLIO',
    SET_SELECTED_PORTFOLIO: 'SET_SELECTED_PORTFOLIO',
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    LOADING: 'LOADING',
    LOADED: 'LOADED',
}

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.LOADING:
            return { ...state, loading: true }

        case actionTypes.LOADED:
            return { ...state, loading: false }

        case actionTypes.LOGIN:
            return { ...state, logged: true }

        case actionTypes.LOGOUT:
            return { ...state, logged: false }

        case actionTypes.UPDATE_PORTFOLIOS:
            return { ...state, portfolios: action.portfolios }

        case actionTypes.SET_PREFERRED_PORTFOLIO:
            return { ...state, preferredPortfolio: action.preferredPortfolio }

        case actionTypes.SET_SELECTED_PORTFOLIO:
            sessionStorage.setItem(
                'portfolio',
                JSON.stringify(action.selectedPortfolio)
            )
            return { ...state, selectedPortfolio: action.selectedPortfolio }

        default:
            console.log(`Action : ${action.type} not supported`)
            return { ...state }
    }
}

const MyContextProvider = ({ children }) => {
    const initialState = { logged: false }
    const [state, dispatch] = useReducer(reducer, initialState)

    //This function is called when the user log in
    const init = async () => {
        try {
            //User logs
            dispatch({ type: actionTypes.LOADING })
            const portfolios = await dataService.getPortfolios() // LOAD PORTFOLIOS
            dispatch({
                type: actionTypes.UPDATE_PORTFOLIOS,
                portfolios: portfolios,
            }) //UPDATE PORTFOLIOS TO STATE
            if (portfolios.length == 0) {
                // IF THERE IS NO PORTFOLIOS NOTHING TO DO
                dispatch({ type: actionTypes.LOADED })
                return 'ok'
            }

            const preferredPortfolio = await dataService.getPreferredPortfolio() // IS THERE A PREFERRED PORTFOLIO
            if (preferredPortfolio != '') {
                // IF SO
                console.log(portfolios)
                console.log(preferredPortfolio)
                dispatch({
                    type: actionTypes.SET_SELECTED_PORTFOLIO,
                    selectedPortfolio: preferredPortfolio,
                }) // SET THE SELECTED PORTFOLIO TO SHOW
                dispatch({
                    type: actionTypes.SET_PREFERRED_PORTFOLIO,
                    preferredPortfolio: preferredPortfolio,
                }) // SET THE PREFERRED PORTFOLIO
                dispatch({ type: actionTypes.LOADED })
                return 'ok'
            } else {
                // IF THERE IS NOT A PREFERRED PORTFOLIO THEN SHOW THE FIRST ONE
                dispatch({
                    type: actionTypes.SET_SELECTED_PORTFOLIO,
                    selectedPortfolio: portfolios[0],
                })
                console.log(portfolios)
                dispatch({ type: actionTypes.LOADED })
                return 'ok'
            }
        } catch (e) {
            throw e
        }
    }

    useEffect(() => {
        if (sessionStorage.getItem('token')) init()
    }, [])

    const getPortfolio = () => {
        return JSON.parse(sessionStorage.getItem('portfolio'))
    }

    return (
        <MyContext.Provider value={{ state, dispatch, init, getPortfolio }}>
            {children}
        </MyContext.Provider>
    )
}

export { MyContext, MyContextProvider, actionTypes }
