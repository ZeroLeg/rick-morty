import { useState } from 'react';


export const useCharactersRequest = () => {
    const [page, setPage] = useState(1);

    const paginateNext = async () => {
      setPage(page+1);
    }

    const paginatePrev = async () => {
      setPage(page-1);
    }
  
    return { page, paginateNext, paginatePrev };
};