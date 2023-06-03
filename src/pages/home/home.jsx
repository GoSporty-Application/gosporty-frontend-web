import React, { useState } from "react";
import FieldCard from "../../components/container/field_card";
import Navbar from "../../components/container/navbar";
import { data } from "../../assets/exampledata";

const Home = () => {
  const [fieldData, setFieldData] = useState(data);

  // Función para actualizar los datos del campo
  const updateFieldData = (updatedData) => {
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
  };

  return (
    <>
      <Navbar />
      <section className="bg-white">
        <div className="flex flex-row flex-wrap justify-evenly">
          {fieldData.map((item, index) => (
            <FieldCard data={item} key={index} updateFieldData={updateFieldData} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
