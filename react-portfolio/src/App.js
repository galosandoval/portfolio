import { About } from "./components/About";
// import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Projects />
      <Skills />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
