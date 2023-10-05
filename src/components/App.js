import { useState } from "react";
import Nav from "./Nav";
import UserOptions from "./UserOptions";
import AllTiles from "./AllTiles";

import hogs from "../porkers_data";
import Form from "./Form";

const App = () => {
  const [hogArr, setHogArr] = useState(hogs);

  const handleSort = (e) => {
    const sort = e.target.value;
    const option = {
      all: hogs,
      name: [...hogs].sort((a, b) => a.name.localeCompare(b.name)),
      weight: [...hogs].sort((a, b) => a.weight - b.weight),
    };
    setHogArr(option[sort]);
  };

  const handleFilter = (e) => {
    const type = e.target.value;
    const option = {
      all: hogs,
      grease: hogs.filter((hog) => hog.greased),
      noGrease: hogs.filter((hog) => !hog.greased),
    };
    setHogArr(option[type]);
  };

  const onSubmit = (obj) => setHogArr([...hogArr, obj]);

  return (
    <div className="App">
      <Nav />
      <Form onSubmit={onSubmit} />
      <UserOptions handleSort={handleSort} handleFilter={handleFilter} />
      <AllTiles hogArr={hogArr} />
    </div>
  );
};

export default App;
