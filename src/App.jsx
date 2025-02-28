import About from "./components/About";
import Hero from "./components/Hero";

const App = () => {
  return (
    <main className="relative w-screen min-h-screen overflow-x-hidden">
      <Hero />
      <About />

      <section className="z-0 min-h-screen bg-blue-500" />
    </main>
  );
};

export default App;
