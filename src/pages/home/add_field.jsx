import React from "react";
import AddCard from "../../components/container/add_field_card";
import { data } from "../../assets/exampledata";
import Navbar from "../../components/container/navbar_establishment";

const AddField = () => {
  return (
    <>
      <Navbar />
      <section className="bg-white">
        <div className="flex flex-row flex-wrap justify-evenly">
          <AddCard />
        </div>
      </section>
    </>
  );
};

export default AddField;
