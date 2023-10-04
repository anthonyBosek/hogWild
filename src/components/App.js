import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import AllTiles from "./AllTiles";

const App = () => {
  const [hogArr, setHogArr] = useState(hogs);

  return (
    <div className="App">
      <Nav />
      <AllTiles hogArr={hogArr} />
    </div>
  );
};

export default App;
