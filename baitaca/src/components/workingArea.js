import React, { useState} from 'react';
import { Box, Spinner, Main, Text } from 'grommet';
import axios from 'axios';
import FormSearch from './formSearch.js'
import DataArea from './dataArea.js';

const workingArea = ({gridArea}) => {
  const [activeSearch, setactiveSearch] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFormSearchChange = (value) => {
    setLoading(true);
    let urlBase = process.env.REACT_APP_API_URL;
    let uri = urlBase + value.numberOfLetters + '/' + value.initial + '/numberOfLettersAndInitial'
    axios.get(uri)
    .then((response) => {
        setactiveSearch(response.data);
    })
    .catch((err) => {
      if (err.response) {
        let httpStatus = err.response.status;
        switch (httpStatus) {
          case 500:
            setactiveSearch([{word: "Server is out of service"}]);
            break;
          case 404:
            setactiveSearch([{word: err.response.data.msg}]);
            break;
          default:
            setactiveSearch([{word: "Server is out of service"}]);
        }
      } else if (err.request) {
        setactiveSearch([{word: "Unknowledge error"}])
      } else {
        setactiveSearch([{word: "Yet another greater error"}])
      }
    }) 
    .finally(() => {
      setLoading(false)
    })
  }

  const handleFormReset = () => {
    setactiveSearch([{word: "Search Reseted"}]);
  }


  return (
    <Main gridArea={gridArea} pad="small" background={{"color":"background-contrast"}}>
      <Box align="center" justify="center" pad="medium" margin="xsmall" >
        <FormSearch 
          onFormSearchChange={handleFormSearchChange}
          onFormSearchReset={handleFormReset}
        />
      </Box>
      {loading &&
        <div>
          <Spinner
            border={[
              {
                side: 'all',
                color: 'brand',
                size: 'medium',
                style: 'dotted',
              },
            ]}
          />
          <Text>Loading...</Text>
        </div>
      }
      <Box align="center" 
        justify="center" 
        flex={false} 
        margin="xsmall" 
        background={{"color":"active-text", "opacity":"medium"}}
      >
        <DataArea dataArray={activeSearch} />
      </Box>
    </Main>
  );
}

export default workingArea;