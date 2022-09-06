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
import WriteBlog from './components/WriteBlog';
import FRC from './components/FRC';
import Teknofest from './components/Teknofest';
import Members from './components/Members';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import VisionMission from './components/Vision-Mission';

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
            <Route exact path='/members' exact element={
              <Members />
            } />
            <Route exact path='/vision-mission' exact element={
              <VisionMission />
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
            <Route path='/blog/:blogname' element={
              <Blog />
            } />
            <Route exact path='/writeblog' exact element={
              <WriteBlog />
            } />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
