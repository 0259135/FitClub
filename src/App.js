import './App.css';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Plans from './Components/Plans/Plans';
import Program from './Components/Program/Program';
import Reasons from './Components/Reasons/Reasons';
import Testimonial from './Components/Testimonial/Testimonial';
function App() {
  return (
    <div className="App">
          <Hero/>
          <Program/>
          <Reasons/>
          <Plans/>
          <Testimonial/>
          <Footer/>
    </div>
  );
}
export default App;
