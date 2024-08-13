import { useRef, useState } from "react";

function Game() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  const ref9 = useRef(null);

  const [turn, setTurn] = useState(true); // to calculate turn
  const count = useRef(0); // to count filled boxes
  const isWin = useRef(false);
  const winnerValue = useRef("");
  const ref = [ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9];

  const boxFilled = () => {
    ref.forEach((val) => {
      if (val.current) {
        val.current.innerHTML = "";
        val.current.disabled = false;
      }
    });
    count.current = 0;
    setTurn(true); // reset to 'X' turn
    isWin.current = false; // reset the winner status
    winnerValue.current = ""; // reset the winner value
  };

  const winner = (win) => {
    winnerValue.current = win;
    ref.forEach((val) => {
      if (val.current) {
        val.current.disabled = true;
      }
    });
  };

  const handleChange = (index) => {
    if (isWin.current || count.current >= 9) {
      boxFilled();
      return;
    }

    if (ref[index].current) {
      ref[index].current.innerHTML = turn ? "X" : "O";
      ref[index].current.disabled = true;
    }

    count.current += 1;
    setTurn(!turn);

    if (isWinner()) {
      console.log("We have a winner!");
    } else if (count.current === 9) {
      console.log("It's a draw!");
    }
  };

  const isWinner = () => {
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let condition of winningConditions) {
      const [a, b, c] = condition;
      if (
        ref[a].current &&
        ref[b].current &&
        ref[c].current &&
        ref[a].current.innerHTML !== "" &&
        ref[a].current.innerHTML === ref[b].current.innerHTML &&
        ref[b].current.innerHTML === ref[c].current.innerHTML
      ) {
        isWin.current = true;
        winner(ref[a].current.innerHTML);
        return true;
      }
    }

    return false;
  };

  return (
    <>
      {!isWin.current && count.current == 9 ? (
        <>
          <div className="text-7xl font-bold text-center text-cyan">
            Game is a draw!
          </div>{" "}
          <div className="flex mt-4  justify-center">
            <button
              className=" justify-center font-bold text-lg  text-cyan border-2 rounded-2xl border-soild  border-darkBlue px-2 bg-darkBlue"
              onClick={boxFilled}
            >
              New Game?
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
      {isWinner() ? (
        <>
          <div className="text-7xl font-bold text-center text-darkBlue ">
            <div className="text-7xl font-bold text-center text-cyan">
              {winnerValue.current}
            </div>
            is the winner player!
          </div>
          <div className="flex mt-4  justify-center">
            <button
              className=" justify-center font-bold text-lg  text-cyan border-2 rounded-2xl border-soild  border-darkBlue px-2 bg-darkBlue"
              onClick={boxFilled}
            >
              New Game
            </button>
          </div>
        </>
      ) : (
        <div className="my-10">
          <div className="flex gap-0.5 my-0.5  justify-center">
            <button
              ref={ref1}
              className="w-24 h-24  text-5xl border-2 rounded border-payneGrey border-solid font-bold text-teaGreen bg-payneGrey"
              onClick={() => handleChange(0)}
            />
            <button
              ref={ref2}
              className="w-24 h-24  text-5xl border-2 rounded border-payneGrey border-solid font-bold text-teaGreen bg-payneGrey"
              onClick={() => handleChange(1)}
            />
            <button
              ref={ref3}
              className="w-24 h-24  text-5xl border-2 rounded border-payneGrey border-solid font-bold text-teaGreen bg-payneGrey"
              onClick={() => handleChange(2)}
            />
          </div>
          <div className="flex gap-0.5 my-0.5 justify-center">
            <button
              ref={ref4}
              className="w-24 h-24  text-5xl border-2 rounded border-payneGrey border-solid font-bold text-teaGreen bg-payneGrey"
              onClick={() => handleChange(3)}
            />
            <button
              ref={ref5}
              className="w-24 h-24  text-5xl border-2 rounded border-payneGrey border-solid font-bold text-teaGreen bg-payneGrey"
              onClick={() => handleChange(4)}
            />
            <button
              ref={ref6}
              className="w-24 h-24  text-5xl border-2 rounded border-payneGrey border-solid font-bold text-teaGreen bg-payneGrey"
              onClick={() => handleChange(5)}
            />
          </div>
          <div className="flex gap-0.5 my-0.5 justify-center">
            <button
              ref={ref7}
              className="w-24 h-24  text-5xl border-2 rounded border-payneGrey border-solid font-bold text-teaGreen bg-payneGrey"
              onClick={() => handleChange(6)}
            />
            <button
              ref={ref8}
              className="w-24 h-24  text-5xl border-2 rounded border-payneGrey border-solid font-bold text-teaGreen bg-payneGrey"
              onClick={() => handleChange(7)}
            />
            <button
              ref={ref9}
              className="w-24 h-24  text-5xl border-2 rounded border-payneGrey border-solid font-bold text-teaGreen bg-payneGrey"
              onClick={() => handleChange(8)}
            />
          </div>
          <div className="flex mt-4  justify-center">
            <button
              className="font-bold text-lg ring-hunterGreen text-grey border-2 rounded-2xl border-soild  border-darkBlue px-2 bg-fullBlue"
              onClick={boxFilled}
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Game;
