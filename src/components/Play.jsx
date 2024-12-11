import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setMyChoice } from "../store/gameSlice";
import Triangle from "../images/bg-triangle.svg";

export const Play = () => {
  const dispatch = useDispatch();
  const options = ["paper", "scissors", "rock"];

  const setChoice = (e) => {
    const myChoice = e.target.id;
    dispatch(setMyChoice(myChoice));
  };

  return (
    <div className="play">
      <img src={Triangle} alt="triangle" className="triangle" />
      <div className="items">
        {options.map((option) => (
          <Link to="/game" key={option}>
            <div
              id={option}
              onClick={setChoice}
              className={`icon icon-${option}`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
