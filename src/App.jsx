import { useState } from "react";
import MainLayout from "./layouts/MainLayout";
import Grid from "./components/Grid";

function App() {
  const [grid, setGrid] = useState([
    { id: 1, text: "" },
    { id: 2, text: "" },
    { id: 3, text: "" },
    { id: 4, text: "" },
    { id: 5, text: "" },
    { id: 6, text: "" },
    { id: 7, text: "" },
    { id: 8, text: "" },
    { id: 9, text: "" },
  ]);
  const [user, setUser] = useState(true);

  function handlePlay(elementID) {
    const newGrid = grid.map((item) => {
      if (item.id === elementID && !item.text) {
        return { ...item, text: user ? "X" : "O" };
      } else return item;
    });
    setUser(!user);
    setGrid(newGrid);
  }

  function handlePlay(elementID) {
    const newGrid = grid.map((item) => {
      if (item.id === elementID && !item.text) {
        return { ...item, text: user ? "X" : "O" };
      } else return item;
    });

    // check for a winning condition
    const winningCombinations = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9], // rows
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9], // columns
      [1, 5, 9],
      [3, 5, 7], // diagonals
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        newGrid[a - 1].text &&
        newGrid[a - 1].text === newGrid[b - 1].text &&
        newGrid[b - 1].text === newGrid[c - 1].text
      ) {
        // one of the two users has won
        alert(`Player ${newGrid[a - 1].text} wins!`);
        return;
      }
    }

    // check for a draw condition
    if (newGrid.every((item) => item.text !== "")) {
      alert("Draw.");
      return;
    }

    setUser(!user);
    setGrid(newGrid);
  }

  return (
    <MainLayout>
      <Grid grid={grid} handlePlay={handlePlay} />
    </MainLayout>
  );
}

export default App;
