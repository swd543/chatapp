import React, { Component, ChangeEvent } from "react";
import { Connector } from "mqtt-react";
import "./App.css";
import PublisherComponent from "./components/PublisherComponent";
import SubscribedComponent from "./components/SubscribedComponent";

interface IProps {}
interface IState {
  brokerUrl: string;
}

class App extends Component<IProps> {
  state = {
    myName: "",
    brokerUrl: "ws://iot.eclipse.org:80/ws"
  };

  changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { brokerUrl, myName } = this.state;

    return (
      <Connector mqttProps={brokerUrl}>
        <div className="App">
          <header className="App-banner">
            My name is
            <input
              name="myName"
              value={myName}
              onChange={this.changeHandler}
              placeholder="Anonymous"
            />
          </header>
          <SubscribedComponent />
          <PublisherComponent myName={myName} />
          <footer className="App-banner">
            Connecting to
            <input
              name="brokerUrl"
              value={brokerUrl}
              onChange={this.changeHandler}
            />
          </footer>
        </div>
      </Connector>
    );
  }
}

export default App;
