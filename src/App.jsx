import Navbar from "./Components/Navbar";
import About from "./Components/About";
import './assets/styles/color.css';
import Skills from "./Components/Skills";
import Courses from "./Components/Courses";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";
import Education from './Components/Education';
import FloatingButton from "./Components/FloatingButton";


function App() {
  return (
    <div>
      <Navbar />
      <About/>
      <Education/>
      <Skills/>
      <Courses/>
      <Services/>
      <Portfolio/>
      <Footer/>
      
      <FloatingButton/>
    
    </div>
  );
}

export default App;
