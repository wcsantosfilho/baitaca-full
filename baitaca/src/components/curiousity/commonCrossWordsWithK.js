import React from "react";
import { CuriousPage } from "../curiousPage";

const DATA = [
    {letter:"1.", word:"Kilo"},
    {letter:"2.", word:"Kung Fu"},
    {letter:"3.", word:"Ketchup"},
    {letter:"4.", word:"Kiwi"},
    {letter:"5.", word:"Kafka"},
    {letter:"6.", word:"Kefir"},
    {letter:"7.", word:"Khaki"},
    {letter:"8.", word:"Kibutz"}
]

export const CommomCrossWordsWithK = () => {
    return (
        <CuriousPage site="Palavragem"
            title="Aqui estão 8 palavras comuns em palavras cruzadas que começam com a letra K"
            explanation="Essas palavras são frequentemente usadas em palavras cruzadas, mas é importante notar que palavras iniciadas com a letra K são menos comuns nesse contexto."
            data={DATA} 
            canonicalLink="https://palavragem.com.br/commomCrossWordsWithK"
        />
    )
}


