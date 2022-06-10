import Banner from "./Component/Banner/Banner";
import Navbar from "./Component/Navbar/Navbar";
import './App.css'
import About from "./Component/About/About";
import Projects from "./Component/Projects/Projects";
import Footer from "./Component/Footer/Footer";
function App() {
  return (
    <>
      <div className="header-bg">
        <Navbar />
        <Banner />
        <About />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
