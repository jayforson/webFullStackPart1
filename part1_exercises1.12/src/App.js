import React, { useState } from 'react'

const Button = ({handleClick, text}) => {
  return(
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const initialVotes = Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0);
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(initialVotes)

  const handleVoteClick = () => {
    let newVote = [...votes]
    newVote[selected] += 1
    setVotes(newVote)
  }

  const handleNextClick = () => {
    let rand = Math.floor(Math.random() * anecdotes.length)
    while(selected === rand || rand === anecdotes.length) {
      rand = Math.floor(Math.random() * anecdotes.length)
    }
    setSelected(rand)
  }

  let maxVotes = 0
  let mostVoted = 0
  for (let i = 0; i < votes.length; i++){
    if (votes[i] >= maxVotes) {
      maxVotes = votes[i]
      mostVoted = i
    }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={handleVoteClick} text="vote" />
      <Button handleClick={handleNextClick} text="next anecdote" />
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[mostVoted]}</p>
    </div>
  )
}

export default App