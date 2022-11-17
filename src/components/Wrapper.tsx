import { useAppDispatch } from "../app/hooks";
import { setAppData } from "../slices/appDataSlice";
import { v4 as uuidv4 } from "uuid";

const ChatContainer = (props: any) => {
  let { children } = props;

  const dispatch = useAppDispatch();
  dispatch(setAppData({ key: "visitorId", value: `visitor-${uuidv4()}` }));

  return (
    <div
      style={{
        border: "solid #f2bc85 0.2rem",
        margin: "0.2rem",
        padding: "0.4rem",
      }}
    >
      <h1>I am the wrapper that will set visitorId</h1>

      {children}
    </div>
  );
};

export default ChatContainer;
