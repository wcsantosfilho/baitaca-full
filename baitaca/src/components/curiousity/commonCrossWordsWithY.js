import React from "react";
import { CuriousPage } from "../curiousPage";

const DATA = [
    {letter:"1.", word:"Yoga"},
    {letter:"2.", word:"Yacht"},
    {letter:"3.", word:"Yen"},
    {letter:"4.", word:"Yoyo"},
    {letter:"5.", word:"Youtuber"}
]

export const CommomCrossWordsWithY = () => {
    return (
        <CuriousPage site="Palavragem"
            title="Aqui estão 5 palavras comuns em palavras cruzadas que começam com a letra Y"
            explanation="Essas palavras podem ser utilizadas em palavras cruzadas, mas é importante notar que palavras iniciadas com a letra Y são menos comuns nesse contexto. A popularidade e a frequência das palavras podem variar dependendo do tipo de palavra cruzada e do nível de dificuldade."
            data={DATA} 
            canonicalLink="https://palavragem.com.br/commomCrossWordsWithYV"
        />
    )
}
