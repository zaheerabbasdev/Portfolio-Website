import Navbar from "./Components/Navbar";
import About from "./Components/About";
import './assets/styles/color.css';
import Skills from "./Components/Skills";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";
import FloatingButton from "./Components/FloatingButton";


function App() {
  return (
    <div>
      <Navbar />
      <About/>
      <Skills/>
      <Services/>
      <Portfolio/>
      <Footer/>
      <FloatingButton/>
    
    </div>
  );
}

export default App;
