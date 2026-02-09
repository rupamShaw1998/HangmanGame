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

export function Keyboard(params) {
  return (
    <div className="keyboard">
      {KEYS.map((key, i) => (
        <button
          key={i}
        >
          {key}
        </button>
      ))}
    </div>
  )
}
