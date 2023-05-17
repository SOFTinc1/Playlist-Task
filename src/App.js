import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/Homepage.component";


class App extends React.Component {

  render() {

    return (
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
