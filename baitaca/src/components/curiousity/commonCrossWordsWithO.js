import React from "react";
import { CuriousPage } from "../curiousPage";

const DATA = [
    {letter:"1.", word:"Ovo"},
    {letter:"2.", word:"Ora"},
    {letter:"3.", word:"Olho"},
    {letter:"4.", word:"Onda"},
    {letter:"5.", word:"Ouro"},
    {letter:"6.", word:"Osso"},
    {letter:"7.", word:"Oração"},
    {letter:"8.", word:"Oeste"},
    {letter:"9.", word:"Orelha"},
    {letter:"10.", word:"Orar"},
    {letter:"11.", word:"Oásis"},
    {letter:"12.", word:"Outro"},
    {letter:"13.", word:"Oração"},
    {letter:"14.", word:"Ordem"},
    {letter:"15.", word:"Obra"},
    {letter:"16.", word:"Oferta"},
    {letter:"17.", word:"Ônibus"},
    {letter:"18.", word:"Origem"},
    {letter:"19.", word:"Ombro"},
    {letter:"20.", word:"Organizar"}
]

export const CommomCrossWordsWithO = () => {
    return (
        <CuriousPage site="Palavragem"
            title="Aqui estão 20 palavras comuns em palavras cruzadas que começam com a letra O"
            explanation="Essas palavras são frequentemente usadas em palavras cruzadas e têm uma combinação de letras comuns e significados específicos para o contexto do jogo."
            data={DATA} 
            canonicalLink="https://palavragem.com.br/commomCrossWordsWithO"
        />
    )
}


