
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NextSeo } from 'next-seo';
import BreadcrumbData from "@/components/BreadcrumbData";
import OrganizationData from "@/components/OrganizationData";
const breadcrumbData={
  "@context": "https://schema.org/", 
  "@type": "BreadcrumbList", 
  "itemListElement": [{
    "@type": "ListItem", 
    "position": 1, 
    "name": "Home",
    "item": "https://vekser.com/"  
  },{
    "@type": "ListItem", 
    "position": 2, 
    "name": "About",
    "item": "https://vekser.com/about"  
  },{
    "@type": "ListItem", 
    "position": 3, 
    "name": "Portfolio",
    "item": "https://vekser.com/portfolio"  
  },{
    "@type": "ListItem", 
    "position": 4, 
    "name": "Contact",
    "item": "https://vekser.com/contact"  
  }]
}
const organizationData={
  
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Vekser",
  "url": "https://vekser.com/",
  "logo": "https://vekser.com/images/vekser-logo.webp",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1(650) 505-5655",
    "contactType": "customer service",
    "areaServed": "US",
    "availableLanguage": "en"
  },
  "sameAs": [
    "https://www.facebook.com/johnvekser",
    "https://twitter.com/johnvekser",
    "https://www.instagram.com/johnvekser/",
    "https://www.linkedin.com/in/johnvekser/"
  ]

}

