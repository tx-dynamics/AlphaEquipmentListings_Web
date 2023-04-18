import React from 'react'
import { BrowserRouter } from "react-router-dom";
import SnackbarProvider from 'react-simple-snackbar'

import './App.css'
import Navigation from './navigation/Navigation';

const App = () => {
    return (
        <BrowserRouter>
            <SnackbarProvider>
                <Navigation />
            </SnackbarProvider>
        </BrowserRouter>
    )
}

export default App
