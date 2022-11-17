import React from "react";
import "./App.css";
import MessageBox from "./components/MessageBox";
import Wrapper from "./components/Wrapper";
import { store } from "./app/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div
      className="App"
      style={{
        maxWidth: "70rem",
        margin: "auto",
      }}
    >
      <Provider store={store}>
        <Wrapper>
          <MessageBox />
        </Wrapper>
      </Provider>
    </div>
  );
}

export default App;
