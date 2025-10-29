
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {UserProvider} from './context/UserContext.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
<UserProvider>
    <App />
 </UserProvider>
 </Provider>

)
