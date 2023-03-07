import React from "react";
import Head from 'next/head'
function Career() {
  return (
    <div>
       <Head>
      <title>Vekser-Career Page</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
      <section className="section first-text">
        <div className="container ">
          <div className="row">
            <h1 className="b-5 text-center head-text">Join Us</h1>
            <p className="b-5 pt-3 pb-5 text-center">
              Looking out for enthusiastic people who are highly driven,
              <br />
              experienced, and want to grow with our international team
            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card card-box p-4">
                <h4 className="b-5">
                  PPC Manager (Google Ads and Social media)
                </h4>
                <ul className="pt-5 pb-5">
                  <li>Google Adwords Certification (Required)</li>
                  <li>Digital marketing (Required)</li>
                  <li>Bachelor's (Preferred)</li>
                  <li>Social media marketing: 1 year (Preferred)</li>
                  <li>total work: 1 year (Preferred)</li>
                </ul>
                <a
                  href="https://in.indeed.com/job/ppc-manager-google-ads-and-social-media-18c1d30e2fa06261?_ga=2.9483509.1571178406.1675944814-249063284.1671016581"
                  className="text-deco"
                >
                  Apply Now
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-box p-4">
                <h4 className="b-5">Ruby On Rails Developer</h4>
                <ul className="pt-5 pb-5">
                  <li>
                    Bachelor's degree in computer science, computer engineering,
                    IT, or a related field.
                  </li>
                  <li>Ability to write clean ruby code.</li>
                  <li>
                    Proficiency with code versioning tools, including Git,
                    GitHub, and SVN.
                  </li>
                  <li>
                    Basic understanding of front-end technologies including
                    HTML5, JavaScript, and CSS3.
                  </li>
                  <li>Familiarity with continuous integration</li>
                </ul>
                <a
                  href="https://in.indeed.com/job/ruby-rails-developer-bdb99cb244a12f7c?_ga=2.138024432.1357013630.1676360712-249063284.1671016581"
                  className="text-deco"
                >
                  Apply Now
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-box p-4">
                <h4 className="b-5">Customer Executive</h4>
                <ul className="pt-5 pb-5">
                  <li>Total work: 1 year (Required)</li>
                  <li>Customer service: 1 year (Required)</li>
                  <li>English (Required)</li>
                  <li>Higher Secondary(12th Pass) (Preferred)</li>
                </ul>
                <a
                  href="https://in.indeed.com/job/customer-support-agent-9ab9327bb11b6f9d"
                  className="text-deco"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container first-text">
          <div className="row">
            <h1 className="b-5 text-center pt-5 pb-5">Why should you Apply</h1>
            <div className="col-md-6 pt-5">
              <h3>The Perks</h3>
              <p>
                Our great team leaders are always there when needed – assisting
                you with your tasks, setting up weekly training sessions, and
                even hosting team activities to boost morale. Healthy snacks,
                refreshments, and lots and lots of coffee are stocked up in the
                office.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="images/career-team.webp"
                alt="career-team"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-md-6">
              <img
                src="images/communication.jpg"
                alt="career-team"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 pt-5">
              <h3>The Benefits</h3>
              <p>
                The Benefits Our offices worldwide offer full-time employees all
                the benefits in addition to the best healthcare packages for
                dental, vision, and general healthcare. We send out steady pay
                with a continuous workflow.
              </p>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-md-6 pt-5">
              <h3>The Communication</h3>
              <p>
                We maintain a healthy environment for our teams and departments
                around the globe and always give and receive feedback to ensure
                that everyone is on the same page at all times. We make sure our
                employees are comfortable and can work without unwanted
                distractions.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="images/teams.webp"
                alt="career-team"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Career;
