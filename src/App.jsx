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

  const wrongGuesses = guessedLetters.filter(letter => !wordToGuess.includes(letter)).length;

  const addGuessedLetter = (letter) => {    
    if(guessedLetters.includes(letter)) return;
  
    setGuessedLetters(letters => [...letters, letter]);
  };

  useEffect(() => {
    const keyboardHandler = (e) => {
      const key = e.key;
      if(!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", keyboardHandler);

    return () => {
      document.removeEventListener("keypress", keyboardHandler);
    }
  }, []);

  return (
    <>
      <h1>
        Hangman Game
      </h1>
      <div className='container'>
        <div className='result'>
          win/lose
        </div>
        <Drawing wrongGuesses={wrongGuesses} />
        <Word
          wordToGuess={wordToGuess}
          guessedLetters={guessedLetters}
        />
        <div style={{ alignSelf: "stretch" }}>
          <Keyboard addGuessedLetter={addGuessedLetter} />
        </div>
      </div>
    </>
  )
}

export default App
