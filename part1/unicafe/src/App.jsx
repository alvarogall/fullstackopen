import { useState } from 'react'
import Button from './Button'
import Statistics from './Statistics'
import Header from './Header'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => setGood(good + 1)
  const handleClickNeutral = () => setNeutral(neutral + 1)
  const handleClickBad = () => setBad(bad + 1)

  return (
    <div>
      <Header text="give feedback" />
      <Button onClickButton={handleClickGood} text="good" />
      <Button onClickButton={handleClickNeutral} text="neutral" />
      <Button onClickButton={handleClickBad} text="bad" />
      <Header text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App