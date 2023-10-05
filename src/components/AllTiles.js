import Tile from "./Tile";

const AllTiles = ({ hogArr }) => {
  const allHogs = hogArr.map((hog) => <Tile key={hog.name} hog={hog} />);

  return <div className="ui grid container">{allHogs}</div>;
};

export default AllTiles;
