import React from "react";
import { CuriousPage } from "../curiousPage";

const DATA = [
    {letter: "1.", word: "Ego"},
    {letter: "2.", word: "Era"},
    {letter: "3.", word: "Eixo"},
    {letter: "4.", word: "Eixo"},
    {letter: "5.", word: "Ele"},
    {letter: "6.", word: "Ensaio"},
    {letter: "7.", word: "Enigma"},
    {letter: "8.", word: "Erro"},
    {letter: "9.", word: "Esfera"},
    {letter: "10.", word: "Esporte"},
    {letter: "11.", word: "Estrela"},
    {letter: "12.", word: "Estudo"},
    {letter: "13.", word: "Exame"},
    {letter: "14.", word: "Exato"},
    {letter: "15.", word: "Extremo"},
    {letter: "16.", word: "Euforia"},
    {letter: "17.", word: "Evidência"},
    {letter: "18.", word: "Eterno"},
    {letter: "19.", word: "Esforço"},
    {letter: "20.", word: "Espelho"}
]

export const CommomCrossWordsWithE = () => {
    return (
        <CuriousPage site="Palavragem"
            title="Aqui estão 20 palavras comuns em palavras cruzadas que começam com a letra E"
            explanation="Essas palavras são frequentemente usadas em palavras cruzadas e têm uma combinação de letras comuns e significados específicos para o contexto do jogo."
            data={DATA} 
            canonicalLink="https://palavragem.com.br/palavras-que-comecam-com-E"
        />
    )
}


