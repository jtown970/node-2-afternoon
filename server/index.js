const express = require('express')
const mc = require('./controllers/messages_controller')

const app = express()

const SERVER_PORT = 3001

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'));

const messagesBaseUrl = "/api/messages"

app.get(messagesBaseUrl, mc.getAllMessages)
app.post(messagesBaseUrl, mc.createMessages)
app.put(`${messagesBaseUrl}/:id`, mc.editMessages)
app.delete(`${messagesBaseUrl}/:id`, mc.deleteMessages)

app.listen(SERVER_PORT, () => console.log(`server is running on port ${SERVER_PORT}`))

