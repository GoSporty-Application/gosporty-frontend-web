import React, { useState } from "react";
import { firebase } from "../../firebase";
import { useNavigate, useParams } from "react-router-dom";

const EditCard = ({ fieldData }) => {
  const navigate = useNavigate();
  const { idEstablishment, idField } = useParams();

  const [name, setName] = useState(fieldData.name);
  const [jugadores, setJugadores] = useState(fieldData.size);
  const [estado, setEstado] = useState(fieldData.available);
  const [imagen, setImagen] = useState(fieldData.img);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleJugadoresChange = (event) => {
    setJugadores(event.target.value);
  };

  const handleEstadoChange = (event) => {
    const value = event.target.value === "activo"; // Convertir 'activo' a true y 'inactivo' a false
    setEstado(value);
  };

  const handleImagenChange = (event) => {
    const file = event.target.files[0];
    setImagen(file);
  };

  const handleUpload = async () => {
    if (imagen) {
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(imagen.name);
      const uploadTask = fileRef.put(imagen);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          console.error("Error al subir la imagen:", error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            updateFieldData(downloadURL);
          });
        }
      );
    } else {
      updateFieldData(fieldData.img);
    }
  };

  const updateFieldData = async (imageUrl) => {
    try {
      await firebase
        .firestore()
        .collection("establishments")
        .doc(idEstablishment)
        .collection("fields")
        .doc(idField)
        .update({
          name: name,
          size: jugadores,
          available: estado,
          img: imageUrl,
        });

      navigate("/");
    } catch (error) {
      console.error("Error al guardar la información:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await handleUpload();
    } catch (error) {
      console.error("Error al subir la imagen:", error);
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
                value={estado ? "activo" : "inactivo"}
                onChange={handleEstadoChange}
                required
              >
                <option value="activo">Activo</option>
                <option value="inactivo">Inactivo</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-4">
          <button
            type="submit"
            className="bg-gosporty-green text-white font-bold py-2 px-4 rounded"
            disabled={uploadProgress > 0}
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCard;
