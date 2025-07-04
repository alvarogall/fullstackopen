import StatisticLine from "./StatisticLine"

const Statistics = ({ good, neutral, bad}) => {
  if(good == 0 & neutral == 0 && bad == 0) {
    return(
      <>
        <p>No feedback given</p>
      </>
    )
  }

  const all = good + neutral + bad
  const average = (good - bad) / all
  const positivePercentage = good / all * 100 + ' %'
  
  return(
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positivePercentage} />
      </tbody>      
    </table>
  )
}

export default Statistics