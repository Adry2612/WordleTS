import React, { useEffect, useState } from 'react'
import { useWindow } from '../hooks/useWindow';
import { GameStatus } from '../types.d';

import Row from './Row'
import RowCurrent from './RowCurrent'
import RowEmpty from './RowEmpty'

const keys = ['Q','W','E','R','T','Y','U','I','O','A','S','D','F','G','H','J','K','L','Ñ','Z','X','C','V','B','N','M'];

export default function Wordle() {
    const [diaryWord, setDiaryWord] = useState<string>("");
    const [turn, setTurn] = useState<number>(1);
    const [currentWord, setCurrentWord] = useState<string>("");
    const [completeWords, setCompleteWords] = useState<string>("");
    const [playStatus, setPlayStatus] = useState<GameStatus>(GameStatus.Playing);

    useEffect(() => {
        setDiaryWord('Hola');
    })

    useWindow('keydown', function(event: KeyboardEvent){
      const letter = event.key.toUpperCase(); 

      if (event.key === 'uppercase' && currentWord.length > 0){
        return false;
      }

      if (event.key === 'enter'){
        return false;
      }

      if (currentWord.length > 5){
        return false;
      }

      if (keys.includes(letter)){
        onInput(letter);
        return;
      }
    });

    /**
     * When the user types a letter, add that letter to the current word.
     * @param {string} letter - string - this is the letter that the user has typed.
     */
    const onInput = (letter: string) => {
      const newWord = currentWord + letter;
      setCurrentWord(newWord);
    }
    
  
  return (
    <>
        <Row word="sabio" solution={diaryWord}></Row>
        <Row word="sabio" solution={diaryWord}></Row>
        <Row word="sabio" solution={diaryWord}></Row>
        <RowCurrent word={currentWord} />
        <RowEmpty />
    </>
    
  )
}
