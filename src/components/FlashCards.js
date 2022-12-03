import cards from "./Cards"
import FlashCard from "./FlashCard"
import React, {useState} from "react"

export default function FlashCards({counter, setCounter}) {

    return (
        <>
            {cards.map((item) => <FlashCard counter={counter} setCounter={setCounter} pergunta={item} />)}
        </>
    )
}
