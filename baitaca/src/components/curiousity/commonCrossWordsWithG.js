import React from "react";
import { CuriousPage } from "../curiousPage";

const DATA = [
    {letter:"1.", word:"Gato"},
    {letter:"2.", word:"Gelo"},
    {letter:"3.", word:"Gol"},
    {letter:"4.", word:"Girar"},
    {letter:"5.", word:"Gema"},
    {letter:"6.", word:"Grama"},
    {letter:"7.", word:"Grito"},
    {letter:"8.", word:"Gole"},
    {letter:"9.", word:"Garra"},
    {letter:"10.", word:"Grão"},
    {letter:"11.", word:"Grupo"},
    {letter:"12.", word:"Guarda"},
    {letter:"13.", word:"Gesto"},
    {letter:"14.", word:"Gente"},
    {letter:"15.", word:"Guerra"},
    {letter:"16.", word:"Goleiro"},
    {letter:"17.", word:"Gás"},
    {letter:"18.", word:"Goleada"},
    {letter:"19.", word:"Graça"},
    {letter:"20.", word:"Gelo"}
]

export const CommomCrossWordsWithG = () => {
    return (
        <CuriousPage site="Palavragem"
            title="Aqui estão 20 palavras comuns em palavras cruzadas que começam com a letra G"
            explanation="Essas palavras são frequentemente usadas em palavras cruzadas e têm uma combinação de letras comuns e significados específicos para o contexto do jogo."
            data={DATA} 
            canonicalLink="https://palavragem.com.br/palavras-que-comecam-com-G"
        />
    )
}



