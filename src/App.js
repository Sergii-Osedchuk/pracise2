import s from './App.module.css';
import { useState } from 'react';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';

function App() {
  let [good, setGood] = useState(0);
  let [bad, setBad] = useState(0);
  let [neutral, setNeutral] = useState(0);

  const handleGood = () => {
    setGood(prev => good = prev + 1);
  }

  const handleNeutral = () => {
    setNeutral(prev => neutral = prev + 1);
  }

  const handleBad = () => {
    setBad(prev => bad = prev + 1);
  }

  const total = good + bad + neutral;

  const countTotalFeedback = (good, bad, neutral) => good + bad + neutral;
  const countPositiveFeedback = (good, bad, neutral) => Math.trunc(good / (good + bad + neutral) * 100)



  return (
    <div className={s.app}>
      <FeedbackOptions 
        goodIncrement={handleGood} 
        neutralIncrement={handleNeutral} 
        badIncrement={handleBad}
      />
      <Statistics 
        good={good} 
        bad={bad} 
        neutral={neutral} 
        total = {countTotalFeedback(good, bad, neutral)} 
        positive = {total ? countPositiveFeedback(good, bad, neutral) : 0}
      />
    </div>
  );
}

export default App;
