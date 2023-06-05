import React, { useState, useEffect } from "react";
import FieldCard from "../../components/container/field_card";
import Navbar from "../../components/container/navbar_field";
import { firebase  } from '../../firebase';
import { useParams } from "react-router-dom";

const Field = () => {
  const [fieldData, setFieldData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = firebase
          .firestore()
          .collection("establishments")
          .doc(id)
          .collection("fields");
        const snapshot = await collectionRef.get();
        const data = snapshot.docs.map((doc) => doc.data());
        setFieldData(data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, [id]);

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
          {fieldData.map((item, index) => (
            <FieldCard data={item} key={index} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Field;
