const ScoreEntry = () => {
  const name = 'John Doe';
  const score = 0;

  return (
    <>
      <div>
        Name: {name}
      </div>
      <div>
        Score: {score}
      </div>
    </>
  )
}

const Scoreboard = () => {
  return (
    <>
      <div>
        Scoreboard
      </div>
      <ScoreEntry />
    </>
    
  )
}

export default Scoreboard;
