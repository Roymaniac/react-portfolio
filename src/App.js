import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import About from "./components/About";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Section from "./components/section";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
        <Hero />
      </div>
      <About />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
