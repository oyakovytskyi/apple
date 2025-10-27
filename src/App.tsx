import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ProductViewer } from "./components/ProductViewer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ShowCase } from "./components/ShowCase";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <ShowCase />
    </main>
  );
}

export default App;
