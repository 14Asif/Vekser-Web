import React from "react";
import Link from "next/link";
// import Head from "next/head";
import Image from 'next/image';
import { NextSeo } from "next-seo";
function Invest() {
  return (
    <div>
      {/* <Head>
        <title>Vekser-Invest Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head> */}
         <NextSeo
            title="Vekser Investment: Your Partner in Startup Investment "
            description="Vekser Investment is your go-to partner for successful startup investment. Our team of experts has years of experience in identifying promising startups, evaluating investment opportunities, and mitigating risks."
            keywords="startup investment"
        />
      <section className="section">
        <div className="banner">
          <Image src="/images/banner-invest.webp" alt="Invest Banner image"   width={500}
                height={500}
                priority  />
          <div className="banner-text">
            <h1>
              Why hold a <br />
              community
              <br />
              raise ?
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12 mt-5 mb-5">
                  <h2 className="text-end mobile-center">To expand coverage</h2>
                  <p className="text-end mobile-center">
                    {" "}
                    Through the community raise, we’ll give a network of
                    brilliant entrepreneurs, operators, creatives, marketers,
                    and product leaders access to venture to investors who
                    otherwise wouldn’t be given the opportunity to take part in
                    these deals.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12  mb-5">
                  <h2 className="text-end  mobile-center">To broaden the diversity</h2>
                  <p className="text-end  mobile-center">
                    We welcome applications from all qualified investors,
                    regardless of age, gender, religion, sexual orientation, or
                    physical limitations. Including as many individuals as
                    possible on our companies’ cap tables is critical.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12  mb-5">
                  <h2 className="text-end mobile-center">The competitive advantage</h2>
                  <p className="text-end mobile-center">
                    We occasionally use the LP network, which our founders will
                    have access to, to introduce people, share knowledge, aid in
                    fundraising, and hire new employees.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h2 className="text-end mobile-center">Better deal flows</h2>
                  <p className="text-end mobile-center">
                    Our LPs will have their network of entrepreneurs and
                    aspiring founders working on intriguing projects that we
                    want to look at before everyone else.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <Image
                src="/images/invest-page-graphic.webp"
                className="img-fluid"
                alt="invest-graphic"
                width={800}
                height={600}
                priority 
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-5">
              <h2 className="text-style-grow">Let’s Grow Together</h2>
            </div>
            <div className="col-md-6">
              <h2 className="connect-text ">Helping you connect businesses</h2>
              <p className="mobile-center">
                Businesses are built on relationships, and a single introduction
                can completely alter a founder’s course. If you think of it, we
                probably “know a person” who can help, potential funders,
                influencers, creative agencies, recruitment, vendors, or
                collaborators.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mt-5">
              <h2 className="div-6">You might be the</h2>
              <h2 className="div-7">ONE</h2>
            </div>
            <div className="col-md-6 how-img">
              <Image
                src="/images/you-might-be-the-one.webp"
                className="img-fluid"
                alt="invest-graphic"
                width={500}
                height={500}
                priority 
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3 className="text-center">Break the ice</h3>
              <p className="text-center">
                Without introductions, funding the new generation of founders
                would be impossible.
              </p>
            </div>
            <div className="col-md-4">
              <h3 className="text-center">Assisting portfolio founders</h3>
              <p className="text-center">
                To make smart introduction requests, we may ping you as they
                hire, raise money, enter new markets, and grow.
              </p>
            </div>
            <div className="col-md-4">
              <h3 className="text-center">Impart wisdom</h3>
              <p className="text-center">
                We value those with extensive experience and knowledge in
                particular fields or businesses.
              </p>
            </div>
          </div>
          <div className="row mt-5 mb-5">
            <div className="text-center">
              <Link
                href="/contact"
                passHref
                className="btn my-button btn-primary"
              >
            Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Invest;
