// tworzenie serwera bez express

const http = require('http')
const port = 3000


const handler = (request, response) => {
    console.log('New user!')
    response.end('Hello Node')
}
const server = http.createServer(handler)

server.listen(port, () =>{
    console.log('server is running...')
})