import React from 'react';
import { useCharactersRequest } from './hooks/useCharactersRequest';
import { Link } from "react-router-dom";


export const Characters = () => {

  const { data, error, isLoaded } = useCharactersRequest(`${process.env.REACT_APP_API_URL}/character`);
  
  if (error !== null) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
  <div>
    <table className="table align-middle table-striped">
      <thead>
        <tr >
          <th scope="col"></th>
          <th scope="col">name</th>
          <th scope="col">status</th>
          <th scope="col">species</th>
          <th scope="col">gender</th>
          <th scope="col">origin</th>
          <th scope="col">location</th>
          <th>view</th>

        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <th><img className='img-fluid avatar' src={item.image} alt="" /></th>
            <th>{item.name}</th>
            <th>{item.status}</th>
            <th>{item.species}</th>
            <th>{item.gender}</th>
            <th>{item.origin.name}</th>
            <th>{item.location.name}</th>
            <th><Link className='btn btn-primary d-flex align-items-center'
                   to={`/characters/${item.id}`} ><span className="material-icons">visibility</span></Link></th>

          </tr>
        ))}

      </tbody>
    </table>

  </div>
  );
}