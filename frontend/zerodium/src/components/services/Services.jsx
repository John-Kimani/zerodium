import "./services.css";

import Card from "react-bootstrap/Card";

const Services = () => {
  return (
    <main className="container-fluid sevices_section" id="services">
      <div className="container services">
        <h3 className="section__title">Services</h3>
        <div className="row">
          <div className="col-sm-12 col-md-4 mt-4">
            <Card className="service-card">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  fill="currentColor"
                  className="bi bi-lock"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                </svg>
              </div>
              <Card.Title className="service_card-name">
                Architecture Reviews
              </Card.Title>
              <Card.Body>
                <p className="service_card-desc">
                  Get an overarching assessment of your behaviors and technology
                  and defend against current and future threats by ensuring best
                  security practices.
                </p>
              </Card.Body>
            </Card>
          </div>

          <div className="col-sm-12 col-md-4 mt-4">
            <Card className="service-card">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  fill="currentColor"
                  className="bi bi-key"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                  <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </div>
              <Card.Title className="service_card-name">
                Security Assessments
              </Card.Title>
              <Card.Body>
                <p className="service_card-desc">
                  We specialise in security design & reviews, code audits, and
                  blackbox security testing.
                </p>
              </Card.Body>
            </Card>
          </div>

          <div className="col-sm-12 col-md-4 mt-4">
            <Card className="service-card">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  fill="currentColor"
                  className="bi bi-people-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                </svg>
              </div>
              <Card.Title className="service_card-name">Red Teaming</Card.Title>
              <Card.Body>
                <p className="service_card-desc">
                  Test your team's incident response readiness and the
                  effectiveness of your security tools before a real attack ever
                  happens with a realistic attack simulation.
                </p>
              </Card.Body>
            </Card>
          </div>

          <div className="col-sm-12 col-md-4 mt-4">
            <Card className="service-card">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  fill="currentColor"
                  className="bi bi-book-half"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                </svg>
              </div>
              <Card.Title className="service_card-name">
                Security Training
              </Card.Title>
              <Card.Body>
                <p className="service_card-desc">
                  We offer Secure Development courses, Offensive Security
                  training, Incident Response Readiness teaching, and more.
                </p>
              </Card.Body>
            </Card>
          </div>

          <div className="col-sm-12 col-md-4 mt-4">
            <Card className="service-card">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  fill="currentColor"
                  className="bi bi-flag-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001" />
                </svg>
              </div>
              <Card.Title className="service_card-name">
                Capture The Flag
              </Card.Title>
              <Card.Body>
                <p className="service_card-desc">
                  Want to run a hacking competition? We can build and host it
                  with uniquely crafted challenges tailored to your niche and
                  your players.
                </p>
              </Card.Body>
            </Card>
          </div>

          <div className="col-sm-12 col-md-4 mt-4">
            <Card className="service-card">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  fill="currentColor"
                  className="bi bi-funnel"
                  viewBox="0 0 16 16"
                >
                  <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
                </svg>
              </div>
              <Card.Title className="service_card-name">
                Research & Development
              </Card.Title>
              <Card.Body>
                <p className="service_card-desc">
                  Whether you're building cutting edge security technology or
                  looking for advanced reverse engineering skills, we're ready
                  to hear more about your tough engineering challenges.
                </p>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;
