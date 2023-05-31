import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Banner from './Banner';
import About from './About';
import Home from './Home';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
       <Router>
        <Home />
        <About /> 
        <Main />
        <Footer />
        {/* <Banner />
         <Header />
         */}
         {/* Your other components and routes go here */}
       </Router>
  );
}
export default App;
