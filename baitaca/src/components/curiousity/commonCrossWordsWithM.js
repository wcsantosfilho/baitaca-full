import React from "react";
import { CuriousPage } from "../curiousPage";

const DATA = [
    {letter:"1.", word:"Mão"},
    {letter:"2.", word:"Mato"},
    {letter:"3.", word:"Mar"},
    {letter:"4.", word:"Mesa"},
    {letter:"5.", word:"Mês"},
    {letter:"6.", word:"Muro"},
    {letter:"7.", word:"Mala"},
    {letter:"8.", word:"Maçã"},
    {letter:"9.", word:"Mimo"},
    {letter:"10.", word:"Mito"},
    {letter:"11.", word:"Mala"},
    {letter:"12.", word:"Menino"},
    {letter:"13.", word:"Meio"},
    {letter:"14.", word:"Mergulho"},
    {letter:"15.", word:"Motivo"},
    {letter:"16.", word:"Música"},
    {letter:"17.", word:"Mulher"},
    {letter:"18.", word:"Mergulhar"},
    {letter:"19.", word:"Mergulhador"},
    {letter:"20.", word:"Mordida"}
]

export const CommomCrossWordsWithM = () => {
    return (
        <CuriousPage site="Palavragem"
            title="Aqui estão 20 palavras comuns em palavras cruzadas que começam com a letra M"
            explanation="Essas palavras são frequentemente usadas em palavras cruzadas e têm uma combinação de letras comuns e significados específicos para o contexto do jogo."
            data={DATA} 
            canonicalLink="https://palavragem.com.br/commomCrossWordsWithM"
        />
    )
}


