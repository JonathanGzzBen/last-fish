import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { getAllMarineSpecies } from "../services/marinespecies";

export default function MarineEspecies() {
  const [marineSpecies, setMarineSpecies] = useState([]);
  const [marineSpeciesRows, setMarineSpeciesRows] = useState([]);
  useEffect(() => {
    let rows = [];
    getAllMarineSpecies().then((marineSpeciesRes) => {
      setMarineSpecies(marineSpeciesRes);
      console.log(marineSpeciesRes);
      let row = [];
      marineSpeciesRes.forEach((s) => {
        row.push(s);
        if (row.length >= 3) {
          rows.push(row);
          row = [];
        }
      });
    });
    setMarineSpeciesRows(rows);
    console.log(marineSpecies);
    console.log("Rows", rows);
    console.log("Marine Species Rows", marineSpeciesRows);
  }, []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Layout>
        {/* Top */}
        <div className="columns">
          <div className="column">
            <h1 className="title is-1" style={{ fontSize: "60px" }}>
              <strong>Endangered Fishes</strong>
            </h1>
          </div>
          <div className="column is-two-thirds" style={{ fontSize: "28px" }}>
            These species of fish are endangered
          </div>
        </div>
        {marineSpeciesRows.map((marineSpeciesRow, index) => (
          <div className="columns" key={index}>
            {marineSpeciesRow.map((marineSpecies, index) => (
              <div className="column" key={index}>
                <div key={marineSpecies.scientificName} className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img
                        src={marineSpecies.imageUrl}
                        alt="Image image"
                        width="100px"
                        height="100px"
                      />
                    </figure>
                  </div>
                  <p className="title">{marineSpecies.aliases}</p>
                  <div className="card-content">
                    <div
                      className="content"
                      dangerouslySetInnerHTML={{
                        __html: marineSpecies.biology,
                      }}
                    ></div>
                    {/* <div className="content">{marineSpecies.biology}</div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </Layout>
    </>
  );
}
