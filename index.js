const server = require('./API/server')
const port = process.env.PORT || 8000;

server.listen(port, () => {
    console.log(`Server spun up @ http://localhost:${port}`)
})
