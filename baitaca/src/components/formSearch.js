import React, { useState } from 'react';
import {
  Box,
  Button,
  Form,
  FormField,
  MaskedInput,
  Select,
  Text
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
    <Box fill
      direction="row-responsive"
      justify="center"
      align="center"
      pad="xlarge"
      background="dark-2"
      gap="medium"
      >
      <Text>--formSearch.js--</Text>
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
  );
};

export default formSearch;