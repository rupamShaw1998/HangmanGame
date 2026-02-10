import { useEffect, useState } from 'react'
import './App.css'
import { Drawing } from './components/Drawing';
import { Word } from './components/Word';
import { Keyboard } from './components/Keyboard';
import wordList from './assets/word-list.json';

function getWord() {
  return wordList[Math.floor(Math.random() * wordList.length)];
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord());
  const [guessedLetters, setGuessedLetters] = useState([]);

  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter));

  const isLoser = incorrectLetters.length >= 6;

  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter));

  const addGuessedLetter = (letter) => {    
    setGuessedLetters(letters => {
      if (letters.includes(letter)) return letters;
      return [...letters, letter];
    });
  };

  useEffect(() => {
    const keyboardHandler = (e) => {
      const key = e.key.toLowerCase();

      if(key === 'enter') {
        setGuessedLetters([]);
        setWordToGuess(getWord());
      }
      if(!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keydown", keyboardHandler);

    return () => {
      document.removeEventListener("keydown", keyboardHandler);
    }
  }, []);

  return (
    <>
      <h1>
        Hangman Game
      </h1>
      <div className='container'>
        <div className='result' style={{ color: isLoser ? "red" : isWinner ? "green" : "" }}>
          {isWinner && "Winner! Press enter to try again"}
          {isLoser && "You lost! Press enter to try again"}
        </div>
        <Drawing wrongGuesses={incorrectLetters.length} />
        <Word
          wordToGuess={wordToGuess}
          guessedLetters={guessedLetters}
          reveal={isLoser}
        />
        <div style={{ alignSelf: "stretch" }}>
          <Keyboard
            addGuessedLetter={addGuessedLetter}
            activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
            inactiveLetters={incorrectLetters}
            isDisabled={isLoser || isWinner}
          />
        </div>
      </div>
    </>
  )
}

export default App
