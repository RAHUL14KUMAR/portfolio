import logo from './logo.svg';
import './App.css';
import Section from './component/SectionBody/section'
import About from './component/About/About'
// import Carousel from './component/Carousel/Carousel'
function App() {
  return (
    <div className="App">
     <Section/>
     <About/>
     {/* <Carousel/> */}
    </div>
  );
}

export default App;
