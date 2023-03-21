import React from 'react';
import {  Box, DataTable, Text } from 'grommet';

const dataArea = (props) => {
    const columns = [
        {
          property: 'word',
          header: <Text>Palavras</Text>,
          primary: true
        }]

    return (
        <Box fixed
            direction="row-responsive"
            justify="center"
            align="center"
            pad="large"
            background="dark-1"
            gap="medium"
            >
            <Text>--dataArea.js--</Text>
            <DataTable columns= {columns} data={props.dataArray} />
        </Box>
    )
}

export default dataArea;