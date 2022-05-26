import React from 'react'
import styled from 'styled-components';
import { BoxStatus } from '../types';
import Box from './Box';

/* Defining the props that the Row component will take. */
interface RowProps{
    word: string;
    solution: string;
}

export default function Row({word, solution}: RowProps) {
    /**
     * If the letter is in the solution, and it's in the correct position, return 'Correct'. If
     * it is in the solution, but in the wrong position, return 'WrongPosition'. If the letter is
     * not in the solution, return 'Incorrect'
     * @param {number} position - The position of the letter in the solution.
     * @param {string} letter - The letter that the user guessed
     * @returns A BoxStatus
     */
    const checkLetter = (position: number, letter: string): BoxStatus => {
        if (solution.includes(letter)) {
            if (letter === solution[position]) {
                return 'Correct'
            } else {
                return 'WrongPosition'
            }
        } else {
            return "Incorrect";
        }
    }

    return (
            <RowWrapper className="row">
                { Array.from(Array(5)).map((_val, index) => (
                    <Box key={index} value={word[index]} status={checkLetter(index, word[index])} />
                ))}
            </RowWrapper>

    )
}

const RowWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 2px;
`