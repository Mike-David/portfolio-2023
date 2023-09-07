import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import InsertNameHere from './components/InsertNameHere/InsertNameHere';
import FooterNav from './components/Footer/Footer';


function App(props) {

  // way to Create Routes using the component tree structure 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} /> 
          <Route path="insertNameHere/InsertNameHere" element={<InsertNameHere />} />    
      </Route>
    )
  )
  return (<RouterProvider router={router}/>);
}
//structure everthing to your routing that isnt finding routes - can put navbar system 
const Root = () => {
  return <>
    <div>
      <Navigation />
      <Outlet />
      <FooterNav />
    </div>
    </>
}
export default App;
