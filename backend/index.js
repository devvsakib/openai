const path = require('path')
const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/openai', require('./routes/openAiRoutes'))
app.get('/openai', require('./routes/openAiRoutes'), (req, res) => {
    res.send('hello')
})
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => console.log(`Server Running on ${PORT}`))