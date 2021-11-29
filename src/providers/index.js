import { CounterProvider } from "./Counter";
import { NameProvider } from "./Name";

const Providers = ({ children }) => {
  return (
    <CounterProvider>
      <NameProvider>{children}</NameProvider>
    </CounterProvider>
  );
};

export default Providers;
