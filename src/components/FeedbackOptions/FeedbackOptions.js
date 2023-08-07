import s from './FeedbackOptions.module.css';

function FeedbackOptions({goodIncrement, neutralIncrement, badIncrement}) {
    return (
        <div className={s.feedback}>
          <h1 className={s.name}>Please leave feedback</h1>
          <button onClick={goodIncrement} className={s.mark}>Good</button>
          <button onClick={neutralIncrement} className={s.mark}>Neutral</button>
          <button onClick={badIncrement} className={s.mark}>Bad</button>
        </div>
    )
}

export default FeedbackOptions;