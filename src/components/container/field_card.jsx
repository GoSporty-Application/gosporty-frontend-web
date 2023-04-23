import React from 'react';
import PropTypes from 'prop-types';


const FieldCard = ({data}) => {
  return (
    <div className='block max-w-sm rounded-xl bg-gosporty-gray shadow-lg pb-2 m-4'>
      <img className='rounded-t-xl' src={data.img} alt='Foto de la cancha' />
      <div className='px-6 py-4 rounded'>
        <h1 className='text-xl font-bold'>{data.id}</h1>
        <div className='flex flex-row pt-2'>
          <p className='font-montserrat font-bold'>Horarios:</p><p className='pl-2'>{data.startHour+":00-"+data.endHour+":00"}</p>
        </div>
        <div className='flex flex-row'>
          <p className='font-montserrat font-bold'>Jugadores sugeridos:</p><p className='pl-2'>{data.players}</p>
        </div>
        <div className='flex flex-row mt-4 px-2 py-1 bg-gosporty-yellow rounded-xl'>
          <p className='font-montserrat font-bold text-white'>Estado:</p><p className='pl-2 text-white'>{data.status?"Activo":"Deshabilitado"}</p>
        </div>
      </div>
    </div>
  );
};


FieldCard.propTypes = {

};


export default FieldCard;
