import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from 'next/image';
function Portfolio() {
  return (
    <div>
      <Head>
        <title>Vekser-Portfolio Page</title>
        <meta name="description" content="Generated by Vekser app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className="section">
        <div className="container first-text">
          <div className="row text-center">
            <h1 className="b-5">Let's take the plunge together</h1>
          </div>
          <div className="row mt-5">
            <div className="col-md-4 ">
              <div className="card p-4 divsize">
                <div className="text-center">
                  <Image
                    src="/images/renesecent-logo.webp"
                    className="img-fluid my-button"
                    alt="renescent"
                    width={500}
                    height={500}
                    priority 
                  />
                  <h5 className="b-5 hovereffect1">On Demand Logistics</h5>
                  <p className="b-5 hovereffect">
                    Connecting customers with background-checked independent
                    drivers and storage providers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card p-4 divsize">
                <div className="text-center">
                  <Image
                    src="/images/properties-logo.webp"
                    className="img-fluid my-button logo"
                    alt="prroperties"
                    width={500}
                    height={500}
                    priority 
                  />
                  <h5 className="b-5 hovereffect1">
                    Real estate,property,rentals and management
                  </h5>
                  <p className="b-5 hovereffect">
                    Best place to find ready-to-move residential and commercial
                    properties.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card p-4 divsize">
                <div className="text-center">
                  <Image
                    src="/images/Algorip-logo.webp"
                    className="img-fluid my-button"
                    alt="Algorip"
                    width={500}
                    height={500}
                    priority 
                  />
                  <h5 className="b-5 hovereffect1">
                    Software,Internet,Technology
                  </h5>
                  <p className="b-5 hovereffect">
                    All-in-one platform that proactive automates and manages
                    your complete online presence.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4 ">
              <div className="card p-4 divsize1">
                <div className="text-center">
                  <Image
                    src="/images/reloship-logo.webp"
                    className="img-fluid my-button"
                    alt="reloship"
                    width={500}
                    height={500}
                    priority 
                  />
                  <h5 className="b-5 hovereffect1">
                    Global Logistics and Supply Chain
                  </h5>
                  <p className="b-5 hovereffect">Founded 2007 -2010 Exit.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card p-4 divsize1">
                <div className="text-center">
                  <Image
                    src="/images/Dadadino-logo.webp"
                    className="img-fluid my-button logo"
                    alt="dandino"
                    width={500}
                    height={500}
                    priority 
                  />
                  <h5 className="b-5 hovereffect1">
                    High-end men's and Women's Apparel
                  </h5>
                  <p className="b-5 hovereffect">Founded 2007 -2010 Exit.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card p-4">
                <div className="text-center divsize2">
                  <Image
                    src="/images/sparoll-logo.webp"
                    className="img-fluid my-button"
                    alt="sparoll"
                    width={500}
                    height={500}
                    priority 
                  />
                  <h5 className="b-5 hovereffect1">On-demand spa and beauty</h5>
                  <p className="b-5 hovereffect">Founded 2007 -2010 Exit.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <div className="card p-4">
                <div className="text-center divsize3 ">
                  <Image
                    src="/images/takestar-logo.webp"
                    className="img-fluid my-button my-button"
                    alt="takestar"
                    width={500}
                    height={500}
                    priority 
                  />
                  <h5 className="b-5 hovereffect1">
                    On-demand moving and delivery
                  </h5>
                  <p className="b-5 hovereffect">Founded 2007 -2010 Exit.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 divsize">
                <div className="text-center">
                  <Image
                    src="/images/haload-logo.webp"
                    className="img-fluid my-button my-button"
                    alt="haload"
                    width={500}
                    height={500}
                    priority 
                  />
                  <h5 className="b-5 hovereffect1">
                    Instant logistic quote online
                  </h5>
                  <p className="b-5 hovereffect">Founded 2007 -2010 Exit.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="text-center">
            <Link href="/media" passHref className="btn btn-primary my-button">
              View Gallery
            </Link>
            </div>
          </div>
      
          
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
