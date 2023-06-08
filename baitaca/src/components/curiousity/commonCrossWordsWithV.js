import React from "react";
import { CuriousPage } from "../curiousPage";

const DATA = [
    {letter:"1.", word:"Vida"},
    {letter:"2.", word:"Voz"},
    {letter:"3.", word:"Vaso"},
    {letter:"4.", word:"Vela"},
    {letter:"5.", word:"Vento"},
    {letter:"6.", word:"Vida"},
    {letter:"7.", word:"Vale"},
    {letter:"8.", word:"Vaca"},
    {letter:"9.", word:"Ver"},
    {letter:"10.", word:"Voo"},
    {letter:"11.", word:"Vaso"},
    {letter:"12.", word:"Vento"},
    {letter:"13.", word:"Viver"},
    {letter:"14.", word:"Vez"},
    {letter:"15.", word:"Visita"},
    {letter:"16.", word:"Vestir"},
    {letter:"17.", word:"Vento"},
    {letter:"18.", word:"Vírgula"},
    {letter:"19.", word:"Viga"},
    {letter:"20.", word:"Vizinho"}
]

export const CommomCrossWordsWithV = () => {
    return (
        <CuriousPage site="Palavragem"
            title="Aqui estão 20 palavras comuns em palavras cruzadas que começam com a letra V"
            explanation="Essas palavras são frequentemente usadas em palavras cruzadas e têm uma combinação de letras comuns e significados específicos para o contexto do jogo."
            data={DATA} 
            canonicalLink="https://palavragem.com.br/commomCrossWordsWithV"
        />
    )
}

