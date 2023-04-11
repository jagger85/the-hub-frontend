import React from 'react';
import { useState, createContext } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Games from './Games';
import Inventory from './Inventory';
import Collections from './Collections';
import Marketplace from './Marketplace';
import Settings from './Settings';

export const AppContext = createContext()


const App = () => {

  const [ endpoint, setEndpoint ] = useState('http://ultra.api.eosnation.io');
  const [network, setNetwork ] = useState('mainnet')
  const [wallet, setWallet ] = useState('1234')
    return (
      <AppContext.Provider value={{wallet,network,endpoint}}>
       <MainLayout>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path='/inventory' element={<Inventory/>}/>
            <Route path='/marketplace' element={<Marketplace/>}/>
            <Route path='/games' element={<Games/>}/>
            <Route path='/collections' element={<Collections/>}/>
            <Route path='/settings' element={<Settings network={network} setNetwork={setNetwork} endpoint={endpoint} setEndpoint={setEndpoint} />}/>
          </Routes>
        </MainLayout>
      </AppContext.Provider>
    )
}
export default App;

