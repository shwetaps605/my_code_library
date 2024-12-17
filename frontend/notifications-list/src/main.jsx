import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NotificationProviderrrs from './Notifications'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NotificationProviderrrs>
      <App/>
    </NotificationProviderrrs>
  </StrictMode>,
)
