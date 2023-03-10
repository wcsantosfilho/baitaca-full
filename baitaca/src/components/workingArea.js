import React, { useState} from 'react';
import { Box, Spinner, Text } from 'grommet';
import axios from 'axios';
import FormSearch from './formSearch.js'
import DataArea from './dataArea.js';

const workingArea = () => {
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
    })
    .finally(() => {
      setLoading(false)
    })
  }

  const handleFormReset = () => {
    setactiveSearch([{word: "Search Reseted"}]);
  }


  return (
    <div className="workingArea">
      <Box flex>
        <FormSearch 
          onFormSearchChange={handleFormSearchChange}
          onFormSearchReset={handleFormReset}
        />
        {loading &&
          <Box align="center" direction="row" gap="small" pad="small">
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
          </Box>
        }
        <DataArea dataArray={activeSearch} />
      </Box>
    </div>
  );
}

export default workingArea;