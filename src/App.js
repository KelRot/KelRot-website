import './App.css';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Info from './components/Info';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Intro />
      <Navbar />
      <Slider />
      <Info />
      <Footer />
    </div>
  );
}

export default App;