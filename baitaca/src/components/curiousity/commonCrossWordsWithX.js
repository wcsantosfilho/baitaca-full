import React from "react";
import { CuriousPage } from "../curiousPage";

const DATA = [
    {letter:"1.", word:"Xícara"},
    {letter:"2.", word:"Xarope"},
    {letter:"3.", word:"Xale"},
    {letter:"4.", word:"Xampu"},
    {letter:"5.", word:"Xerife"},
    {letter:"6.", word:"Xisto"}
]

export const CommomCrossWordsWithX = () => {
    return (
        <CuriousPage site="Palavragem"
            title="Aqui estão 6 palavras comuns em palavras cruzadas que começam com a letra X"
            explanation="Palavras comuns em palavras cruzadas que começam com a letra X são bastante limitadas. No entanto, aqui estão algumas opções:"
            data={DATA} 
            canonicalLink="https://palavragem.com.br/palavras-que-comecam-com-X"
        />
    )
}



