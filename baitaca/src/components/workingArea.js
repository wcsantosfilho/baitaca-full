import React, { useState} from 'react';
import { Box } from 'grommet';
import axios from 'axios';
import FormSearch from './formSearch.js'
import DataArea from './dataArea.js';

const workingArea = () => {
  const [activeSearch, setactiveSearch] = useState([{ word: "xurupita"}, { word: "jamelão"}, { word: "camelo"}]);

  const handleFormSearchChange = (value) => {
    console.log(process.env.NODE_ENV, process.env.REACT_APP_API_URL);
    let urlBase = process.env.REACT_APP_API_URL;
    let uri = urlBase + value.numberOfLetters + '/' + value.initial + '/numberOfLettersAndInitial'
    axios.get(uri)
    .then((response) => {
        setactiveSearch(response.data);
    })
    .catch((err) => {
        console.log('response.status: ',err.response.status)
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
        <DataArea dataArray={activeSearch} />
      </Box>
    </div>
  );
}

export default workingArea;