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
  const [isGone, setIsGone] = useState(false);

  const handleClick = () => setHidden(!hidden);

  const handleGone = () => setIsGone(!isGone);

  return (
    <>
      {!isGone ? (
        <div className="ui four wide column">
          <div className="ui card maxPigTile" onClick={handleClick}>
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
          <div className="extra content">
            <button onClick={handleGone}>Hide</button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Tile;
