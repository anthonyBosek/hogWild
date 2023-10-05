const UserOptions = ({ handleSort, handleFilter }) => {
  return (
    <div className="options">
      <label htmlFor="filter">Filter by:</label>
      <select id="filter" onChange={handleFilter}>
        <option value="all">All</option>
        <option value="grease">Greased</option>
        <option value="noGrease">Not Greased</option>
      </select>
      <label>Sort by:</label>
      <select id="sort" onChange={handleSort}>
        <option value="all">All</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  );
};

export default UserOptions;
