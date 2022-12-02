import styled from "styled-components"
import setaPlay from "../assets/img/seta_play.png"
import cards from "./cards"
import setaVirar from "../assets/img/seta_virar.png"

export default function flashCards({enabled, setEnabled}) {
       
    function FlashCard(props) {
        let indice = cards.indexOf(props.pergunta)

        function exibirPergunta(){
            if(enabled === true){
                setEnabled(false)
            } else{
                setEnabled(true)
            }
        } 

        return (
            <>
            <ClosedCards visibilidade={enabled}>
                <p>
                    Pergunta {indice + 1}
                </p>
                <img onClick={exibirPergunta} src={setaPlay} />
            </ClosedCards>

            <OpenCard visibilidade={!enabled}>
                <p>
                    {props.pergunta.question}
                </p>
                <img src={setaVirar}/>
            </OpenCard>
            </>
        )
    }
    console.log(enabled)

    return (
        <>
        { cards.map((item) => <FlashCard pergunta={item}/>) }
        </>
    )
}

{/* styled components */ }

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
    color: #333333;
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
  opacity: ${props => !props.visibilidade ? 1 : 0}
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
  }
`