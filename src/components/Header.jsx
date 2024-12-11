import { useDispatch, useSelector } from "react-redux";

import { resetScore } from "../store/gameSlice";

export const Header = () => {
  const score = useSelector((state) => state.game.score);
  const dispatch = useDispatch();

  return (
    <div className="header">
      <div className="text">
        <span>Rock</span>
        <span>Paper</span>
        <span>Scissors</span>
      </div>
      <div className="score-box">
        <span>Score</span>
        <div className="score">{score}</div>
        <button
          disabled={score === 0}
          onClick={() => dispatch(resetScore())}
          className="reset-score-btn"
        >
          Reset Score
        </button>
      </div>
    </div>
  );
};
