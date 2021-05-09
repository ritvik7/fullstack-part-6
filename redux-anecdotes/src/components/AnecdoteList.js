import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import Filter from './Filter'

const Anecdote = ({anecdote, handleVotes}) => {  
  return(
    <div>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => handleVotes(anecdote)}>vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.filter === ''? state.anecdotes: state.anecdotes.filter(a => a.content.includes(state.filter)))

  const vote = (votedAnecdote) => {
    dispatch(addVote(votedAnecdote))
    dispatch(setNotification(`You have voted for '${votedAnecdote.content}'`, 5000))
  }

  return ( 
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      {anecdotes
        .sort((a1, a2) => a2.votes - a1.votes)
        .map(anecdote => <Anecdote key={anecdote.id} anecdote={anecdote} handleVotes={vote} />)}
    </div>
  )

}

export default AnecdoteList