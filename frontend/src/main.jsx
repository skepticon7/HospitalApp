import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthConextProvider } from './Context/AuthContext.jsx'
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux";
import store from "../src/Redux/Store/ReduxStore.js";

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <BrowserRouter>
   
        <AuthConextProvider>
            <Provider store={store}>
            <App />
            </Provider>
                    
        </AuthConextProvider>
    </BrowserRouter>    
    </>

  
)
