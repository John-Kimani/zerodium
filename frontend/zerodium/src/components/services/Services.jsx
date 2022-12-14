import "./services.css";

import { ServicesData } from "./Data";

import Card from "react-bootstrap/Card";

const Services = () => {
  return (
    <main className="container-fluid sevices_section">
      <div className="container services">
        <div className="row">
          {ServicesData.map(({ id, serviceName, serviceDesc }) => {
            return (
              <div className="col-sm-12 col-md-4 mt-4">
                <Card key={id} className='service-card'>
                  <Card.Body>
                    <Card.Title className="service_card-name">{serviceName}</Card.Title>
                    <Card.Text className="service_card-desc">{serviceDesc}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
          ;
        </div>
      </div>
    </main>
  );
};

export default Services;
