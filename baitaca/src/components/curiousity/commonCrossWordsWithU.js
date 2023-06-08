import React from "react";
import { CuriousPage } from "../curiousPage";

const DATA = [
    {letter:"1.", word:"União"},
    {letter:"2.", word:"Uva"},
    {letter:"3.", word:"Uso"},
    {letter:"4.", word:"Um"},
    {letter:"5.", word:"Urtiga"},
    {letter:"6.", word:"Uísque"},
    {letter:"7.", word:"Ursa"},
    {letter:"8.", word:"Urso"},
    {letter:"9.", word:"Urubu"},
    {letter:"10.", word:"Urgente"},
    {letter:"11.", word:"Uivar"},
    {letter:"12.", word:"Utopia"},
    {letter:"13.", word:"Uísque"},
    {letter:"14.", word:"Umidade"},
    {letter:"15.", word:"Urucum"},
    {letter:"16.", word:"Usina"},
    {letter:"17.", word:"Utensílio"},
    {letter:"18.", word:"Urna"},
    {letter:"19.", word:"Unha"},
    {letter:"20.", word:"Unir"}
]

export const CommomCrossWordsWithU = () => {
    return (
        <CuriousPage site="Palavragem"
            title="Aqui estão 20 palavras comuns em palavras cruzadas que começam com a letra U"
            explanation="Essas palavras são frequentemente usadas em palavras cruzadas e têm uma combinação de letras comuns e significados específicos para o contexto do jogo."
            data={DATA} 
            canonicalLink="https://palavragem.com.br/commomCrossWordsWithU"
        />
    )
}



