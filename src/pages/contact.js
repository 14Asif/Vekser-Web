import React, { useState } from "react";
import axios from "axios";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { HiUser, HiOutlineMail, HiOutlinePencilAlt } from "react-icons/hi";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  // const handleSubmit = async(event) => {
  //   event.preventDefault();
  //       // prevent multiple form submissions
  //       if (submitting) {
  //         return;
  //       }
  //       setSubmitting(true);
  //       try {
  //         const url="http://localhost:80/vekserapi/contact.php";
  //         const jsonData = JSON.stringify(formData);
  //         // const response = await axios.post('/submit-form.php', formData);
  //   const response= await axios.post(url, jsonData, {
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }

  //   });
  //   if(response){
  //     alert("Sucessfull");
  //     setFormData('');
  //   }
  //         console.log(response);
  //       } catch (error) {
  //         console.error(error);
  //       } finally {
  //         setSubmitting(false);
  //       }

  //     };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // prevent multiple form submissions
    if (submitting) {
      return;
    }
    setSubmitting(true);
    try {
      const url = "http://localhost:80/vekserapi/contact.php";
      const jsonData = JSON.stringify(formData);
      // const response = await axios.post('/submit-form.php', formData);
      const response = await axios.post(url, jsonData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response) {
        alert("Successful");
        const newFormData = {};
        Object.keys(formData).forEach((key) => {
          newFormData[key] = "";
        });
        setFormData(newFormData);
      }
      console.log(response);
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div>
      {/* <Head>
      <title>Vekser-Contact Page</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head> */}
      <NextSeo
        title="Vekser best Private Equity Firm - Your Partner in Growth"
        description="Join the best private equity firm and experience exceptional results. Our team is dedicated to partnering with talented management teams to build successful businesses.learn more!"
        keywords="best private equity firm"
      />
      <section className="section">
        <div className="container">
          <h1 className="text-center mb-5 b-5">Get in touch</h1>
          <div class="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div className="contactmain card p-4 card-box1">
                
                <div className="img-fluid">
                <Image
                  src="/images/form 6.png"
                  className="img-fluid"
                  alt="form image"
                  width={350}
                  height={500}
                  priority
                />
                </div>
         <div className="form-css">
                  <form onSubmit={handleSubmit} >
                   
                    <div className="form-group p-2">
                      <label for="exampleInputName" className="pb-2">
                        <HiUser className="pb-2" size={30} /> Your Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputName"
                        placeholder="Name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group p-2">
                      <label for="exampleInputEmail1" className="pb-2">
                        <HiOutlineMail className="" size={25} /> Your Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group p-2">
                      <label for="exampleFormControlTextarea1" className="pb-2">
                        <HiOutlinePencilAlt className="pb-1" size={30} /> Your
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <div className="form-group text-center">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="btn btn-outline-primary"
                      >
                        {submitting ? "Submitting..." : "Submit"}
                      </button>
                    </div>
                  </form>
              </div>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <div className="card card-box p-4">
                <h3>USA</h3>
                <p>555 West 5th Street. Los Angeles Ca. 90013.</p>
                <a
                  href="https://goo.gl/maps/c8qpWLZj9p4j9QtN8"
                  className="text-deco"
                  target="_blank"
                >
                  Get Direction
                </a>
                <br />
                <p> 514 N. California Ave. Beaumont Ca. 92223.</p>
                <a
                  href="https://www.google.co.in/maps/place/514+N+California+Ave,+Beaumont,+CA+92223,+USA/@33.9282135,-116.9831538,17z/data=!3m1!4b1!4m5!3m4!1s0x80db44ac46f0b7c1:0x1088063837d0938b!8m2!3d33.9282091!4d-116.9809651"
                  className="text-deco"
                  target="_blank"
                >
                  Get Direction
                </a>
                <br />
                <p> 78 SW 7th Street Miami Fl. 33130.</p>
                <a
                  href="https://goo.gl/maps/rybXmsTxy18dV1ei9"
                  className="text-deco"
                  target="_blank"
                >
                  Get Direction
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-space card-box p-4">
                <h3>INDIA</h3>

                <h5>Mumbai</h5>
                <p>
                  Goregaon, 20th Floor, Oberoi Commerz II, International
                  Business Park, Oberoi Garden City Goregaon East (D2), Mumbai,
                  MH 400063.
                </p>
                <a
                  href="https://www.google.com/maps/dir/19.1702521,72.8604367/Commerz+II,+International+Business+Park,+Oberoi+Garden+City,+Goregaon,+Mumbai,+Maharashtra+400063/@19.1701184,72.8580771,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3be7b7a9286dc87f:0x572ab07cfc518e07!2m2!1d72.8602807!2d19.1701339"
                  className="text-deco"
                  target="_blank"
                >
                  Get Direction
                </a>
                <br />
                <h5>Thane</h5>
                <p>
                  B206, Lodha Supremus, Rd Number 22, Wagle Industrial Estate.
                  Maharashtra 400604.
                </p>
                <a
                  href="https://www.google.co.in/maps/place/LODHA+Supremus/@19.1972825,72.9475689,17.75z/data=!4m8!1m2!2m1!1sB206,+Lodha+Supremus,+Rd+Number+22,+Wagle+Industrial+Estate,+Thane+West,+Thane,+Maharashtra+400604!3m4!1s0x3be7b908556edded:0x5c7e03ab96a01497!8m2!3d19.1980257!4d72.9487256"
                  className="text-deco"
                  target="_blank"
                >
                  Get Direction
                </a>
                <br />
                <h5>Ambernath</h5>
                <p>
                  {" "}
                  Udyog Bhavan No-2 F5 A Wing, Anand Nagar Midc Ambernath (East)
                  Maharastra 421501.
                </p>
                <a href="#">Get Direction</a>
                <br />
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-6">
                <div className="card  card-box p-4">
                  <h3>ISRAEL</h3>
                  <p>&nbsp;Rothschild 22 Tel Aviv-Yafo, 6688218</p>
                  <a
                    href="https://www.google.co.in/maps/place/Rothschild+22,+Tel+Aviv-Yafo/@32.0627619,34.769258,17z/data=!3m1!4b1!4m5!3m4!1s0x151d4c9d1f495b2d:0x75eca178a8d3826c!8m2!3d32.0627574!4d34.7714467"
                    className="text-deco"
                    target="_blank"
                  >
                    Get Direction
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card  card-space card-box p-4">
                  <h3>NETHERLANDS</h3>
                  <p>&nbsp;Weesperstraat 61, 1018 VN Amsterdam, Netherlands</p>
                  <a
                    href="https://www.google.co.in/maps/place/Weesperstraat+61,+1018+VN+Amsterdam,+Netherlands/@52.3650061,4.9038601,17z/data=!3m1!4b1!4m5!3m4!1s0x47c60997eba826c1:0x30038c37ff1a1037!8m2!3d52.3650028!4d4.9060488"
                    className="text-deco"
                    target="_blank"
                  >
                    Get Direction
                  </a>
                </div>
              </div>
            </div>
            <div className="row mt-5 mb-5">
              <div className="col-md-6">
                <div className="card card-space card-box p-4">
                  <h3>LIMA</h3>
                  <p>
                    &nbsp;Av. Mariscal La Mar 638 (Soho II Building), of. 604,
                    Miraflores
                  </p>
                  <a
                    href="https://www.google.co.in/maps/place/Av.+Javier+Prado+Este+476,+San+Isidro+15046,+Peru/@-12.0918196,-77.0307309,17z/data=!3m1!4b1!4m5!3m4!1s0x9105c9acacb6fb71:0x594b5ad3c80eb548!8m2!3d-12.0918249!4d-77.0285422"
                    className="text-deco"
                    target="_blank"
                  >
                    Get Direction
                  </a>{" "}
                </div>
              </div>

              <div className="col-md-6">
                <div className="card card-space card-box p-4">
                  <h3>PORTUGAL</h3>
                  <p> Rua Saraiva de Carvalho 1C, Lisbon, Portugal</p>
                  <a
                    href="https://www.google.co.in/maps/place/R.+Saraiva+de+Carvalho+1C,+1250-240+Lisboa,+Portugal/@38.7184567,-9.1600202,17z/data=!3m1!4b1!4m5!3m4!1s0xd1933e1b103884d:0xfc0a836af5417afd!8m2!3d38.7184525!4d-9.1578315"
                    className="text-deco"
                    target="_blank"
                  >
                    Get Direction
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
