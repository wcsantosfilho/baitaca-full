import React from 'react';
import {  Box, DataTable, Grid, Grommet, Text } from 'grommet';
import { theme } from './../theme.js';


const dataArea = (props) => {
    const columns = [
        {
          property: 'word',
          header: <Text>Palavras</Text>,
          primary: true
        }]

    return (
        <Grommet theme={theme}>
        <Grid
            flex={false}
            pad="large"
            columns={[['small', 'medium']]}
            justifyContent="center"
            gap="large"
        >
            <Box align="center" pad="large">
                <DataTable columns= {columns} data={props.dataArray} />
            </Box>
        </Grid>
        </Grommet>
    )
}

export default dataArea;