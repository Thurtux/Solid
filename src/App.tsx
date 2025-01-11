import { lazy } from "solid-js";
import { Router, Route } from "@solidjs/router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";


// Importando páginas
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const ProdCard = lazy(() => import("./pages/ProdCard"));


export default function App() {
  return (
    <div class="flex flex-col min-h-screen bg-stone-950">
      <Navbar />
      <main class="flex-grow">
        <Router>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Router>
      </main>
      <ProdCard/>
      <Footer />
    </div>
  );
}
