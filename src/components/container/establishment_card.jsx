import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { MdOutlineRemoveRedEye } from "react-icons/md"


const EstablishmentCard = ({data }) => {
  return (
    <div className="block max-w-sm rounded-xl bg-gosporty-gray shadow-lg pb-2 m-4">
      <img className="rounded-t-xl" src={data.photo} alt="Foto de la cancha" />
      <div className="px-6 py-4 rounded">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">{data.name}</h1>
          <Link to={`/fields/${data.id}`}>
            <button className="rounded-full bg-gosporty-blue w-12 h-12 flex items-center justify-center ml-auto">
              <MdOutlineRemoveRedEye className="text-white text-3xl" />
            </button>
          </Link>
        </div>
        <div className="flex flex-row pt-2">
          <p className="font-montserrat font-bold">Horarios:</p>
          <p className="pl-2">{data.journey }</p>
        </div>
        <div className="flex flex-row">
          <p className="font-montserrat font-bold">Dirección:</p>
          <p className="pl-2">{data.address}</p>
        </div>
        <div className="flex flex-row">
          <p className="font-montserrat font-bold">Calificación:</p>
          <p className="pl-2">{data.rating}</p>
        </div>
        <div className="flex flex-row">
        <img className="rounded-t-xl" src={data.logo} />
        </div>
      </div>
    </div>
  );
};

EstablishmentCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    startHour: PropTypes.string.isRequired,
    endHour: PropTypes.string.isRequired,
    players: PropTypes.number.isRequired,
    status: PropTypes.bool.isRequired,
  }).isRequired,
};

export default EstablishmentCard;