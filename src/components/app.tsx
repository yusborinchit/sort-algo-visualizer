import { useState } from "react";
import getRandomArray from "../utils/getRandomArray";

const DEFAULT_ARRAY_SIZE = 30;

function App() {
  const [array, setArray] = useState(() =>
    getRandomArray({ length: DEFAULT_ARRAY_SIZE })
  );

  function handleNewArray() {
    setArray(getRandomArray({ length: DEFAULT_ARRAY_SIZE }));
  }

  return (
    <main className="max-w-screen-sm mx-auto px-4 text-zinc-900">
      <h1 className="py-4 text-4xl font-black">Sort Visualizer</h1>
      <section className="">
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
        <button
          onClick={handleNewArray}
          className="px-6 py-2 grid place-items-center bg-gradient-to-t from-blue-700 to-blue-500 text-white font-bold rounded"
        >
          Create new array
        </button>
      </section>
    </main>
  );
}

export default App;
