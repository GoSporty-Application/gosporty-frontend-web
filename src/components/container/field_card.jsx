import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

const FieldCard = ({data}) => {
  return (
    <div className="block max-w-sm rounded-xl bg-gosporty-gray shadow-lg pb-2 m-4">
      <img className="rounded-t-xl" src={data.img} alt="Foto de la cancha" />
      <div className="px-6 py-4 rounded">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">{data.id}</h1>
          <Link to={`/editField/${data.id}`}>
            <button className="rounded-full bg-gosporty-blue w-12 h-12 flex items-center justify-center ml-auto">
              <FaEdit className="text-white text-3xl" />
            </button>
          </Link>
        </div>
        <div className="flex flex-row pt-2">
          <p className="font-montserrat font-bold">Horarios:</p>
          <p className="pl-2">{data.startHour +" - " + data.endHour }</p>
        </div>
        <div className="flex flex-row">
          <p className="font-montserrat font-bold">Jugadores sugeridos:</p>
          <p className="pl-2">{data.players}</p>
        </div>
        <div className="flex flex-row mt-4 px-2 py-1 bg-gosporty-yellow rounded-xl">
          <p className="font-montserrat font-bold text-white">Estado:</p>
          <p className="pl-2 text-white">{data.status ? "Activo" : "Deshabilitado"}</p>
        </div>
      </div>
    </div>
  );
};

FieldCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FieldCard;