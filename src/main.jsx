import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux'
import UserStore from './components/fetchUser/UserStore.jsx'
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store= {UserStore}>
       <App />
    </Provider>
   
  </StrictMode>,
)
