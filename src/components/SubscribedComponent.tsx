import React, { FunctionComponent } from "react";
import "./Component.css";
import audio from "./message.wav";
import { subscribe } from "mqtt-react";

interface IProps {
  mqtt?: any;
  data: any[];
}

const playAudio = () => {
  var audioObject: any = new Audio(audio);
  audioObject.play();
};

const SubscribedComponent: FunctionComponent<IProps> = props => {
  const { data } = props;
  playAudio();
  return (
    <div className="Component">
      {data && data.map((d, i) => <li key={i}>{d}</li>)}
    </div>
  );
};

export default subscribe({
  topic: "@demo/test"
})(SubscribedComponent);
