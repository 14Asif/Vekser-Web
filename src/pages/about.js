import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";
import PersonData from "@/components/PersonData";
function About() {
  const personData={
 
  "@context": "https://schema.org/",
  "@type": "Person",
  "name": "John Daniel",
  "url": "https://vekser.com/about",
  "image": "https://vekser.com/images/John%20Daniel.webp",
  "sameAs": [
    "https://www.facebook.com/johnvekser",
    "https://twitter.com/johnvekser",
    "https://www.instagram.com/johnvekser/",
    "https://www.linkedin.com/in/johnvekser/"
  ],
  "jobTitle": "Business Owner",
  "worksFor": {
    "@type": "Organization",
    "name": "Vekser"
  }  

  }
  return (
    <div>
    
      <NextSeo
        title="Vekser - A Trusted Leader in Investment Management"
        description="Vekser is a leading investment management company that can help you achieve financial growth through expert financial advice and investment strategies that work.
        "
        keywords="Investment Management Company"
      />
<PersonData  data={personData} />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 pt-5">
              <h1 className="mobile-center">Some background</h1>
              <p className="pt-3 text-end mobile-center">
                Vekser is a venture capital firm founded in 2022 in Miami,
                Florida. The firm is focused on backing entrepreneurs who are
                innovative, disruptive, and willing to challenge established
                norms in big industries. Vekser invests in seed-stage
                technologies and practical ideas in various sectors, including
                logistics, real estate, SaaS, marketing, beauty, fashion, and
                entertainment. The firm has a global reach with investments in
                the US, Peru, Israel, Portugal, India, the Netherlands, and the
                UK. Vekser prides itself on partnering with its portfolio
                companies and providing support beyond just financial
                investment.
              </p>
            </div>
            <div className="col-md-6 how-img">
              <Image
                src="/images/some back ground.webp"
                alt="vekser-team"
                className="img-fluid mt-5"
                width={500}
                height={500}
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Image
                src="/images/John Daniel.webp"
                className="img-fluid rounded"
                alt="John Daniel"
                width={400}
                height={600}
                priority
              />
            </div>
            <div className="col-md-6">
              <h2 className="mobile-center">About John</h2>
              <p className="text-start mobile-center">
                John Vekser (October 30, 1980) is a successful real estate and
                technology investor, with a career spanning over 25 years in
                various business ventures. He has achieved notable success in
                the technology, fashion & beauty, and logistics industries, with
                his essential lessons about client and customer relationships
                helping him to create companies that have revolutionized the
                face of technology. John's story is one of persistence and
                determination, as he started his clothing line from the back of
                his car before moving into logistics and eventually technology.
                His investments in startups that brought instant quoting online
                revolutionized the transportation industry and resulted in
                significant exits. John's current focus is on real estate and
                SaaS companies, resulting in substantial growth for his business
                online. His success serves as a reminder that persistence,
                determination, and a willingness to adapt are key to success in
                any industry.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
       
          <div className="row">
            
            <div className="col-md-6">
            <h2>
              Supporting visionary founders in achieving their  radical
              ideas.​
            </h2>
            <p className="mb-5 text-end mobile-center">
              Our aim is to make an impact with companies that solve social and
              economic issues and will help define a new era of technology.
              We have created <br /> top-of-the-line executive resources platform of
              media, executives, technicals, marketing,  technology and
              call centers in 6 countries that ensures our commitment in our
              portfolio companies to grow their businesses globally
            </p>
            </div>
            <div className="col-md-6 how-img">
            <Image
                src="/images/achivement.webp"
                className="img-fluid"
                alt="John Daniel"
                width={500}
                height={400}
                priority
              />
            </div>
          </div>
          <div className="row mt-5 mb-5">
            <div className="text-center">
              <Link
                href="/contact"
                passHref
                className="btn btn-primary my-button"
              >
                Invest with us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
