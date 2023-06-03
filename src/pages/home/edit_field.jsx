import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EditCard from "../../components/container/edit_field_card";
import Navbar from "../../components/container/navbar";
import { data } from "../../assets/exampledata";

const EditField = () => {
  const { id } = useParams();
  const [fieldData, setFieldData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const field = data.find((item) => item.id === id);
    if (field) {
      setFieldData(field);
    }
  }, [id]);

  return (
    <>
      <Navbar />
      <section className="bg-white">
        <div className="flex flex-row flex-wrap justify-evenly">
          {fieldData && <EditCard id={fieldData.id} data={fieldData} updateFieldData={setFieldData} navigate={navigate} />}

        </div>
      </section>
    </>
  );
};

export default EditField;

