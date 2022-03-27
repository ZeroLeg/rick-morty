import { useState, useEffect } from 'react';

export const useCharacterRequest = url => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
      const postData = async () => {
        await fetch(url)
          .then(response => response.json())
          .then(data => setData(data))
          .catch((error) => setError(error.message));
      }

      setIsLoaded(true);
      postData();
      setIsLoaded(false);

    }, [url]);
  
    return { error, isLoaded, data };
  };
  