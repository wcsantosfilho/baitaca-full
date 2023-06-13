import React from "react";
import { CuriousPage } from "../curiousPage";

const DATA = [
    {letter: "1.", word: "Dado"},
    {letter: "2.", word: "Dama"},
    {letter: "3.", word: "Dente"},
    {letter: "4.", word: "Dólar"},
    {letter: "5.", word: "Duna"},
    {letter: "6.", word: "Dado"},
    {letter: "7.", word: "Desejo"},
    {letter: "8.", word: "Dica"},
    {letter: "9.", word: "Diferença"},
    {letter: "10.", word: "Direção"},
    {letter: "11.", word: "Divisão"},
    {letter: "12.", word: "Doce"},
    {letter: "13.", word: "Dor"},
    {letter: "14.", word: "Dote"},
    {letter: "15.", word: "Dreno"},
    {letter: "16.", word: "Dúvida"},
    {letter: "17.", word: "Duração"},
    {letter: "18.", word: "Dívida"},
    {letter: "19.", word: "Descanso"},
    {letter: "20.", word: "Delito"}
]

export const CommomCrossWordsWithD = () => {
    return (
        <CuriousPage site="Palavragem"
            title="Aqui estão 20 palavras comuns em palavras cruzadas que começam com a letra D"
            explanation="Essas palavras são frequentemente usadas em palavras cruzadas e têm uma combinação de letras comuns e significados específicos para o contexto do jogo."
            data={DATA} 
            canonicalLink="https://palavragem.com.br/palavras-que-comecam-com-D"
        />
    )
}



