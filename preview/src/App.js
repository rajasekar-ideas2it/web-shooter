import React from 'react';
import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container} from 'react-bootstrap';
import Video from './components/Video';
import Network from './components/Network';
import Request from './components/Request';
import Response from './components/Response';
import Console from './components/Console/Console';

function App() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs lg="6">
            <Video />
          </Col>
          <Col xs lg="6">
            <Console />
          </Col>
          <Col xs lg="6">
            <Network />
          </Col>
          <Col xs lg="6">
            <Row>
              <Col xs lg="6">
                <Request />
              </Col>
              <Col xs lg="6">
                <Response />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
