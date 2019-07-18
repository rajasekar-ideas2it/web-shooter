import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container} from 'react-bootstrap';
import Video from './components/Video';
import Network from './components/Network';
// import Request from './components/Request';
import Response from './components/Response';
import Console from './components/Console/Console';

function App() {
  return (
    <div>
      <Container fluid>
        <Row style={{"padding-top":"10px"}}>
          <Col xs lg="6">
            <Video />
          </Col>
          <Col xs lg="6">
            <Console />
          </Col>
        </Row>
        </Container>
        <Container fluid>
        <Row>
          <Col xs lg="6" className="network">
            <Network />
          </Col>
          <Col xs lg="6">
            <Response />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
