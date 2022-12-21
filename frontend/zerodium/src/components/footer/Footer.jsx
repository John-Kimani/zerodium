import "./footer.css";

import Button from "react-bootstrap/Button";

const Footer = () => {
  return (
    <footer>
      <div className="container container-fluid">
        <div className="row" id="footer__content">
          <div className="col-sm-12 col-md-8">
            <form action="" className="get_in_touch">
              <div className="row">
                <div className="col-md-6 contact_us-div">
                  <input
                    type="text"
                    placeholder="Name"
                    className="contact_us-input"
                  />
                </div>
                <div className="col-md-6 contact_us-div">
                  <input
                    type="email"
                    placeholder="Email"
                    className="contact_us-input"
                  />
                </div>
              </div>
              <div className="row mt-4">
                <textarea
                  className="contact_us-textarea"
                  placeholder="Message"
                  cols="30"
                  rows="8"
                ></textarea>
              </div>

              <div className="mt-4">
                <Button variant="outline-secondary" className="contact_us-btn">
                  Send
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-send"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                  </svg>
                </Button>
              </div>
            </form>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="contact__us">
              <h5 className="contact-title">
                Call Us{" "}
              </h5>
              <p className="contact-info">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-phone"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg><i className="country-abv">K.E :</i> +(254) 795 344 966
              </p>
              <h5 className="contact-title">Follow our Social Media</h5>
              <div className="social_media">
                <p className="contact-info">Twitter</p>
                <p className="contact-info">Dribble</p>
                <p className="contact-info">YouTube</p>
              </div>
            </div>
          </div>
        </div>

        <div className="author-info">
          <span className="footer__copy">
            &#169; Site developed by{" "}
            <a
              href="https://twitter.com/kimperria"
              className="footer__copy-link"
            >
              Kimperria
            </a>{" "}
            || 2022
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
