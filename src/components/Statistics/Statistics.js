import s from './Statistics.module.css';
import Notification from '../Notification/Notification';

function Statistics({good, neutral, bad, total, positive}) {
    return (
        <div className={s.statistic}>
          <h2>Statistics</h2>
          {total ? (
            <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {positive}</p></>) : 
          <Notification message= 'There is no statistics yet' />}
          
        </div>
    )
}

export default Statistics;