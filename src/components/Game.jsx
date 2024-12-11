import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  setHouseChoice,
  setPlayerWin,
  setScore,
  resetGame,
  setCounter,
} from "../store/gameSlice";

export const Game = () => {
  const { myChoice, score, houseChoice, playerWin, counter } = useSelector(
    (state) => state.game
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const newHousePick = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    dispatch(setHouseChoice(randomChoice));
  };

  const result = () => {
    if (houseChoice) {
      if (myChoice === houseChoice) {
        dispatch(setPlayerWin("draw"));
      } else if (
        (myChoice === "rock" && houseChoice === "scissors") ||
        (myChoice === "paper" && houseChoice === "rock") ||
        (myChoice === "scissors" && houseChoice === "paper")
      ) {
        dispatch(setPlayerWin("win"));
        dispatch(setScore(score + 1));
      } else {
        dispatch(setPlayerWin("lose"));
        dispatch(setScore(score - 1));
      }
    }
  };

  useEffect(() => {
    if (!houseChoice) {
      newHousePick();
    }
  }, [houseChoice]);

  useEffect(() => {
    if (!playerWin && counter > 0) {
      const timer = setInterval(() => {
        dispatch(setCounter(counter - 1));
      }, 1000);
      return () => clearInterval(timer);
    } else if (counter === 0 && !playerWin) {
      result();
    }
  }, [counter, playerWin]);

  useEffect(() => {
    const handlePopState = () => {
      navigate("/", { replace: true });
      dispatch(resetGame());
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [dispatch]);

  return (
    <div className="game">
      <div className="you">
        <span className="text">You Picked</span>
        <div
          className={`icon icon-${myChoice} ${
            playerWin === "win" ? `icon icon-${myChoice}-winner` : ""
          }`}
        />
      </div>

      {playerWin && (
        <div className="play">
          <span className="text">
            {playerWin === "win"
              ? "You Win"
              : playerWin === "lose"
              ? "You Lose"
              : "Draw"}
          </span>
          <Link
            to="/"
            onClick={() => dispatch(resetGame())}
            className="play-again"
          >
            Play Again
          </Link>
        </div>
      )}

      <div className="house">
        <span className="text">The House Picked</span>
        {playerWin || counter === 0 ? (
          <div
            className={`icon icon-${houseChoice} ${
              playerWin === "lose" ? `icon icon-${houseChoice}-winner` : ""
            }`}
          />
        ) : (
          <div className="counter">{counter}</div>
        )}
      </div>
    </div>
  );
};
