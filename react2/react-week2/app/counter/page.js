import { CounterProvider } from "./CounterContext";
import Counter from "./counter";

export default function CounterPage() {
  return (
    <CounterProvider>
      <div className="flex flex-col items-center">
        <h1 className="font-bold">Counter Page</h1>
        <Counter />
      </div>
    </CounterProvider>
  );
}
