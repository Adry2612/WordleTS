import { useState } from 'react';
import styled from 'styled-components';
import './App.css';

import Header from './components/Header.jsx';
import Wordle from './components/Wordle.js';

function App() {
  const [count, setCount] = useState(0)

  return (
    <MainContainer className="App">
      <Header />
      <Wordle />
    </MainContainer>
  )
}
const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export default App



