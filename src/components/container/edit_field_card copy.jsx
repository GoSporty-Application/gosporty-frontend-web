import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FieldContext } from "../../context/FieldContext";
import { data } from "../../assets/exampledata";

const EditEstablisment = ({ id }) => {
  const [startHour, setStartHour] = useState("");
  const [endHour, setEndHour] = useState("");
  const [jugadores, setJugadores] = useState(0);
  const [estado, setEstado] = useState("activo");
  const [imagen, setImagen] = useState(null);
  const navigate = useNavigate();

  const { updateFieldData } = useContext(FieldContext);

  useEffect(() => {
    const field = data.find((item) => item.id === id);
    if (field) {
      setStartHour(field.startHour.toString());
      setEndHour(field.endHour.toString());
      setJugadores(field.players);
      setEstado(field.status ? "activo" : "inactivo");
      setImagen(field.img);
    }
  }, [id]);

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
  
    const updatedCard = {
      img: imagen || require("../../assets/football-bg-1.jpg"),
      id: id,
      startHour: startHour || 4,
      endHour: endHour || 23,
      status: estado === "activo",
      players: jugadores || 12,
    };
  
    updateFieldData(updatedCard); // Utiliza la función pasada como prop
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
              />
            </div>
          </div>
          <div className="w-1/2 pl-4">
            <div className="input-container">
              <div className="input-container">
              <h1 className="text-2xl font-bold text-0D2C54"> Cancha ID: {id}</h1>
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

export default EditEstablisment;
