import { useState } from "react";

const Tile = ({ hog }) => {
  const {
    name,
    specialty,
    greased,
    weight,
    "highest medal achieved": medal,
  } = hog;

  const [hidden, setHidden] = useState(false);

  const handleClick = () => setHidden(!hidden);

  return (
    <div className="ui four wide column" onClick={handleClick}>
      <div className="ui card maxPigTile">
        <div className="image">
          <img src={hog.image} alt={name} />
        </div>
        <h3 className="header">{name}</h3>
        {hidden && (
          <>
            <div className="content">
              <div className="meta">
                <span className="date">
                  {greased ? "Greased" : "Not Greased"}
                </span>
              </div>
              <div className="description">Specialty: {specialty}</div>
              <div className="description">
                Highest Medal:
                <i className="trophy icon"></i>
                {medal}
              </div>
            </div>
            <div className="extra content">
              <i className="user icon"></i>
              {weight} lbs
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Tile;
