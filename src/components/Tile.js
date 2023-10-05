import { useState } from "react";

const Tile = ({ hog }) => {
  const {
    name,
    specialty,
    greased,
    weight,
    "highest medal achieved": medal,
  } = hog;

  const [showDetails, setShowDetails] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const handleShowExtra = () => setShowDetails((prev) => !prev);

  const handleHidTile = () => setIsHidden((prev) => !prev);

  return (
    <>
      {!isHidden ? (
        <div className="ui four wide column">
          <button className="hide-btn" onClick={handleHidTile}>
            X
          </button>
          <div className="ui card maxPigTile" onClick={handleShowExtra}>
            <div className="image">
              <img src={hog.image} alt={name} />
            </div>
            <h3 className="header">{name}</h3>
            {showDetails && (
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
      ) : null}
    </>
  );
};

export default Tile;
