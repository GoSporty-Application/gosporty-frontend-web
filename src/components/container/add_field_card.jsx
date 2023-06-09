import React, { useState } from "react";
import "../../styles/addCard.css";
import { useNavigate } from "react-router-dom";
import { firebase, firestore } from "../../firebase";
import { useParams } from "react-router-dom";

const AddCard = ({ updateFieldData }) => {
  const { id: establishmentId} = useParams();

  const db = firebase.firestore();

  const [name, setName] = useState('');
  const [jugadores, setJugadores] = useState(0);
  const [estado, setEstado] = useState("activo");
  const [imagen, setImagen] = useState(null);
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleJugadoresChange = (e) => {
    const value = e.target.value;
    setJugadores(value);
  };

  const handleEstadoChange = (e) => {
    const value = e.target.value === 'activo'; // Convertir 'activo' a true y 'inactivo' a false
    setEstado(value);
  };

  const handleImagenChange = (e) => {
    const file = e.target.files[0];
  
    if (file) {
      // Subir la imagen a Firebase Storage
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(file.name);
      fileRef.put(file)
        .then((snapshot) => {
          // Obtener la URL de descarga de la imagen subida
          return snapshot.ref.getDownloadURL();
        })
        .then((downloadURL) => {
          setImagen(downloadURL);
        })
        .catch((error) => {
          console.error('Error al subir la imagen:', error);
        });
    } else {
      setImagen("../../assets/football-bg-1.jpg");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newCard = {
      name : name || "Cancha",
      photo: imagen || "../../assets/football-bg-1.jpg",
      available: estado === "activo",
      size: jugadores || "12",
    };

    try{
      const fieldsCollectionRef = firebase.firestore()
      .collection("establishments")
      .doc(establishmentId)
      .collection("fields");

    const docRef = await fieldsCollectionRef.add(newCard);

    const newCardId = docRef.id;

    newCard.id = newCardId;

    await docRef.update(newCard);
  
    
  
    setJugadores(0);
    setEstado("activo");
    setImagen("");
  
    //const snapshot = await fieldsCollectionRef.get();
    //const data = snapshot.docs.map((doc) => doc.data());
    // updateFieldData(data);
  
    navigate("/");

    }catch (error) {
      console.error('Error al guardar la información:', error);
    }
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
              <label htmlFor="name" className="font-montserrat font-bold">
                Nombre:
              </label>
              <input
                id="name"
                type="text"
                className="pl-2"
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>

            <div className="input-container">
              <label htmlFor="jugadores" className="font-montserrat font-bold">
                Jugadores sugeridos:
              </label>
              <input
                id="jugadores"
                type="text"
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
