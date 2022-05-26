import React from 'react'
import styled from 'styled-components'
import Box from './Box'

export default function RowEmpty() {
  return (
    <RowWrapper>
        {Array.from(Array(5)).map((_value, index) => (
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