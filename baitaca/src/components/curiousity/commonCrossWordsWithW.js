import React from "react";
import { CuriousPage } from "../curiousPage";

const DATA = [
    {letter:"1.", word:"Web"},
    {letter:"2.", word:"Waffle"},
    {letter:"3.", word:"Wok"},
    {letter:"4.", word:"Whisky"},
    {letter:"5.", word:"Wi-Fi"}
]

export const CommomCrossWordsWithW = () => {
    return (
        <CuriousPage site="Palavragem"
            title="Aqui estão 5 palavras comuns em palavras cruzadas que começam com a letra W"
            explanation="Palavras comuns em palavras cruzadas que começam com a letra W são relativamente raras. No entanto, aqui estão algumas opções."
            data={DATA} 
            canonicalLink="https://palavragem.com.br/palavras-que-comecam-com-W"
        />
    )
}
