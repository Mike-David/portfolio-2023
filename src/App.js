import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Banner from './Banner';
import About from './About';
import Home from './Home';

function App() {
  return (
       <Router>
        <Home />
        {/* <Banner />
         <Header />
         <About /> */}
         {/* Your other components and routes go here */}
       </Router>
  );
}
export default App;
