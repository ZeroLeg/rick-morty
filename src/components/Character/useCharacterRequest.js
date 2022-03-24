import { useState, useEffect } from 'react';
import axios from 'axios';

export const useCharacterRequest = url => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
  
    
    
    useEffect(() => {
      const fetchData = async () => {
        await axios
          .get(url)
          .then(response => {
            setIsLoaded(true);
            setData(response.data);
          })
          .catch(error => {
            setError(error);
          })
          .finally(() => {
            setIsLoaded(false);
          });
      };
      fetchData();
    }, [url]);
  
    return { error, isLoaded, data };
  };
  