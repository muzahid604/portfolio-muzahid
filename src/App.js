import Banner from "./Component/Banner/Banner";
import Navbar from "./Component/Navbar/Navbar";
import './App.css'
import About from "./Component/About/About";
function App() {
  return (
    <>
      <div className="header-bg">
        <Navbar />
        <Banner />
        <About />
      </div>
    </>
  );
}

export default App;
