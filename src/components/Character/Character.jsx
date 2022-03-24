import React from 'react'
import { useParams } from "react-router-dom";
import {useCharacterRequest} from './useCharacterRequest';

const Styles = {
  minHeight: '100vh'
};
const Card = {
  maxWidth: '300px'
};
export const Character = () => {
  const { characterId } = useParams();
  const {data, isLoaded, error} = useCharacterRequest(`${process.env.REACT_APP_API_URL}/character/${characterId}`);

  if (error !== null) {
    return <div>Error: {error.message}</div>;
  }
  if (isLoaded) {
    return <div>Loading...</div>;
  }

  //console.log(data.location.name);
  return (
    <div className="bg-dark d-flex align-items-center justify-content-center flex-grow-1" style={Styles}>
      <div className="card" style={Card}>
        <img src={data.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className='d-flex flex-grow-1 justify-content-between'>
            <h5 className="card-title">{data.name}</h5>

            {data.status === 'Alive' ? 
            (
              <span className='text-success'>Alive</span>
            ) : (
              <span className='text-error'>Dead</span>
            )}

          </div>
          <div>
              <p className='mb-1'>Space: {data.species}</p>
              <p className='mb-1'>Gender: {data.gender}</p>
              <p className='mb-1'>Location: {data?.location?.name}</p> 
              <p className='mb-1'>Origin: {data?.origin?.name}</p>



          </div>
        </div>
      </div>
    </div>
  )
}
