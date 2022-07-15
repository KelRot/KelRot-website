import './App.css';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Info from './components/Info';
import Footer from './components/Footer';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Intro />
      <Navbar />
      <Routes>
          <Route exact path='/' exact element={
            <div>
              <Slider />
              <Info />
            </div>
          } />
          <Route exact path='/about' exact element={
            <About />
          } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;