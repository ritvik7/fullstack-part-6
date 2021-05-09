import axios from 'axios'

const baseURL = "http://localhost:3001/anecdotes"

const getAll = async () => {
  const response = await axios.get(baseURL)
  return response.data
}

const createNew = async (newAnecdote) => {
  const response = await axios.post(baseURL, newAnecdote)
  return response.data
}

const addVote = async (anecdote) => {
  const response = await axios.put(`${baseURL}/${anecdote.id}`, {...anecdote, votes: anecdote.votes + 1})
  return response.data
}

const modules = {
  getAll,
  addVote,
  createNew
}

export default modules