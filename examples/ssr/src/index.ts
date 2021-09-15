import express from 'express'
import morgan from 'morgan'
import path from 'path/posix'
import homeRoute from './routes/home'

const app = express()

app.use(express.json())
app.use(morgan('tiny'))
app.use(homeRoute)
app.use(express.static(path.join(__dirname, 'public')))
app.listen(3000, () => {
   console.log('🚀 server listen on port 3000')
})
