import express from 'express'
import { twitRouter } from './src/twit/twit.controller.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

async function main() {
    app.use(express.json())

    app.use('/api/twit', twitRouter)

    app.all('*', (req, res) => {
        res.status(404).json({ message: 'Not found'})
    })

    app.listen(process.env.PORT || 3000, () => {
        console.log('Server is runing on port 3000')
    })
}

main()