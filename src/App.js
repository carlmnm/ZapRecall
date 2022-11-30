import styled from "styled-components"
import Logo from "./components/Logo"
import FlashCards from "./components/FlashCards"
import Footer from "./components/Footer"


export default function App() {
  return (
    <ScreenContainer>
      <Logo/>
      <FlashCards/>
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

