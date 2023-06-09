import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

const FieldCard = ({data }) => {
  return (
    <div className="block max-w-sm rounded-xl bg-gosporty-gray shadow-lg pb-2 m-4">
      <img className="rounded-t-xl" src={data.img} alt="Foto de la cancha" />
      <div className="px-6 py-4 rounded">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">{data.name}</h1>
          <Link to={`/editField/${data.idEstablishment}/${data.idField}`}>
            <button className="rounded-full bg-gosporty-blue w-12 h-12 flex items-center justify-center ml-auto">
              <FaEdit className="text-white text-3xl" />
            </button>
          </Link>
        </div>
        <div className="flex flex-row">
          <p className="font-montserrat font-bold">Jugadores sugeridos:</p>
          <p className="pl-2">{data.size}</p>
        </div>
        <div className="flex flex-row mt-4 px-2 py-1 bg-gosporty-yellow rounded-xl">
          <p className="font-montserrat font-bold text-white">Estado:</p>
          <p className="pl-2 text-white">{data.available ? "Activo" : "Deshabilitado"}</p>
        </div>
      </div>
    </div>
  );
};

FieldCard.propTypes = {
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

export default FieldCard;