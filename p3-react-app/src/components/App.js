import React, { Component } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Games from './Games';
import Inventory from './Inventory';
import Collections from './Collections';
import Marketplace from './Marketplace';
import Settings from './Settings';

class App extends Component{
  render() {
    return (
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path='/inventory' element={<Inventory/>}/>
        <Route path='/marketplace' element={<Marketplace/>}/>
        <Route path='/games' element={<Games/>}/>
        <Route path='/collections' element={<Collections/>}/>
        <Route path='/settings' element={<Settings/>}/>
      </Routes>
      
    )
  }
}
export default App;

