import { subscribe } from "mqtt-react";
import React, {
  ChangeEvent,
  FormEvent,
  FunctionComponent,
  HTMLProps,
  useState
} from "react";
import "./Component.css";

interface IProps extends HTMLProps<any> {
  mqtt?: any;
  myName: string;
}

const PublisherComponent: FunctionComponent<IProps> = props => {
  const [input, setInput] = useState("");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onSubmitHander = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { mqtt, myName } = props;
    input.length !== 0 &&
      mqtt.publish(
        "@demo/test",
        (myName.length === 0 ? "Anonymous" : myName) + " : " + input
      );
    setInput("");
  };

  return (
    <form className="Component" onSubmit={onSubmitHander}>
      <input
        style={{ minWidth: "90vw", margin: 10, borderRadius: 10, padding: 2 }}
        onChange={onChangeHandler}
        value={input}
        placeholder="Type a message here"
      />
    </form>
  );
};

export default subscribe({
  topic: "@demo/test"
})(PublisherComponent);
