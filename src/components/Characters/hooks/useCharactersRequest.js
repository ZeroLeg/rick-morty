import { useState, useEffect } from 'react';
import axios from 'axios';

export const useCharactersRequest = url => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        await axios
          .get(url)
          .then(response => {
            setIsLoaded(true);
            setData(response.data.results);
          })
          .catch(error => {
            setError(error);
          });
      };
      fetchData();
    }, [url]);
  
    return { error, isLoaded, data };
  };
  