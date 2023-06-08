# baitaca - consulta palavras para ajudar cruzadistas e curiosos

## todo
[ ] Html para SEO
[X] Logo, favicon
[X] dominio
[X] certificado
[ ] SEO: https://userguiding.com/pt-br/blog/ferramentas-de-seo-gratuitas/
[ ] Amplitude
[X] Spinner
[ ] Página sobre a origem da palavra cruzada
[ ] Recover do PM2 em caso de erro/crash
[ ] Centralizar Spinner
[ ] Palavras em duas colunas(?)
[ ] Link das palavras para dicionário
[x] Consulta: Palavra com n letras, começa com 'x' e contém 'a AND b AND c AND d...'
    db.words.find({ 
        $and: [ 
            { word: { $exists: true }}, 
            { $expr: { $eq: [{ $strLenCP: '$word' }, 7] } }, // 7 letras
            { word: new RegExp('^a(?=.*b)(?=.*t).*$')} // começa com a, contem b e t em qquer ordem
            ] 
        })
[ ] Consulta: Palavra com n letras, contém 'a,b,c,d...'
    db.words.find({ 
        $and: [ 
            { word: { $exists: true }}, 
            { $expr: { $eq: [{ $strLenCP: '$word' }, 7] } }, // 7 letras
            { word: new RegExp('^(?=.*b)(?=.*t).*$')} // contem b e t em qquer ordem
            ] 
        })
[ ] Consulta: Palavra com n letras, não contém 'a,b,c,d...'
    db.words.find({ 
        $and: [ 
            { word: { $exists: true }}, 
            { $expr: { $eq: [{ $strLenCP: '$word' }, 11] } }, // 11 letras
            { word: new RegExp('^t(?!.*d)(?!.*a)(?!.*r)(?!.*z)(?!.*o)(?!.*g)(?!.*ç).*$')} // começa com t e não contem d, a, r, z, o, g, ç em qquer ordem
            ] 
        })
[ ] Consulta: Palavra com n letras, começa com s contém b AND c AND d não contém 'r,s,t'
    db.words.find({ 
        $and: [ 
            { word: { $exists: true }}, 
            { $expr: { $eq: [{ $strLenCP: '$word' }, 11] } }, // 11 letras
            { word: new RegExp('^s(?=.*b)(?!.*c)(?!.*m)(?!.*n)(?!.*o)(?!.*p).*$')} // começa com s, contem b AND c e não contem m, n, o, p em qquer ordem
            ] 
        })
