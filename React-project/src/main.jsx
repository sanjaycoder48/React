import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './chatbot.css'
import ChatBot from './chatbot.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChatBot />
  </StrictMode>,
)
