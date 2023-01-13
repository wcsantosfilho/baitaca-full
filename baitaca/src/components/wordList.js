import React from 'react';

const wordList = (props) => {
    if (Object.prototype.toString.call(props.lista) === '[object Array]') {
        return (
            <>
                <ul className="wordList">
                    {props.lista.map( (item, index) => (
                        <li key={index}>
                            {item.word}
                        </li>
                    ))}
                </ul>
            </>
        )
    } else {
        return (
            <h3>Nenhuma palavra encontrada!</h3>
        )
    }
}

export default wordList;