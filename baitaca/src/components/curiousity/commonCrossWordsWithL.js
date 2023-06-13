import React from "react";
import { CuriousPage } from "../curiousPage";

const DATA = [
    {letter:"1.", word:"Lua"},
    {letter:"2.", word:"Lago"},
    {letter:"3.", word:"Lobo"},
    {letter:"4.", word:"Lata"},
    {letter:"5.", word:"Lixo"},
    {letter:"6.", word:"Lírio"},
    {letter:"7.", word:"Lado"},
    {letter:"8.", word:"Leite"},
    {letter:"9.", word:"Lente"},
    {letter:"10.", word:"Lupa"},
    {letter:"11.", word:"Limão"},
    {letter:"12.", word:"Leão"},
    {letter:"13.", word:"Lâmpada"},
    {letter:"14.", word:"Lugar"},
    {letter:"15.", word:"Lápis"},
    {letter:"16.", word:"Lanche"},
    {letter:"17.", word:"Liderar"},
    {letter:"18.", word:"Longo"},
    {letter:"19.", word:"Lutar"},
    {letter:"20.", word:"Laranja"}
]

export const CommomCrossWordsWithL = () => {
    return (
        <CuriousPage site="Palavragem"
            title="Aqui estão 20 palavras comuns em palavras cruzadas que começam com a letra L"
            explanation="Essas palavras são frequentemente usadas em palavras cruzadas e têm uma combinação de letras comuns e significados específicos para o contexto do jogo."
            data={DATA} 
            canonicalLink="https://palavragem.com.br/palavras-que-comecam-com-L"
        />
    )
}

