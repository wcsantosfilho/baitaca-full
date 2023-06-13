import React from "react";
import { CuriousPage } from "../curiousPage";

const DATA = [
    {letter:"1.", word:"Rio"},
    {letter:"2.", word:"Rua"},
    {letter:"3.", word:"Rato"},
    {letter:"4.", word:"Riso"},
    {letter:"5.", word:"Rosa"},
    {letter:"6.", word:"Rápido"},
    {letter:"7.", word:"Régua"},
    {letter:"8.", word:"Renda"},
    {letter:"9.", word:"Real"},
    {letter:"10.", word:"Risco"},
    {letter:"11.", word:"Roteiro"},
    {letter:"12.", word:"Racha"},
    {letter:"13.", word:"Régua"},
    {letter:"14.", word:"Rabo"},
    {letter:"15.", word:"Rabino"},
    {letter:"16.", word:"Rampa"},
    {letter:"17.", word:"Renda"},
    {letter:"18.", word:"Resina"},
    {letter:"19.", word:"Reto"},
    {letter:"20.", word:"Rede"}
]

export const CommomCrossWordsWithR = () => {
    return (
        <CuriousPage site="Palavragem"
            title="Aqui estão 20 palavras comuns em palavras cruzadas que começam com a letra R"
            explanation="Essas palavras são frequentemente usadas em palavras cruzadas e têm uma combinação de letras comuns e significados específicos para o contexto do jogo."
            data={DATA} 
            canonicalLink="https://palavragem.com.br/palavras-que-comecam-com-R"
        />
    )
}
