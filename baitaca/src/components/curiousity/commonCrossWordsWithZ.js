import React from "react";
import { CuriousPage } from "../curiousPage";

const DATA = [
    {letter:"1.", word:"Zero"},
    {letter:"2.", word:"Zebra"},
    {letter:"3.", word:"Zelo"},
    {letter:"4.", word:"Zangado"},
    {letter:"5.", word:"Zíper"},
    {letter:"6.", word:"Zona"},
    {letter:"7.", word:"Zumbido"},
    {letter:"8.", word:"Zelo"},
    {letter:"9.", word:"Zombar"},
    {letter:"10.", word:"Zelador"},
    {letter:"11.", word:"Zombaria"},
    {letter:"12.", word:"Zigue-zague"},
    {letter:"13.", word:"Zombaria"},
    {letter:"14.", word:"Zumbido"},
    {letter:"15.", word:"Zeloso"},
    {letter:"16.", word:"Zangar"},
    {letter:"17.", word:"Zombaria"},
    {letter:"18.", word:"Zangão"},
    {letter:"19.", word:"Zinco"},
    {letter:"20.", word:"Zelote"}
]

export const CommomCrossWordsWithZ = () => {
    return (
        <CuriousPage site="Palavragem"
            title="Aqui estão 20 palavras comuns em palavras cruzadas que começam com a letra Z"
            explanation="Essas palavras são frequentemente usadas em palavras cruzadas e têm uma combinação de letras comuns e significados específicos para o contexto do jogo."
            data={DATA} 
            canonicalLink="https://palavragem.com.br/commomCrossWordsWithZ"
        />
    )
}


