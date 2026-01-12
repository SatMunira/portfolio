import React from 'react'
import ReactDOM from 'react-dom/client'
import Portfolio from './Portfolio.jsx'
import { Analytics } from "@vercel/analytics/react"

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Portfolio />
        <Analytics />
    </React.StrictMode>,
)