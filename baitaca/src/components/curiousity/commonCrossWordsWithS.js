import React from "react";
import { CuriousPage } from "../curiousPage";

const DATA = [
    {letter:"1.", word:"Sol"},
    {letter:"2.", word:"Sal"},
    {letter:"3.", word:"Sopa"},
    {letter:"4.", word:"Saco"},
    {letter:"5.", word:"Sino"},
    {letter:"6.", word:"Sede"},
    {letter:"7.", word:"Sino"},
    {letter:"8.", word:"Seda"},
    {letter:"9.", word:"Sair"},
    {letter:"10.", word:"Sombra"},
    {letter:"11.", word:"Selo"},
    {letter:"12.", word:"Sair"},
    {letter:"13.", word:"Sorriso"},
    {letter:"14.", word:"Saber"},
    {letter:"15.", word:"Sabor"},
    {letter:"16.", word:"Seguro"},
    {letter:"17.", word:"Sentar"},
    {letter:"18.", word:"Silêncio"},
    {letter:"19.", word:"Sinal"},
    {letter:"20.", word:"Sábado"}
]

export const CommomCrossWordsWithS = () => {
    return (
        <CuriousPage site="Palavragem"
            title="Aqui estão 20 palavras comuns em palavras cruzadas que começam com a letra S"
            explanation="Essas palavras são frequentemente usadas em palavras cruzadas e têm uma combinação de letras comuns e significados específicos para o contexto do jogo."
            data={DATA} 
            canonicalLink="https://palavragem.com.br/commomCrossWordsWithS"
        />
    )
}


