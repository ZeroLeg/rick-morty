import { useState, useEffect } from 'react';
import axios from 'axios';

export const useCharactersRequest = url => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [pagination, setPagination] = useState(2);


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

    const fetchData = async () => {
      const paginationUri = `${url}/?page=${pagination}`;
      await axios
        .get(paginationUri)
        .then(response => {
          setIsLoaded(true);
          setData(response.data.results);
        })
        .catch(error => {
          setError(error);
        });
    };
  
    return { error, isLoaded, data, fetchData, pagination, setPagination };
  };
  