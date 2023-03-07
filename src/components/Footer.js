import React from "react";
import Link from "next/link";
function footer() {
  return (
    <div>
      <section id="footer">
        <div className="container">
          <div className="row  text-xs-center text-sm-left text-md-left">
            <div className="col-xs-6 col-sm-6 col-md-4">
              <h4>Company</h4>
              <ul className="list-unstyled quick-links">
                <li>
                  <Link href="/about" passHref>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" passHref>
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/invest" passHref>
                    Invest
                  </Link>
                </li>
                <li>
                  <Link href="/career" passHref>
                    Career
                  </Link>
                </li>
                <li>
                  <Link href="/contact" passHref>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-4">
              <h4>Business</h4>
              <ul className="list-unstyled quick-links">
                <li>
                  <a href="https://renesent.com/" target="_blank">
                    Renesent
                  </a>
                </li>
                <li>
                  <a href="https://prroperties.com/" target="_blank">
                    Prroperties
                  </a>
                </li>
                <li>
                  <a href="https://algorip.com/" target="_blank">
                    Algorip
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-4">
              <h4>Follow Us</h4>
              <ul className="list-unstyled list-inline social">
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/johnvekser" target="_blank">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://twitter.com/johnvekser" target="_blank">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.instagram.com/johnvekser/"
                    target="_blank"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.linkedin.com/in/johnvekser/"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
              <h4>Mail Us</h4>
              <ul className="list-unstyled list-inline social">
                <li className="list-inline-item">
                  <a href="mailto:Support@vekser.com" target="_blank">
                    <i className="fa fa-envelope"></i>
                  </a>
                  <span className="b-5">Support@vekser.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>&#169; 2023 Vekser. All Rights Reserved.</p>
            </div>
            <div className="col-md-6">
              <p className="float-right">
                {" "}
                <a href="#">Terms and Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default footer;
