import { useState } from "react";
import getRandomArray from "../utils/get-random-array";
import bubbleSort from "../sorts/bubble-sort";

const DEFAULT_ARRAY_SIZE = 40;

function App() {
  const [array, setArray] = useState(() =>
    getRandomArray({ length: DEFAULT_ARRAY_SIZE })
  );

  function handleNewArray() {
    setArray(getRandomArray({ length: DEFAULT_ARRAY_SIZE }));
  }

  function handleSortArray() {
    setArray(bubbleSort({ originalArray: array }));
  }

  return (
    <main className="max-w-screen-sm mx-auto px-4 text-zinc-900">
      <h1 className="py-4 text-4xl font-black">Sort Visualizer</h1>
      <section className="mt-2 flex flex-col gap-6">
        {/* TODO: remove idx as key */}
        <div className="h-[400px] gap-1 flex">
          {array.map((value, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-t from-blue-700 to-blue-500 rounded flex-1"
              style={{ height: `${value}%` }}
            />
          ))}
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleNewArray}
            className="px-6 py-2 grid uppercase flex-1 place-items-center bg-gradient-to-t from-blue-700 to-blue-500 text-white font-bold rounded"
          >
            Create new array
          </button>
          <button
            onClick={handleSortArray}
            className="px-6 py-2 grid uppercase flex-1 place-items-center bg-gradient-to-t from-blue-700 to-blue-500 text-white font-bold rounded"
          >
            Sort array
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
