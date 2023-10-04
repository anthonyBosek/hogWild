const UserOptions = ({ handleSort, handleFilter }) => {
  return (
    <div className="options">
      <label htmlFor="filter">Filter by:</label>
      <select id="filter" onChange={handleFilter}>
        <option value="All">All</option>
        <option value="true">Greased</option>
        <option value="false">Not Greased</option>
      </select>
      <label>Sort by:</label>
      <select id="filter" onChange={handleSort}>
        <option value="All">All</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  );
};

export default UserOptions;
