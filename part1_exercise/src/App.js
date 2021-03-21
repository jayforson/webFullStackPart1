import React, { useState } from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'

const Button = ({handleClick, text}) => {
  return(
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

const Statistic = ({text, value}) => {
  return(
    <div>
      <p>{text} {value}</p>
    </div>
  )
}
const Statistics = ({good, neutral, bad}) => {
  if(good == 0 && neutral ==0 && bad == 0) {
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  else {
    const total = good + neutral + bad
    const ave = (good - bad) / total
    const positive = good / total
    return(
      <div>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={total} />
        <Statistic text="ave" value={ave} />
        <Statistic text="positive" value={positive} />
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text={'good'} />
      <Button handleClick={handleNeutralClick} text={'neutral'} />
      <Button handleClick={handleBadClick} text={'bad'} />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/> 
    </div>
  )
}

export default App