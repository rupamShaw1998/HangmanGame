export function Word(params) {
  const wordToGuess = "test";
  const guessedLetters = ['e', 'r', 't'];

  return (
    <div className="word">
      {wordToGuess.split("").map((letter, i) => (
        <span
          key={i}
        >
          <span style={{ visibility: guessedLetters.includes(letter) ? "visible" : "hidden" }}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}
