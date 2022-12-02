import styled from "styled-components"
import Logo from "./components/Logo"
import FlashCards from "./components/FlashCards"
import Footer from "./components/Footer"
import GlobalStyle from "./components/GlobalStyle"
import React, {useState} from "react"



export default function App() {
  
 
  return (
    <ScreenContainer>
      <GlobalStyle/>
      <Logo/>
      <FlashCards

      />
      <Footer/>
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

