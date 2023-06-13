import React from "react";
import { CuriousPage } from "../curiousPage";

const DATA = [
    {letter:"1.", word:"Nó"},
    {letter:"2.", word:"Nada"},
    {letter:"3.", word:"Nave"},
    {letter:"4.", word:"Névoa"},
    {letter:"5.", word:"Nós"},
    {letter:"6.", word:"Nata"},
    {letter:"7.", word:"Nuvem"},
    {letter:"8.", word:"Nível"},
    {letter:"9.", word:"Nove"},
    {letter:"10.", word:"Nado"},
    {letter:"11.", word:"Nono"},
    {letter:"12.", word:"Nervo"},
    {letter:"13.", word:"Nota"},
    {letter:"14.", word:"Naval"},
    {letter:"15.", word:"Nascer"},
    {letter:"16.", word:"Norte"},
    {letter:"17.", word:"Nível"},
    {letter:"18.", word:"Nítido"},
    {letter:"19.", word:"Novato"},
    {letter:"20.", word:"Noite"}
]

export const CommomCrossWordsWithN = () => {
    return (
        <CuriousPage site="Palavragem"
            title="Aqui estão 20 palavras comuns em palavras cruzadas que começam com a letra N"
            explanation="Essas palavras são frequentemente usadas em palavras cruzadas e têm uma combinação de letras comuns e significados específicos para o contexto do jogo."
            data={DATA} 
            canonicalLink="https://palavragem.com.br/palavras-que-comecam-com-N"
        />
    )
}


