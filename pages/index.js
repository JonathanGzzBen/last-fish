import Head from "next/head";
import Layout from "../components/Layout";
import { useEffect } from "react";
import { getAllMarineSpecies } from "../services/marinespecies";

export default function Home() {
  useEffect(() => {
    getAllMarineSpecies().then((marinespecies) => console.log(marinespecies));
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
              <strong>Hack The Ocean</strong>
            </h1>
          </div>
          <div className="column is-two-thirds" style={{ fontSize: "28px" }}>
            Hack the ocean is an iniciative powered by Microsoft where front and
            backend developers come together to find a solution or generate
            awareness about the state of the oceans and living beings within it.
          </div>
        </div>
        {/* Middle */}
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src="https://images.unsplash.com/photo-1488188840666-e2308741a62f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <p className="title">Why should we care about the ocean?</p>
              <div className="card-content">
                <div className="content">
                  The ocean produces over half of the world&apos;s oxygen and
                  absorbs 50 times more carbon dioxide than our atmosphere.
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src="https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <p className="title">What can we do to protect it?</p>
              <div className="card-content">
                <div className="content">
                  <ul>
                    <li>Preserve water</li>
                    <li>Reduce pollutants</li>
                    <li>Reduce vehicle pollution</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src="https://images.unsplash.com/photo-1513040260736-63dd0617fb66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1434&q=80"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="container is-fluid">
          <div className="columns">
            <div className="column"></div>
            <div className="column is-four-fifths">
              <h2 className="title is-2">Last Fish</h2>
              <p>
                We developed this web application where we compiled several
                endangered fish species, so everyone can see for themselves the
                harm we have caused for the ecosystem.
              </p>
            </div>
            <div className="column"></div>
          </div>
        </div>
      </Layout>
    </>
  );
}
