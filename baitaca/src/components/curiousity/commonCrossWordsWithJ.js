import React from "react";
import { CuriousPage } from "../curiousPage";

const DATA = [
    {letter:"1.", word:"Jogo"},
    {letter:"2.", word:"Joia"},
    {letter:"3.", word:"Janela"},
    {letter:"4.", word:"Jantar"},
    {letter:"5.", word:"Jovem"},
    {letter:"6.", word:"Jornal"},
    {letter:"7.", word:"Jardim"},
    {letter:"8.", word:"Jato"},
    {letter:"9.", word:"Justo"},
    {letter:"10.", word:"Jurar"},
    {letter:"11.", word:"Jazida"},
    {letter:"12.", word:"Jaula"},
    {letter:"13.", word:"Jóia"},
    {letter:"14.", word:"Jingle"},
    {letter:"15.", word:"Juiz"},
    {letter:"16.", word:"Jangada"},
    {letter:"17.", word:"Jaula"},
    {letter:"18.", word:"Jovial"},
    {letter:"19.", word:"Jardineiro"},
    {letter:"20.", word:"Júri"}
]

export const CommomCrossWordsWithJ = () => {
    return (
        <CuriousPage site="Palavragem"
            title="Aqui estão 20 palavras comuns em palavras cruzadas que começam com a letra J"
            explanation="Essas palavras são frequentemente usadas em palavras cruzadas e têm uma combinação de letras comuns e significados específicos para o contexto do jogo."
            data={DATA} 
            canonicalLink="https://palavragem.com.br/palavras-que-comecam-com-J"
        />
    )
}


