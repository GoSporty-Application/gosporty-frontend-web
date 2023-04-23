import React from "react";
import FieldCard from "../../components/container/field_card";
import { data } from "../../assets/exampledata";
import Navbar from "../../components/container/navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="bg-white">
        <div className="flex flex-row flex-wrap justify-evenly">
          {data.map((item, index) => {
            return <FieldCard data={item} key={index} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
