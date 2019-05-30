import React from "react";
import ReactDOM from "react-dom";
import PlainEditor from "./components/PlainEditor/PlainEditor";
// import MyEditor from "./components/MyEditor";
// import MyCKEditor from "./components/CKEditor/MyCKEditor";

const App = () => {
  return <PlainEditor />;
};

ReactDOM.render(<App />, document.getElementById("root"));
