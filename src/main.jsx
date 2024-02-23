import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DataProvider } from './Components/DataProvider/Dataprovider.jsx'
import {initialState, reducer} from './Utility/reducer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider reducer={reducer} initialState={initialState}>
    <App />
    </DataProvider>
    
  </React.StrictMode>,
)
