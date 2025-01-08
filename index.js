const http = require('http')

let server = http.createServer((req, res) => [

])

const PORT = 3000
const HOST = 'localhost'

server.listen(PORT, HOST, () => [
    console.log(`Сервер запущен: http://${HOST}:${PORT}`)
])