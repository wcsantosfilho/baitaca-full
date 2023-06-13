import React from "react";
import { CuriousPage } from "../curiousPage";

const DATA = [
    {letter:"1.", word:"Hora"},
    {letter:"2.", word:"Homem"},
    {letter:"3.", word:"Hotel"},
    {letter:"4.", word:"Hino"},
    {letter:"5.", word:"Honra"},
    {letter:"6.", word:"Humor"},
    {letter:"7.", word:"Herói"},
    {letter:"8.", word:"Haver"},
    {letter:"9.", word:"Hábito"},
    {letter:"10.", word:"Harpa"},
    {letter:"11.", word:"Haste"},
    {letter:"12.", word:"Hélice"},
    {letter:"13.", word:"Higiene"},
    {letter:"14.", word:"Horta"},
    {letter:"15.", word:"Habilidade"},
    {letter:"16.", word:"Hálito"},
    {letter:"17.", word:"Homenagem"},
    {letter:"18.", word:"Honesto"},
    {letter:"19.", word:"Hortelã"},
    {letter:"20.", word:"Habilidade"}
]

export const CommomCrossWordsWithH = () => {
    return (
        <CuriousPage site="Palavragem"
            title="Aqui estão 20 palavras comuns em palavras cruzadas que começam com a letra H"
            explanation="Essas palavras são frequentemente usadas em palavras cruzadas e têm uma combinação de letras comuns e significados específicos para o contexto do jogo."
            data={DATA} 
            canonicalLink="https://palavragem.com.br/palavras-que-comecam-com-H"
        />
    )
}
