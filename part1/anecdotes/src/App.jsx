import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
const Anecdote =( {title, anecdote, value} ) => {
  return  (
    <div>
      <h1>{title}</h1>
      <div>{anecdote}</div>
      <div>has {value} votes</div>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(new Array(anecdotes.length).fill(0))

  const handleSelect = () => setSelected(Math.floor(anecdotes.length*Math.random()))
  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    console.log(copy)
    setVote(copy)
  }
  const max = Math.max(...votes)
  return (
    <div>
      <Anecdote title='Anecdote of the day' anecdote={anecdotes[selected]} value={votes[selected]}/>
      <Button onClick={handleVote} text="vote" />
      <Button onClick={handleSelect} text="next anecdote" />
      <Anecdote title='Anecdote with most votes' anecdote={anecdotes[votes.indexOf(max)]} value={max}/>
    </div>
  )
}

export default App