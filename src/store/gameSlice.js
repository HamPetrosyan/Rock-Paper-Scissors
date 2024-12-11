import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myChoice: localStorage.getItem("myChoice") || "",
  houseChoice: localStorage.getItem("houseChoice") || "",
  playerWin: localStorage.getItem("playerWin") || "",
  score: Number(localStorage.getItem("score")) || 0,
  counter: Number(localStorage.getItem("counter")) || 3,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setMyChoice(state, action) {
      state.myChoice = action.payload;
      localStorage.setItem("myChoice", action.payload);
    },
    setHouseChoice(state, action) {
      state.houseChoice = action.payload;
      localStorage.setItem("houseChoice", action.payload);
    },
    setPlayerWin(state, action) {
      state.playerWin = action.payload;
      localStorage.setItem("playerWin", action.payload);
    },
    setScore(state, action) {
      state.score = action.payload;
      localStorage.setItem("score", action.payload);
    },
    setCounter(state, action) {
      state.counter = action.payload;
      localStorage.setItem("counter", action.payload);
    },
    resetGame(state) {
      state.houseChoice = "";
      state.playerWin = "";
      state.counter = 3;
      localStorage.removeItem("myChoice");
      localStorage.removeItem("houseChoice");
      localStorage.removeItem("counter");
      localStorage.removeItem("playerWin");
    },
    resetScore(state) {
      state.score = 0;
      localStorage.removeItem("score");
    },
  },
});

export const {
  setMyChoice,
  setScore,
  setHouseChoice,
  setPlayerWin,
  setCounter,
  resetGame,
  resetScore,
} = gameSlice.actions;

export default gameSlice.reducer;
