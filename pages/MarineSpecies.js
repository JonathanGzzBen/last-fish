import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { getAllMarineSpecies } from "../services/marinespecies";

export default function MarineEspecies() {
  const [marineSpecies, setMarineSpecies] = useState([]);
  useEffect(() => {
    getAllMarineSpecies().then((marineSpeciesRes) => {
      setMarineSpecies(marineSpeciesRes);
    });
  }, []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Layout>
        {/* Top */}
        <div className="columns pb-5">
          <div className="column">
            <h1 className="title is-1" style={{ fontSize: "60px" }}>
              <strong>Endangered Fishes</strong>
            </h1>
          </div>
          <div className="column is-two-thirds" style={{ fontSize: "28px" }}>
            These species of fish are endangered
          </div>
        </div>
        {/* Middle */}
        {marineSpecies.map((marineSpecies, index) => (
          <div key={index} className="columns">
            <div className="column">
              <img src={marineSpecies.imageUrl} />
            </div>
            <div className="column is-two-thirds">
              <h2 className="title is-2">{marineSpecies.aliases}</h2>
              <h3 className="subtitle is-3">{marineSpecies.scientificName}</h3>
              <p
                className="content"
                dangerouslySetInnerHTML={{ __html: marineSpecies.biology }}
              ></p>
            </div>
          </div>
        ))}
      </Layout>
    </>
  );
}
