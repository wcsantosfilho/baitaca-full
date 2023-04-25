import React from 'react';
import {  DataTable, Text } from 'grommet';

const dataArea = (props) => {
    const columns = [
        {
          property: 'word',
          header: <Text>Palavras</Text>,
          primary: true
        }]

    return (
        <DataTable 
            step={50} 
            paginate={false}
            columns= {columns} 
            data={props.dataArray} 
        />
    )
}

export default dataArea;