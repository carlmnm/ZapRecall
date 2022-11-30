import styled from "styled-components"

export default function footer(){
    return(
        <FooterConcluidos>
            <p>
                0/4 CONCLUÍDOS
            </p>
            {/*<ContainerBotoes></ContainerBotoes>*/}
        </FooterConcluidos>
    )
}

{/* styled components */}

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

{/*const ContainerBotoes = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;

`*/}