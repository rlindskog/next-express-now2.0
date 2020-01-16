import express from 'express'

const app = express()

app.get('/api/message', (req, res) => {
  res.json({ message: 'hello' })
})

app.get('/api/hello/world', (req, res) => {
  res.json({ hello: 'world' })
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})