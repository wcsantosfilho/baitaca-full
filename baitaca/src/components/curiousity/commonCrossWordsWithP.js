import React from "react";
import { CuriousPage } from "../curiousPage";

const DATA = [
    {letter:"1.", word:"Pão"},
    {letter:"2.", word:"Peso"},
    {letter:"3.", word:"Pato"},
    {letter:"4.", word:"Pode"},
    {letter:"5.", word:"Porta"},
    {letter:"6.", word:"Pula"},
    {letter:"7.", word:"Pente"},
    {letter:"8.", word:"Piso"},
    {letter:"9.", word:"Povo"},
    {letter:"10.", word:"Plano"},
    {letter:"11.", word:"Palma"},
    {letter:"12.", word:"Penteado"},
    {letter:"13.", word:"Passo"},
    {letter:"14.", word:"Poder"},
    {letter:"15.", word:"Penteado"},
    {letter:"16.", word:"Palavra"},
    {letter:"17.", word:"Pote"},
    {letter:"18.", word:"Ponte"},
    {letter:"19.", word:"Pinta"},
    {letter:"20.", word:"Papel"}
]

export const CommomCrossWordsWithP = () => {
    return (
        <CuriousPage site="Palavragem"
            title="Aqui estão 20 palavras comuns em palavras cruzadas que começam com a letra P"
            explanation="Essas palavras são frequentemente usadas em palavras cruzadas e têm uma combinação de letras comuns e significados específicos para o contexto do jogo."
            data={DATA} 
            canonicalLink="https://palavragem.com.br/commomCrossWordsWithP"
        />
    )
}


