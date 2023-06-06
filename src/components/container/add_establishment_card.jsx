import React, { useState } from "react";
import "../../styles/addCard.css";
import { useNavigate } from "react-router-dom";
import { firebase, firestore } from "../../firebase";
import { useParams } from "react-router-dom";
import axios from 'axios';

const AddEstablishmentCard = ({ updateFieldData }) => {
  const { id: establishmentId} = useParams();

  const db = firebase.firestore();

  const [name, setName] = useState('');
  const [startHour, setStartHour] = useState("");
  const [endHour, setEndHour] = useState("");
  const [journey, setJourney] = useState('');
  const [address, setAddress] = useState("");
  const [imagen, setImagen] = useState(null);

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const navigate = useNavigate();

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleStartHourChange = (e) => {
    setStartHour(e.target.value);
    handleJourneyConcatenation()
  };

  const handleEndHourChange = (e) => {
    setEndHour(e.target.value);
    handleJourneyConcatenation()
  };

  const handleJourneyConcatenation = () => {
    const newJourney = startHour.concat('-', endHour);
    setJourney(newJourney);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
    geocodeAddress();
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

  const geocodeAddress = async () => {
    try {
      //const sanitizedAddress = sanitizeAddress(address);

      const response = await axios.get(
        //`https://maps.googleapis.com/maps/api/geocode/json?address=${sanitizedAddress}&key=AIzaSyD90h4T-ATpwXyR5-8YijCzgbDNKBrw6Hk`
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyD90h4T-ATpwXyR5-8YijCzgbDNKBrw6Hk`
      );
  
      const { results } = response.data;
  
      if (results.length > 0) {
        const { lat, lng } = results[0].geometry.location;
        setLatitude(lat);
        setLongitude(lng);
      } else {
        console.error('No se encontraron resultados para la dirección especificada.');
      }
    } catch (error) {
      console.error('Error al obtener la latitud y longitud:', error);
    }
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newCard = {
      name : name || "Cancha",
      journey: journey || "16:00-23:00",
      photo: imagen || "../../assets/football-bg-1.jpg",
      address: address || "Cali - Colombia",
      rating: "5.0",
      lat: latitude,
      long: longitude,
    };

    try{
      const fieldsCollectionRef = firebase.firestore()
      .collection("establishments")
      

      const docRef = await fieldsCollectionRef.add(newCard);

      const newCardId = docRef.id;

      newCard.id = newCardId;

      await docRef.update(newCard);
      
  
    setImagen("");
  
    const snapshot = await fieldsCollectionRef.get();
    const data = snapshot.docs.map((doc) => doc.data());
  
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
          <div className="input-container">
            <label htmlFor="address" className="font-montserrat font-bold">
              Dirección:
            </label>
            <input
              id="address"
              type="text"
              className="pl-2"
              value={address}
              onChange={handleAddressChange}
              required
            />
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

export default AddEstablishmentCard;
