let messages = []
let id = 0

module.exports = {
  getAllMessages: (req, res) => {
    res.status(200).send(messages)
  },

  createMessages: (req, res) => {
    const {text, time} = req.body
    messages.push({id, text, time})
    id++
    res.status(200).send(messages)
  },

  editMessages: (req, res) => {
    const {text} = req.body
    const updateId = req.params.id;
    const index = messages.findIndex(e => e.id === +updateId)

    if(index === -1){
      return res.status(404).send('ID not found')
    }

    let message = messages[index]
    messages[index] = {
      id: message.id,
      text: text || message.text,
      time: message.time
    }
    res.status(200).send(messages)
  },

  deleteMessages: (req, res) => {
    const deleteId = req.params.id
    const index = messages.findIndex(e => e.id === +deleteId)
    if(index === -1){
      return res.status(404).send('Id not found ')
    }

    messages.splice(index, 1)
    res.status(200).send(messages)
  }
}