import React from "react";
import { CuriousPage } from "../curiousPage";

const DATA = [
    {letter: "1.", word: "Fato"},
    {letter: "2.", word: "Fila"},
    {letter: "3.", word: "Fogo"},
    {letter: "4.", word: "Frio"},
    {letter: "5.", word: "Fada"},
    {letter: "6.", word: "Falar"},
    {letter: "7.", word: "Feliz"},
    {letter: "8.", word: "Festa"},
    {letter: "9.", word: "Filho"},
    {letter: "10.", word: "Flor"},
    {letter: "11.", word: "Forma"},
    {letter: "12.", word: "Fuga"},
    {letter: "13.", word: "Fumaça"},
    {letter: "14.", word: "Furar"},
    {letter: "15.", word: "Futebol"},
    {letter: "16.", word: "Fúria"},
    {letter: "17.", word: "Fusão"},
    {letter: "18.", word: "Fácil"},
    {letter: "19.", word: "Fechar"},
    {letter: "20.", word: "Fecho"}
]

export const CommomCrossWordsWithF = () => {
    return (
        <CuriousPage site="Palavragem"
            title="Aqui estão 20 palavras comuns em palavras cruzadas que começam com a letra F"
            explanation="Essas palavras são frequentemente usadas em palavras cruzadas e têm uma combinação de letras comuns e significados específicos para o contexto do jogo."
            data={DATA} 
            canonicalLink="https://palavragem.com.br/commomCrossWordsWithF"
        />
    )
}


