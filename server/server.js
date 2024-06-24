import express from 'express'
import morgan from 'morgan'
import ViteExpress from 'vite-express'
import chiefsData from './chiefPlayer.js'

const app = express()
const port = '8000'

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))

ViteExpress.config({ printViteDevServerHost: true})

//*** API ROUTES *///

app.get('/chiefPlayer', (req, res) => {
    res.json(chiefsData)
})

ViteExpress.listen(app, port, () => console.log(`Server is listening on port ${port}`))