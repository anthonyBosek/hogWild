import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";

const App = () => {
  const [hogArr, setHogArr] = useState(hogs);

  return (
    <div className="App">
      <Nav />
    </div>
  );
};

export default App;
