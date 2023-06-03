import React from "react";
import AddCard from "../../components/container/add_card";
import { data } from "../../assets/exampledata";
import Navbar from "../../components/container/navbar";

const AddField = () => {
  return (
    <>
      <Navbar />
      <section className="bg-white">
        <div className="flex flex-row flex-wrap justify-evenly">
          <AddCard data={data} />
        </div>
      </section>
    </>
  );
};

export default AddField;
