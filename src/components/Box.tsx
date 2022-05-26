import React from 'react';
import styled from 'styled-components';

import { BoxStatus } from '../types';

interface BoxProps {
    value: string;
    status: BoxStatus;
}
export default function Box({value, status}:BoxProps) {
  return (
    <LetterWrapper value={value} status={status}> { value } </LetterWrapper>
  )
}

const LetterWrapper = styled.div<BoxProps>`
	width: 60px;
	height: 60px;	
	background-color: ${(props) => {
		if (props.status === "Correct") return "#6BAA64";
		if (props.status === "WrongPosition") return "#CAB458";
		if (props.status === "Incorrect") return "#787C7E";
		if (props.status === "Empty") return "#FFF";
	}};
	border: 2px solid ${(props) => {
		if (props.value != '' && props.status == "Empty") return "#787C7E";
		if (props.status === "Correct") return "#6BAA64";
		if (props.status === "WrongPosition") return "#CAB458";
		if (props.status === "Incorrect") return "#787C7E";
		if (props.status === "Empty") return "#D4D4D3";
	}};
	color: ${(props) => {
		if (props.status != "Empty") return "#fff";
		else return "#000";
	}};
	font-size: 32px;
	display: flex;
	text-align: center;
	margin: 2px;
	font-weight: bold;
	text-transform: uppercase;
	display: flex;
	align-items: center;
	justify-content: center;
`