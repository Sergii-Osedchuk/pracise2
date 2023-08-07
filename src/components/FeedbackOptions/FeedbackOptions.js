function FeedbackOptions({goodIncrement, neutralIncrement, badIncrement}) {
    return (
        <>
          <h1>Please leave feedback</h1>
          <button onClick={goodIncrement}>Good</button>
          <button onClick={neutralIncrement}>Neutral</button>
          <button onClick={badIncrement}>Bad</button>
        </>
    )
}

export default FeedbackOptions;