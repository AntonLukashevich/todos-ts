import React from "react";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";


// Root component (parent of all components in the project)
const App: React.FC = () => {
  return (
    <div className="App">
      <div className="main">
        <Header />
        <Body />
      </div>
    </div>
  );
};

export default App;