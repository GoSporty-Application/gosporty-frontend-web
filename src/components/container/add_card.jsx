import React, { useState } from "react";
import "../../styles/addCard.css";
import { useNavigate } from "react-router-dom";
import { data } from "../../assets/exampledata";

const AddCard = () => {
  const [startHour, setStartHour] = useState("");
  const [endHour, setEndHour] = useState("");
  const [jugadores, setJugadores] = useState(0);
  const [estado, setEstado] = useState("activo");
  const [imagen, setImagen] = useState(null);
  const navigate = useNavigate();

  const handleStartHourChange = (e) => {
    setStartHour(e.target.value);
  };

  const handleEndHourChange = (e) => {
    setEndHour(e.target.value);
  };

  const handleJugadoresChange = (e) => {
    setJugadores(parseInt(e.target.value));
  };

  const handleEstadoChange = (e) => {
    setEstado(e.target.value);
  };

  const handleImagenChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImagen(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setImagen("../../assets/football-bg-1.jpg");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCard = {
      img: imagen || require("../../assets/football-bg-1.jpg"),
      id: "Fut"+jugadores,
      startHour: startHour || 4,
      endHour: endHour || 23,
      status: estado || true,
      players: jugadores || 12,
    };

    data.push(newCard);

    setStartHour("");
    setEndHour("");
    setJugadores(0);
    setEstado("activo");
    setImagen("");

    navigate("/");
  };

  return (
    <div className="block bg-gosporty-gray shadow-lg pb-2 m-4">
      <form onSubmit={handleSubmit}>
        <div className="px-6 py-4 rounded flex">
          <div className="w-1/2 pr-4">
            <div className="input-container">
              <label htmlFor="imagen" className="font-montserrat font-bold">
                Imagen:
              </label>
              {imagen && (
                <img src={imagen} alt="Vista" className="preview-image" />
              )}
              <input
                id="imagen"
                type="file"
                accept="image/*"
                onChange={handleImagenChange}
                required
              />
            </div>
          </div>
          <div className="w-1/2 pl-4">
            <div className="input-container">
              <div className="input-container">
                <div className="flex">
                  <div className="w-1/2 pr-2">
                    <label
                      htmlFor="startHour"
                      className="font-montserrat font-bold"
                    >
                      Start Hour:
                    </label>
                    <input
                      id="startHour"
                      type="time"
                      className="pl-2"
                      value={startHour}
                      onChange={handleStartHourChange}
                      required
                    />
                  </div>
                  <div className="w-1/2 pl-2">
                    <label
                      htmlFor="endHour"
                      className="font-montserrat font-bold"
                    >
                      End Hour:
                    </label>
                    <input
                      id="endHour"
                      type="time"
                      className="pl-2"
                      value={endHour}
                      onChange={handleEndHourChange}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="input-container">
              <label htmlFor="jugadores" className="font-montserrat font-bold">
                Jugadores sugeridos:
              </label>
              <input
                id="jugadores"
                type="number"
                className="pl-2"
                value={jugadores}
                onChange={handleJugadoresChange}
                required
              />
            </div>
            <div className="input-container">
              <label htmlFor="estado" className="font-montserrat font-bold">
                Estado:
              </label>
              <select
                id="estado"
                className="pl-2"
                value={estado}
                onChange={handleEstadoChange}
                required
              >
                <option value="activo">Activo</option>
                <option value="inactivo">Inactivo</option>
              </select>
            </div>
            <div className="button-container">
              <button type="submit">Guardar</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCard;
