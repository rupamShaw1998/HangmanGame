import { useState } from 'react'
import './App.css'
import { Drawing } from './components/Drawing';
import { Word } from './components/Word';
import { Keyboard } from './components/Keyboard';

function App() {

  const [guessedWord, setGuessedWord] = useState();

  return (
    <>
      <h1>
        Hangman Game
      </h1>
      <div className='container'>
        <div className='result'>
          win/lose
        </div>
        <Drawing />
        <Word />
        <Keyboard />
      </div>
    </>
  )
}

export default App
