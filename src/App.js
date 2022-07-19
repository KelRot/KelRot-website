import './App.css';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Info from './components/Info';
import Footer from './components/Footer';
import About from './components/About';
import Media from './components/Media';
import Sponsors from './components/Sponsors';
import Docs from './components/Docs';
import Blog from './components/Blog';
import FRC from './components/FRC';
import Teknofest from './components/Teknofest'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Intro />
      <Navbar />
      <div style={{
        background: 'rgba(33, 33, 33, 0.8)',
        width: '1080px',
        marginTop: '0'
      }} class='Main'>
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
            <Route exact path='/media' exact element={
              <Media />
            } />
            <Route exact path='/sponsors' exact element={
              <Sponsors />
            } />
            <Route exact path='/frc' exact element={
              <FRC />
            } />
            <Route exact path='/teknofest' exact element={
              <Teknofest />
            } />
            <Route exact path='/docs' exact element={
              <Docs />
            } />
            <Route exact path='/blog' exact element={
              <Blog />
            } />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
