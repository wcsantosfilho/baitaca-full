import React, { useState } from 'react';
import { Grommet } from 'grommet';
import { theme } from '../theme.js'

import {
  Box,
  Button,
  Form,
  FormField,
  MaskedInput,
  Select
} from 'grommet';

const defaultValue = {
  initial: '',
  numberOfLetters: ''
};

const suggestions = ['a', 'b', 'c', 'd'];

export const formSearch = (props) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    props.onFormSearchChange(value);
    };

  const handleReset = () => {
    setValue(defaultValue)
    props.onFormSearchReset(defaultValue);
  }

  return (
    <Grommet theme={theme}>
        <Box fill align="center" justify="center">
        <Box width="medium">
            <Form
            value={value}
            onChange={(nextValue, { touched }) => {
                setValue(nextValue);
            }}
            onReset={handleReset}
            onSubmit={handleChange}
            >
                <FormField label="Inicial" name="initial">
                    <MaskedInput name="initial" suggestions={suggestions} 
                    mask={[
                        { regexp: /^\w{1}$/}
                    ]}
                    />
                </FormField>
                <FormField label="Qtd Letras" name="numberOfLetters">
                    <Select name="numberOfLetters" options={['1', '2', '3', '4', '5', '6',
                    '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18',
                    '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'
                    ]} />
                </FormField>
                <Box direction="row" justify="between" margin={{ top: 'medium' }}>
                    <Button type="reset" label="Limpar" />
                    <Button type="submit" label="Pesquisar" primary />
                </Box>
            </Form>
        </Box>
        </Box>
    </Grommet>
  );
};

export default formSearch;