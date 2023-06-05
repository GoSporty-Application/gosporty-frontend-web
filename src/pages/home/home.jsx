import React, { useState, useEffect } from "react";
import FieldCard from "../../components/container/field_card";
import EstablishmentCard from "../../components/container/establishment_card";
import Navbar from "../../components/container/navbar_establishment";
import { firebase  } from '../../firebase';

const Home = () => {
  const [establishmentData, setEstablishmentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = firebase.firestore().collection("establishments");
        const snapshot = await collectionRef.get();
        const data = snapshot.docs.map((doc) => doc.data());
        setEstablishmentData(data);
        //updateFieldData(data);

      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []);

 /* const updateFieldData = (updatedData) => {
    setFieldData((prevData) => {
      const newData = prevData.map((item) => {
        if (item.id === updatedData.id) {
          return {
            ...item,
            ...updatedData
          };
        }
        return item;
      });
      return newData;
    });
  };*/

  return (
    <>
      <Navbar />
      <section className="bg-white">
        <div className="flex flex-row flex-wrap justify-evenly">
          {establishmentData.map((item, index) => (
            <EstablishmentCard data={item} key={index} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
