import { useState } from "react";
import { useAppSelector } from "../app/hooks";
import { addEventLog } from "../utils/eventlog";

const ChatBox = () => {
  const [messageVal, setMessageVal] = useState<string>();
  const [lastSentMessage, setLastSentMessage] = useState<string>();

  const appData = useAppSelector((state) => state.appData.value);

  return (
    <div
      style={{
        border: "solid #b650d2 0.2rem",
        margin: "0.2rem",
        padding: "0.4rem",
      }}
    >
      <h1>I send the messages</h1>
      {lastSentMessage && <p>Last message: {lastSentMessage}</p>}
      <input
        onChange={(e) => {
          setMessageVal(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          setLastSentMessage(messageVal);
          addEventLog(appData, `MessageBox`, `message`, `send`, {
            value: messageVal,
          });
        }}
      >
        Send
      </button>
    </div>
  );
};

export default ChatBox;
