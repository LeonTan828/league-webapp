import express from 'express'

const app = express()

const scores = [
  {
    name: 'John Doe',
    score: 10,
  },
  {
    name: 'James Smith',
    score: 20,
  },
  {
    name: 'Jane Doe',
    score: 30,
  },
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/scores', (request, response) => {
  response.json(scores)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
