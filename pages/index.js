import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
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
              <p className="title">
                Why should we care for marine animals in danger of extinction?
              </p>
              <div className="card-content">
                <div className="content">
                  The science-backed reasons for saving endangered species are
                  important:
                  <ul>
                    <li>
                      They are a source of medicines, from antibiotics to
                      anti-cancer agents.
                    </li>
                    <li>
                      They are the first signal of serious environmental issues.
                    </li>
                    <li>
                      They help keep crops (and by proxy, humans) healthy.
                    </li>
                    <li>They boost the economy</li>
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
                    src="https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <p className="title">
                Illegal, unreported and unregulated fishing
              </p>
              <div className="card-content">
                <div className="content">
                  <p>
                    Fishing industry observers believe IUU occurs in most
                    fisheries, and accounts for up to 30% of total catches in
                    some important fisheries.
                  </p>
                  <p>
                    Almost Half of Illegal Fishing in the World Occur in
                    Indonesia: according to the report of the FAO Fisheries and
                    Aquaculture Department, illegal fishing has caused losses
                    worth US$23 billion. About 30 percent of illegal fishing in
                    the world occurred in Indonesia the illegal fishing trend
                    will have negative implications on Indonesia because
                    fisheries are one of the key food resources of the country
                  </p>
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
              <p className="title">Things we do that harm fish</p>
              <div className="card-content">
                <div className="content">
                  Did you know that you are harming the fish? If you do one of
                  the following activities, your are endangering many species:
                  <ul>
                    <li>You use a lot of plastic products</li>
                    <li>Your carbon footprint is very high</li>
                    <li>
                      You buy products whose manufacture comes from turtles,
                      sharks, whales or any type of marine species
                    </li>
                    <li>You throw cigarette butts in the street</li>
                    <li>You buy exotic fish or marine animals</li>
                    <li>You do not use biodegradable products on the beach</li>
                  </ul>
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
