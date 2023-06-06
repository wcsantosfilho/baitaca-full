import React from "react";
import { CuriousPage } from "../curiousPage";

const DATA = [
    {letter: "1.", word: "Banco"},
    {letter: "2.", word: "Barco"},
    {letter: "3.", word: "Branco"},
    {letter: "4.", word: "Briga"},
    {letter: "5.", word: "Bala"},
    {letter: "6.", word: "Bife"},
    {letter: "7.", word: "Bolo"},
    {letter: "8.", word: "Balaio"},
    {letter: "9.", word: "Bússola"},
    {letter: "10.", word: "Bilhete"},
    {letter: "11.", word: "Borracha"},
    {letter: "12.", word: "Boi"},
    {letter: "13.", word: "Bola"},
    {letter: "14.", word: "Bebê"},
    {letter: "15.", word: "Buraco"},
    {letter: "16.", word: "Banda"},
    {letter: "17.", word: "Bispo"},
    {letter: "18.", word: "Borrão"},
    {letter: "19.", word: "Búfalo"},
    {letter: "20.", word: "Botão"}
]

export const CommomCrossWordsWithB = () => {
    return (
        <CuriousPage site="Palavragem"
            title="Aqui estão 20 palavras comuns em palavras cruzadas que começam com a letra B"
            explanation="Essas palavras são frequentemente usadas em palavras cruzadas e têm uma combinação de letras comuns e significados específicos para o contexto do jogo."
            data={DATA} 
        />
    )
}




