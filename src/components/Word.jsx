export function Word({ wordToGuess, guessedLetters, reveal }) {

  return (
    <div className="word">
      {wordToGuess.split("").map((letter, i) => (
        <span
          key={i}
        >
          <span style={{
            visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
            color:  !guessedLetters.includes(letter) && reveal ? "red" : "black"
          }}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}
