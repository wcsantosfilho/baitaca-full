import React from "react";
import { CuriousPage } from "../curiousPage";

const DATA = [
    {letter:"1.", word:"Quase"},
    {letter:"2.", word:"Queijo"},
    {letter:"3.", word:"Quarto"},
    {letter:"4.", word:"Quem"},
    {letter:"5.", word:"Queima"},
    {letter:"6.", word:"Quebra"},
    {letter:"7.", word:"Quilo"},
    {letter:"8.", word:"Quente"},
    {letter:"9.", word:"Quarta"},
    {letter:"10.", word:"Querer"}
]

export const CommomCrossWordsWithQ = () => {
    return (
        <CuriousPage site="Palavragem"
            title="Aqui estão 10 palavras comuns em palavras cruzadas que começam com a letra Q"
            explanation="Essas palavras são frequentemente usadas em palavras cruzadas e têm uma combinação de letras comuns e significados específicos para o contexto do jogo."
            data={DATA} 
            canonicalLink="https://palavragem.com.br/palavras-que-comecam-com-Q"
        />
    )
}


