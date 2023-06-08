import React from "react";
import { CuriousPage } from "../curiousPage";

const DATA = [
    {letter:"1.", word:"Ir"},
    {letter:"2.", word:"Imã"},
    {letter:"3.", word:"Ideia"},
    {letter:"4.", word:"Igreja"},
    {letter:"5.", word:"Ilha"},
    {letter:"6.", word:"Início"},
    {letter:"7.", word:"Isca"},
    {letter:"8.", word:"Item"},
    {letter:"9.", word:"Irmão"},
    {letter:"10.", word:"Imagem"},
    {letter:"11.", word:"Inverno"},
    {letter:"12.", word:"Incerto"},
    {letter:"13.", word:"Imortal"},
    {letter:"14.", word:"Indício"},
    {letter:"15.", word:"Inventar"},
    {letter:"16.", word:"Infância"},
    {letter:"17.", word:"Isento"},
    {letter:"18.", word:"Inseto"},
    {letter:"19.", word:"Inflar"},
    {letter:"20.", word:"Imitar"}
]

export const CommomCrossWordsWithI = () => {
    return (
        <CuriousPage site="Palavragem"
            title="Aqui estão 20 palavras comuns em palavras cruzadas que começam com a letra I"
            explanation="Essas palavras são frequentemente usadas em palavras cruzadas e têm uma combinação de letras comuns e significados específicos para o contexto do jogo."
            data={DATA} 
            canonicalLink="https://palavragem.com.br/commomCrossWordsWithI"
        />
    )
}
