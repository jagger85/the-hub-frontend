import React from 'react'
import MainLayout from './layouts/MainLayout'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Organisms/Dashboard'
import TestArea from './components/TestArea/TestArea'
import Inventory from './components/Organisms/Inventory'
import Collections from './components/Organisms/Collections'
import CollectionInfo from './components/Organisms/CollectionInfo'
import Marketplace from './components/Organisms/Marketplace'
import Settings from './components/Organisms/Settings'
import { ThemeProvider } from '@mui/material'
import { theme } from './theme'
import LoginLayout from './layouts/LoginLayout'
import { MyContextProvider } from './utils/MyContexProvider'

const App = () => {
    return (
        <MyContextProvider>
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route path="/login" element={<LoginLayout />} />
                    <Route
                        path="/"
                        element={
                            <MainLayout>
                                <Dashboard />
                            </MainLayout>
                        }
                    />
                    <Route
                        path="/inventory"
                        element={
                            <MainLayout>
                                <Inventory />
                            </MainLayout>
                        }
                    />
                    <Route
                        path="/marketplace"
                        element={
                            <MainLayout>
                                <Marketplace />
                            </MainLayout>
                        }
                    />
                    <Route
                        path="/test"
                        element={
                            <MainLayout>
                                <TestArea />
                            </MainLayout>
                        }
                    />
                    <Route
                        path="/collections"
                        element={
                            <MainLayout>
                                <Collections />
                            </MainLayout>
                        }
                    />
                    <Route
                        path="/collection/:id"
                        element={
                            <MainLayout>
                                <CollectionInfo />
                            </MainLayout>
                        }
                    />
                    <Route
                        path="/settings"
                        element={
                            <MainLayout>
                                <Settings />
                            </MainLayout>
                        }
                    />
                </Routes>
            </ThemeProvider>
        </MyContextProvider>
    )
}
export default App
