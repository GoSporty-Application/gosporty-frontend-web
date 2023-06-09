import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditCard from "../../components/container/edit_field_card";
import Navbar from "../../components/container/navbar_establishment";
import { firebase   } from "../../firebase";

const EditField = () => {
  const { idEstablishment, idField } = useParams();
  const [fieldData, setFieldData] = useState(null);

  useEffect(() => {
    const fetchFieldData = async () => {
      try {
        const fieldSnapshot = await firebase
          .firestore()
          .collection("establishments")
          .doc(idEstablishment)
          .collection("fields")
          .doc(idField)
          .get();

        if (fieldSnapshot.exists) {
          const fieldData = fieldSnapshot.data();
          setFieldData(fieldData);
        } else {
          console.log("No se encontró la información del campo");
        }
      } catch (error) {
        console.error("Error al obtener la información del campo:", error);
      }
    };

    fetchFieldData();
  }, [idEstablishment, idField]);

  return (
    <>
      <Navbar />
      <section className="bg-white">
        <div className="flex flex-row flex-wrap justify-evenly">
          {fieldData && <EditCard fieldData={fieldData} />}
        </div>
      </section>
    </>
  );
};

export default EditField;