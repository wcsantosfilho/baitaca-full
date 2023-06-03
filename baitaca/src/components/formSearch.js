import React, { useState } from 'react';
import {
  Button,
  Form,
  FormField,
  MaskedInput,
  Select
} from 'grommet';

const defaultValue = {
  initial: '',
  numberOfLetters: '',
  others: ''
};


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
    <Form
      value={value}
      onChange={(nextValue, { touched }) => {
          setValue(nextValue);
      }}
      onReset={handleReset}
      onSubmit={handleChange}
    >
      <FormField label="Inicial" name="initial" aria-label="Letra inicial">
          <MaskedInput name="initial" 
          mask={[
              { regexp: /^\w{1}$/}
          ]}
          />
      </FormField>
      <FormField label="Qtd Letras" name="numberOfLetters" aria-label="Quantidade de letras">
          <Select name="numberOfLetters" options={['1', '2', '3', '4', '5', '6',
          '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18',
          '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'
          ]} />
      </FormField>
      <FormField label="Outras letras" name="others" aria-label="Outras letras que estão na palavra">
          <MaskedInput name="others"
          mask={[
              { regexp: /^[a-záàâãéèêíïóôõöúçñ ]*$/i}
          ]}
          />
      </FormField>
      <Button type="reset" label="Limpar" />
      <Button type="submit" label="Pesquisar" primary />
    </Form>
  );
};

export default formSearch;