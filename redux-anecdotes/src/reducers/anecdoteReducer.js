import anecdoteService from '../services/anecdotes'

export const addVote = (anecdote) => async dispatch => {
  await anecdoteService.addVote(anecdote)
  return dispatch({
    type: 'INCREMENT_VOTE',
    data: anecdote
  })
}

export const createAnecdote = (newAnecdote) => async dispatch => {
  const result = await anecdoteService.createNew({content: newAnecdote, votes: 0})
  return dispatch({
    type: 'NEW_ANECDOTE',
    data: result
  })
}

export const initializeAnecdotes = (data) => async dispatch => {
  const data = await anecdoteService.getAll()
  return dispatch({
    type: 'INIT',
  data: data
  })
}

export const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'INCREMENT_VOTE': {
      return state.map(a => a.id === action.data.id? { ...action.data, votes: a.votes + 1 }: a)
    }
    case 'NEW_ANECDOTE': {
      return [...state, action.data]
    }
    case 'INIT': {
      return action.data
    }
    default: 
      return state
  }
}