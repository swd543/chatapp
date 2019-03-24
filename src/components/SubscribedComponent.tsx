import React, { FunctionComponent } from "react";
import "./Component.css";
import { subscribe } from "mqtt-react";

interface IProps {
  mqtt?: any;
  data: any[];
}

const SubscribedComponent: FunctionComponent<IProps> = props => {
  const { data } = props;
  return (
    <div className="Component">
      {data && data.map((d, i) => <li key={i}>{d}</li>)}
    </div>
  );
};

export default subscribe({
  topic: "@demo/test"
})(SubscribedComponent);
