import React from "react";
import { CuriousPage } from "../curiousPage";

const DATA = [
    {letter: "1.", word: "Casa"},
    {letter: "2.", word: "Cão"},
    {letter: "3.", word: "Café"},
    {letter: "4.", word: "Cor"},
    {letter: "5.", word: "Cama"},
    {letter: "6.", word: "Copo"},
    {letter: "7.", word: "Canto"},
    {letter: "8.", word: "Cabeça"},
    {letter: "9.", word: "Cidade"},
    {letter: "10.", word: "Correr"},
    {letter: "11.", word: "Corte"},
    {letter: "12.", word: "Círculo"},
    {letter: "13.", word: "Cruz"},
    {letter: "14.", word: "Chuva"},
    {letter: "15.", word: "Caminho"},
    {letter: "16.", word: "Cozinha"},
    {letter: "17.", word: "Colher"},
    {letter: "18.", word: "Carta"},
    {letter: "19.", word: "Cavalo"},
    {letter: "20.", word: "Calma"}
]

export const CommomCrossWordsWithC = () => {
    return (
        <CuriousPage site="Palavragem"
            title="Aqui estão 20 palavras comuns em palavras cruzadas que começam com a letra C"
            explanation="Essas palavras são frequentemente usadas em palavras cruzadas e têm uma combinação de letras comuns e significados específicos para o contexto do jogo."
            data={DATA} 
        />
    )
}
