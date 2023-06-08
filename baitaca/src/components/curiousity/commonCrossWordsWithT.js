import React from "react";
import { CuriousPage } from "../curiousPage";

const DATA = [
    {letter:"1.", word:"Tempo"},
    {letter:"2.", word:"Teto"},
    {letter:"3.", word:"Tudo"},
    {letter:"4.", word:"Três"},
    {letter:"5.", word:"Tinta"},
    {letter:"6.", word:"Toco"},
    {letter:"7.", word:"Tio"},
    {letter:"8.", word:"Todo"},
    {letter:"9.", word:"Tapa"},
    {letter:"10.", word:"Tom"},
    {letter:"11.", word:"Tela"},
    {letter:"12.", word:"Tarefa"},
    {letter:"13.", word:"Toque"},
    {letter:"14.", word:"Teste"},
    {letter:"15.", word:"Troca"},
    {letter:"16.", word:"Terno"},
    {letter:"17.", word:"Trilha"},
    {letter:"18.", word:"Trama"},
    {letter:"19.", word:"Trevo"},
    {letter:"20.", word:"Tesouro"}
]

export const CommomCrossWordsWithT = () => {
    return (
        <CuriousPage site="Palavragem"
            title="Aqui estão 20 palavras comuns em palavras cruzadas que começam com a letra T"
            explanation="Essas palavras são frequentemente usadas em palavras cruzadas e têm uma combinação de letras comuns e significados específicos para o contexto do jogo."
            data={DATA} 
            canonicalLink="https://palavragem.com.br/commomCrossWordsWithT"
        />
    )
}