function Home() {
  return (
    <>
      <BreadcrumbData data={breadcrumbData} />
      <OrganizationData data={organizationData} />
        <NextSeo
            title="Vekser | Disruptive Venture Capital Firm"
            description="Vekser is a venture capital firm that backs bold and courageous entrepreneurs. We focus on early-stage technologies and practical ideas in every field."
            keywords="Vekser, venture capital firm"
        />

      <div>
        <div className="video-container">
          <video
            src="./video/vekser.mp4"
            className="video"
            autoPlay
            loop
            muted
            type="video/mp4"
            playsInline
          />
          {/* <Image
                src="/images/vekser landing page.gif"
                className="img-fluid video"
                alt="vekser-team"
                width={500}
                height={500}
                priority 
              /> */}
        </div>
        <section className="section">
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6">
                <h1 className="b-5">
                  Big dreams of persistent leaders create great organizations.
                </h1>
                <p className="mt-4">
                  We invest in individuals that possess the creativity,
                  perseverance, and teamwork skills necessary to transform
                  innovative ideas into successful businesses through education,
                  mentorship, and direct investments.
                </p>
                <div className="mt-5">
                  <Link
                    href="/about"
                    passHref
                    className="btn my-button btn-primary"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
                <Image
                  src="/images/vekser-team.webp"
                  className="img-fluid"
                  alt="vekser-team"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-12">
                <h2 className="text-center b-5">
                  We fuel growth that persists over time.
                </h2>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-md-4 text-center">
                <Image
                  src="/images/business-partnership.gif"
                  className="img-fluid"
                  alt="business-partnership"
                  width={180}
                  height={180}
                  priority
                />
                <h2 className="text-center">Determined</h2>
                <p className="text-center textalign">
                  We concentrate our investments to ensure each founder gets the
                  capital & attention they deserve.
                </p>
              </div>
              <div className="col-md-4 text-center">
                <Image
                  src="/images/business-growth.gif"
                  className="img-fluid"
                  alt="business growth"
                  width={180}
                  height={180}
                  priority
                />
                <h2 className="text-center">Engaged</h2>
                <p className="text-center textalign">
                  Together with our founders, we deliver high-impact business
                  growth, operational transformation, and leadership
                  development.
                </p>
              </div>
              <div className="col-md-4 text-center">
                <Image
                  src="/images/work-team.gif"
                  className="img-fluid"
                  alt="work-team"
                  width={150}
                  height={150}
                  priority
                />
                <h2 className="text-center mt-4">Diverse</h2>
                <p className="text-center textalign">
                  Our team comprises of experts from many industries in
                  corporate development, sales, marketing, operations, finance,
                  and supply chain.
                </p>
              </div>
            </div>
            <div className="row mt-5">
              <div className="text-center">
                <Link
                  href="/about"
                  passHref
                  className="btn my-button btn-primary"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container mb-5">
            <div className="row">
              <h1 className="text-center b-5">Incredible Investments</h1>
            </div>

            <div className="row mt-2">
              <div className="col-md-2 text-center pt-5">
                <Image
                  src="/images/clevertone logo black webp.webp"
                  className="img-fluid my-button mobile-logo responsive"
                  width={500}
                  height={500}
                  priority
                  alt="clevertone-logo"
                />
              </div>
              <div className="col-md-2 text-center pt-4">
                <Image
                  src="/images/trelegate logo webp.webp"
                  className="img-fluid  logo my-button mobile-logo responsive"
                  width={800}
                  height={800}
                  priority
                  alt="trelegate-logo"
                />
              </div>
              <div className="col-md-2 text-center pt-3">
              <a href="https://renesent.com/" target="_blank">
                <Image
                  src="/images/renesecent-logo.webp"
                  className="img-fluid my-button logo mobile-logo responsive"
                  width={800}
                  height={800}
                  priority
                  alt="renesecent-logo"
                />
                </a>
              </div>
              <div className="col-md-2 text-center pb-3 ">
              <a href="https://prroperties.com/" target="_blank">
                <Image
                  src="/images/properties-logo.webp"
                  className="img-fluid  mobile-logo logo   my-button responsive"
                  width={500}
                  height={500}
                  priority
                  alt="properties-logo"
                />
                </a>
              </div>
              <div className="col-md-2 text-center pt-3">
              <a href="https://algorip.com/" target="_blank">
                <Image
                  src="/images/Algorip-logo.webp"
                  className="img-fluid mobile-logo  logo my-button responsive"
                  width={500}
                  height={500}
                  priority
                  alt="Algorip-logo"
                />
                </a>
              </div>
              <div className="col-md-2 text-center danlogo">
                <Image
                  src="/images/Dadadino-logo.webp"
                  className="img-fluid  mobile-logo  my-button responsive"
                  width={500}
                  height={500}
                  priority
                  alt="Dandino-logo"
                />
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-2"></div>

              <div className="col-md-2 text-center pt-2">
                <Image
                  src="/images/sparoll-logo.webp"
                  className="img-fluid mobile-logo  my-button responsive"
                  width={500}
                  height={500}
                  priority
                  alt="properties-logo"
                />
              </div>
              <div className="col-md-2 text-center pt-2">
                <Image
                  src="/images/reloship-logo.webp"
                  className="img-fluid mobile-logo   my-button responsive"
                  width={500}
                  height={500}
                  priority
                  alt="Algorip-logo"
                />
              </div>
              <div className="col-md-2 text-center mt-1">
                <Image
                  src="/images/takestar-logo.webp"
                  className="img-fluid  mobile-logo  my-button responsive"
                  width={500}
                  height={500}
                  priority
                  alt="Algorip-logo"
                />
              </div>
              <div className="col-md-2 text-center mt-1">
                <Image
                  src="/images/haload-logo.webp"
                  className="img-fluid mobile-logo   my-button responsive"
                  width={500}
                  height={500}
                  priority
                  alt="Algorip-logo"
                />
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
          <div className="container mt-5">
          <div className="row mt-5 pt-5">
              <div className="text-center">
                <Link
                  href="/portfolio"
                  passHref
                  className="btn my-button btn-primary"
                >
                  See Our Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <h2 className="b-5">News That Matters</h2>
            </div>
            <div className="row text-center">
              <div className="col-md-6">
                <Image
                  src="/images/forbes.webp"
                  className="img-fluid my-button"
                  width={500}
                  height={500}
                  priority
                  alt="forbes"
                />
              </div>
              <div className="col-md-6">
                <Image
                  src="/images/huffspot.webp"
                  className="img-fluid my-button"
                  width={500}
                  height={500}
                  priority
                  alt="huffspot"
                />
              </div>
            </div>
            <div className="row mt-5 mb-5">
              <div className="text-center">
                <Link
                  href="/about"
                  passHref
                  className="btn my-button btn-primary"
                >
                  View More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
