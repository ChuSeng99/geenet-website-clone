import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Plan from "./components/Plan";
import Roaming from "./components/Roaming";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="font-roboto">
      <NavBar />
      <Hero />
      <Plan />
      <Roaming />
      <Footer />
    </main>
  )
}

export default App