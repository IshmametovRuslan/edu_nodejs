import express from 'express'
import { twitRouter } from './src/twit/twit.controller.js'

const app = express()

async function main() {
    app.use(express.json())

    app.use('/api/twit', twitRouter)

    app.all('*', (req, res) => {
        res.status(404).json({ message: 'Not found'})
    })

    app.listen(3000, () => {
        console.log('Server is runing on port 3000')
    })
}

main()