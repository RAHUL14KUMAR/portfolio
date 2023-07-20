import logo from './logo.svg';
import './App.css';
import Section from './component/SectionBody/section'
import About from './component/About/About'
// import Carousel from './component/Carousel/Carousel'
import Footer from './component/Footer/Footer'
import Footer2 from './component/Footer/Footer2'
function App() {
  return (
    <div className="App">
     <Section/>
     <About/>
     {/* <Carousel/> */}
     <Footer/>
     <Footer2/>
    </div>
  );
}

export default App;
