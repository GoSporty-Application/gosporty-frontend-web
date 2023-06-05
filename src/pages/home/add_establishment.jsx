import React from "react";
import AddEstablishmentCard from "../../components/container/add_establishment_card";
import { data } from "../../assets/exampledata";
import Navbar from "../../components/container/navbar_establishment";

const AddEstablishment = () => {
  return (
    <>
      <Navbar />
      <section className="bg-white">
        <div className="flex flex-row flex-wrap justify-evenly">
          <AddEstablishmentCard data={data} />
        </div>
      </section>
    </>
  );
};

export default AddEstablishment;
