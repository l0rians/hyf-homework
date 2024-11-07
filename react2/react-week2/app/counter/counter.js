"use client";
import { useCounterContext } from "./CounterContext";

export default function Counter() {
  const { state, dispatch } = useCounterContext();

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold">Counter: {state.count}</h1>
      <div className="flex gap-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => dispatch({ type: "increment" })}
        >
          +
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => dispatch({ type: "decrement" })}
        >
          -
        </button>
      </div>
    </div>
  );
}
