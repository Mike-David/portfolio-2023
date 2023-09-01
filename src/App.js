import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Projects from './components/Projects/Projects';
import FooterNav from './components/Footer/Footer';
import InsertNameHere from './components/InsertNameHere/InsertNameHere';


function App() {
  return (
       <Router>
        
          <Home />
          <ImageGallery />
          <Services />
          <Projects />
          <FooterNav />
          <Routes>
            <Route path="/insertnamehere" element={<InsertNameHere />} />
          </Routes>
       </Router>
  );
}
export default App;
