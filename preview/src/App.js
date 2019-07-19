import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container, Nav } from "react-bootstrap";
import Video from "./components/Video";
import Network from "./components/Network";
import Request from "./components/Request";
import Response from "./components/Response";
import Console from "./components/Console/Console";

const components = {
  request: Request,
  response: Response
};

const logs = [
  {
    dateTime: "2019-07-18T04:21:57.497Z",
    type: "debug",
    message: [
      'Join us for the upcoming webinar, "Enterprise JavaScript done right: the tools you love, the security you need."Sign up here »'
    ]
  },
  {
    dateTime: "2019-07-18T04:21:59.497Z",
    type: "error",
    message: [
      'Join us for the upcoming webinar, "Enterprise JavaScript done right: the tools you love, the security you need."Sign up here »',
      'Error: dscsdsd\\n    at <anonymous>:1:15'
    ]
  },
  {
    dateTime: "2019-07-18T04:22:00.497Z",
    type: "warn",
    message: [
      'Join us for the upcoming webinar, "Enterprise JavaScript done right: the tools you love, the security you need."Sign up here »'
    ]
  },
  {
    dateTime: "2019-07-18T04:22:05.497Z",
    type: "log",
    message: [
      'Join us for the upcoming webinar, "Enterprise JavaScript done right: the tools you love, the security you need."Sign up here »'
    ]
  }
];


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: "request",
      currentPlaybackTime: 0,
      recordingStartedDateTime: "2019-07-18T04:21:45.497Z",
      networkLogs: [],
      selectedRequest: null
    };
  }

  componentDidMount() {
    const networkLogs = fetch('http://192.168.43.142:3000/getLogs', {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
      }
    }
    )
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
    this.setState({ networkLogs });
    console.log(networkLogs);
  }

  handleSelect = eventKey => {
    this.setState({
      activeKey: eventKey
    });
  };

  onTimeUpdate = currentPlaybackTime => {
    this.setState({
      currentPlaybackTime
    });
  };

  setCurrentRequest = (currentPlaybackTime, request) => {
    const videoElement = document.getElementById('video');
    this.setState({
      currentPlaybackTime,
      selectedRequest: request
    }, () => {
      videoElement.currentTime = currentPlaybackTime + 0.001;
      videoElement.pause();
    });
  };

  render() {
    const {
      activeKey,
      currentPlaybackTime,
      recordingStartedDateTime,
      selectedRequest
    } = this.state;
    const ActiveComponent = components[activeKey];
    return (
      <div>
        <Container fluid>
          <Row className="vh-100">
            <Col
              xs
              lg="6"
              className="overflow-auto h-50 border-top border-right"
            >
              <Video onTimeUpdate={this.onTimeUpdate} currentPlaybackTime={currentPlaybackTime} />
            </Col>
            <Col
              xs
              lg="6"
              className="overflow-auto h-50 border-top border-right py-2"
            >
              <Console
                currentPlaybackTime={currentPlaybackTime}
                recordingStartedDateTime={recordingStartedDateTime}
                logs={logs}
              />
            </Col>
            <Col
              xs
              lg="4"
              className="overflow-auto h-50 border-top border-right py-2"
            >
              <Network
                currentPlaybackTime={currentPlaybackTime}
                recordingStartedDateTime={recordingStartedDateTime}
                setCurrentRequest={this.setCurrentRequest}
              />
            </Col>
            <Col
              xs
              lg="8"
              className="overflow-auto h-50 border-top border-right"
            >
              <Row className="networkTabs">
                <Nav
                  variant="tabs"
                  defaultActiveKey="request"
                  activeKey={activeKey}
                  onSelect={this.handleSelect}
                  className="bg-white"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="request">Request</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="response">Response</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Row>
              <div className="mt-5">
                {
                  selectedRequest &&
                  <ActiveComponent log={selectedRequest} />
                }
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
