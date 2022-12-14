import erro from "../assets/img/icone_erro.png"
import quase from "../assets/img/icone_quase.png"
import certo from "../assets/img/icone_certo.png"
import styled from "styled-components"
import setaPlay from "../assets/img/seta_play.png"
import cards from "./Cards"
import setaVirar from "../assets/img/seta_virar.png"
import React, { useState } from "react"

export default function FlashCard(props) {
    const {counter, setCounter} = props
    let indice = cards.indexOf(props.pergunta)
    const [enabled, setEnabled] = useState(true)
    const [showAnswer, setShowAnswer] = useState(true)
    const [closedCardColor, setClosedCardColor] = useState("#333333")
    const [decoration, setDecoration] = useState("")
    const [final, setFinal] = useState(false)
    const [icon, setIcon] = useState()
    const [dataTestIcon, setDataTestIcon] = useState("")

    function exibirPergunta() {
        setEnabled(false)
    }

    function exibirResposta() {
        setShowAnswer(false)
    }

    function naoLembrei() {
        setEnabled(true)
        setClosedCardColor("#FF3030")
        setDecoration("line-through")
        setFinal(true)
        setIcon(erro)
        setDataTestIcon("no-icon")
        setCounter((counter) => counter + 1)

    }

    function quaseNao() {
        setEnabled(true)
        setClosedCardColor("#FF922E")
        setDecoration("line-through")
        setFinal(true)
        setIcon(quase)
        setDataTestIcon("partial-icon")
        setCounter((counter) => counter + 1)
    }

    function zap() {
        setEnabled(true)
        setClosedCardColor("#2FBE34")
        setDecoration("line-through")
        setFinal(true)
        setIcon(certo)
        setDataTestIcon("zap-icon")
        setCounter((counter) => counter + 1)
    }
    console.log(counter)

    return (
        <>
            <ClosedCards data-test="flashcard" visibilidade={enabled} cor={closedCardColor} decoracao={decoration} icone={icon}>
                <p data-test="flashcard-text">
                    Pergunta {indice + 1}
                </p>
                <IconePlay finalizado={final}>
                    <img data-test="play-btn" onClick={exibirPergunta} src={setaPlay} alt="seta do play" />
                </IconePlay>
                <IconeFinalizado finalizado={final}>
                    <img data-test={dataTestIcon} src={icon} />
                </IconeFinalizado>
            </ClosedCards>

            <OpenCard visibilidade={!enabled} setinha={showAnswer}>
                <p data-test="flashcard-text">
                    {showAnswer ? props.pergunta.question : props.pergunta.answer}
                </p>
                <img data-test="turn-btn" onClick={exibirResposta} src={setaVirar} alt="setinha redonda" />

                <ContainerBotoes setinha={showAnswer}>
                    <BotaoVermelho data-test="no-btn" onClick={naoLembrei}><p>N??o<br />lembrei</p></BotaoVermelho>

                    <BotaoAmarelo data-test="partial-btn" onClick={quaseNao}><p>Quase n??o lembrei</p></BotaoAmarelo>

                    <BotaoVerde data-test="zap-btn" onClick={zap}><p>Zap!</p></BotaoVerde>
                </ContainerBotoes>
            </OpenCard>
        </>
    )
}



const ClosedCards = styled.div`
  width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: ${props => props.visibilidade ? "flex" : "none"};
  align-items: center;
  justify-content: space-between;
  p {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${props => props.cor};
    text-decoration: ${props => props.decoracao};
  }
`
const OpenCard = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: ${props => props.visibilidade ? "flex" : "none"};
  flex-direction: column;
  justify-content: space-between;
  p{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
  }
  img{
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: ${props => props.setinha ? "show" : "none"};
    width: 30px;
  }
`
const ContainerBotoes = styled.div`
  width: 270px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  color: #FFFFFF;
  //background: blue;
  border-radius: 5px;
  //border: 1px solid blue;
  padding:5px;

  display: ${props => !props.setinha ? "show" : "none"};
`
const BotaoVermelho = styled.button`
  width: 85px;
  height: 37px;
  background-color: #ff3030;
  border-radius: 5px;
  p{
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #ffffff;
    display: flex;
    align-items: center;
    text-align: center;
  }
  display: flex;
  justify-content: center;
`
const BotaoAmarelo = styled.button`
    width: 85px;
    height: 37px;
    background-color: #ff922e;
    border-radius: 5px;
    display: flex;
    align-items: center;
    text-align: center;
    p{
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: #ffffff;
        display: flex;
        align-items: center;
        text-align: center;
    }

`
const BotaoVerde = styled.button`
    width: 85px;
    height: 37px;
    background-color: #2fbe34;
    border-radius: 5px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    p{
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: #ffffff;
        display: flex;
        align-items: center;
        text-align: center;
    }
`
const IconeFinalizado = styled.div`
    display: ${props => props.finalizado ? "show" : "none"};
`
const IconePlay = styled.div`
    display: ${props => !props.finalizado ? "show" : "none"};
`
const FooterConcluidos = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
`