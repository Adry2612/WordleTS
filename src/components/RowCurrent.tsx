import React from 'react'
import styled from 'styled-components'
import Box from './Box'

interface CurrentRowProps{
    word: string;
}

export default function RowCurrent({word} :CurrentRowProps) {
  return (
    <RowWrapper>
        {word.split('').map((letter, index) => (
            <Box key={index} value={letter} status='Empty'/>
        ))}
        {Array.from(Array(5 - word.length)).map((_value, index) => (
            <Box key={index} value='' status='Empty'/>
        ))}
    </RowWrapper>
  )
}

const RowWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 2px;
`