import { Router } from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../client/App'

const router = Router()
router.get('/', (req, res) => {
   const app = renderToString(<App />)
   const html = `
    <html>
        <head></head>
        <body>
            <div id='root'>${app}</div>
        </body>
        <script src='/client.js' defer></script>
    </html>`

   res.send(html)
})

export default router
