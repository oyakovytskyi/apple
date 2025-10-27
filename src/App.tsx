import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ProductViewer } from "./components/ProductViewer";
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
    </main>
  );
}

export default App;
