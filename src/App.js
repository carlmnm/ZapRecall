import styled from "styled-components"
import Footer from "./components/Footer"
import Logo from "./components/Logo"
import FlashCards from "./components/FlashCards"
import GlobalStyle from "./components/GlobalStyle"
import React, {useState} from "react"
import FlashCard from "./components/FlashCard"

export default function App() {
  const [counter, setCounter] = useState(0)
  return (
    <ScreenContainer>
      <GlobalStyle/>
      <Logo/>
      <FlashCards
        counter={counter}
        setCounter={setCounter}
      />
      <Footer
        counter={counter}
      />
    </ScreenContainer>
  )
}

{/* styled components */}

const ScreenContainer = styled.div`
  background-color: #FB6B6B;
  width: 375px;
  min-height: 667px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`

