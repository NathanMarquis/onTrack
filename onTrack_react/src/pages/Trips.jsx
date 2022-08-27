import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MapComponent from "../components/mapContainer";
// import WeatherBar from "../components/weatherBar";
import Supplies from "../components/suppliesBox";

function Trips() {
  return (
    <Container>
      <Row>
        <Col>
          <MapComponent/>
        </Col>
        <Col>
          <div>
          {/* <WeatherBar/> */}
          </div>
          <div>
            <Supplies/>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Trips;


