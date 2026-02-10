const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export function Keyboard({ addGuessedLetter, activeLetters, inactiveLetters, isDisabled }) {
  return (
    <div className="keyboard">
      {KEYS.map((key, i) => {
        const active = activeLetters.includes(key);
        const inactive = inactiveLetters.includes(key);
        return (
          <button
            key={i}
            onClick={() => addGuessedLetter(key)}
            className={`
              ${active ? "active" : ""}
              ${inactive ? "inactive" : ""}
            `}
            disabled={isDisabled || active || inactive}
          >
            {key}
          </button>
        )
      })}
    </div>
  )
}
