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
        <Box
            direction="row-responsive"
            justify="center"
            align="center"
            pad="large"
            background="dark-1"
            gap="medium"
            flex overflow="auto"
            >
            <Text>--dataArea.js--</Text>
            <DataTable columns= {columns} data={props.dataArray} />
        </Box>
    )
}

export default dataArea;