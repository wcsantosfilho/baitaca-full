import React from "react";
import { CuriousPage } from "../curiousPage";

const DATA = [
    {letter: "1.", word: "Anagrama"},
    {letter: "2.", word: "Antônimo"},
    {letter: "3.", word: "Acróstico"},
    {letter: "4.", word: "Adjetivo"},
    {letter: "5.", word: "Advérbio"},
    {letter: "6.", word: "Artigo"},
    {letter: "7.", word: "Aliteração"},
    {letter: "8.", word: "Assonância"},
    {letter: "9.", word: "Atônito"},
    {letter: "10.", word: "Adivinha"},
    {letter: "11.", word: "Alocução"},
    {letter: "12.", word: "Anáfora"},
    {letter: "13.", word: "Axioma"},
    {letter: "14.", word: "Anedota"},
    {letter: "15.", word: "Acróstico"},
    {letter: "16.", word: "Alusão"},
    {letter: "17.", word: "Abreviação"},
    {letter: "18.", word: "Antítese"},
    {letter: "19.", word: "Anunciar"},
    {letter: "20.", word: "Alegoria"}
]

export const CommomCrossWordsWithA = () => {
    return (
        <CuriousPage site="Palavragem"
            title="Aqui estão 20 palavras comuns em palavras cruzadas que começam com a letra A"
            explanation="Essas palavras são frequentemente usadas em palavras cruzadas e têm uma combinação de letras comuns e significados específicos para o contexto do jogo."
            data={DATA} 
            canonicalLink="https://palavragem.com.br/commomCrossWordsWithA"
        />
    )
}

