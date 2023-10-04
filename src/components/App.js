import { useState } from "react";
import Nav from "./Nav";
import UserOptions from "./UserOptions";
import AllTiles from "./AllTiles";

import hogs from "../porkers_data";

const App = () => {
  const [hogArr, setHogArr] = useState(hogs);

  const handleSort = (e) => {
    const sortType = e.target.value;
    let sortedArr = [...hogArr];

    if (sortType === "name") {
      sortedArr.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortType === "weight") {
      sortedArr.sort((a, b) => a.weight - b.weight);
    }

    setHogArr(sortedArr);
  };

  const handleFilter = (e) => {
    const filterType = e.target.value;
    let filteredArr = [...hogs];
    if (filterType === "true") {
      filteredArr = filteredArr.filter((hog) => hog.greased);
    } else if (filterType === "false") {
      filteredArr = filteredArr.filter((hog) => !hog.greased);
    }
    setHogArr(filteredArr);
  };

  return (
    <div className="App">
      <Nav />
      <UserOptions handleSort={handleSort} handleFilter={handleFilter} />
      <AllTiles hogArr={hogArr} />
    </div>
  );
};

export default App;
