import "./footer.css";

import Button from "react-bootstrap/Button";

const Footer = () => {
  return (
    <footer>
      <div className="container container-fluid">
        <div className="row">
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

              <div className="mt-4 d-grid gap-2">
                <Button
                  variant="outline-secondary"
                  size="lg"
                  className="contact_us-btn"
                >
                  Send
                </Button>
              </div>
            </form>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="contact__us">
              <h5 className="contact-title">Call Us</h5>
              <p className="contact-info"><i className="country-abv">K.E :</i> +(254) 795 344 966</p>
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
        <span className='footer__copy'>&#169; Site developed by <a href="https://twitter.com/kimperria" className='footer__copy-link'>Kimperria</a> || 2022</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
