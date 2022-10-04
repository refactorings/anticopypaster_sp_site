import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Links from "./Links";
import Home from "./Home";
import {Fragment} from 'react';
import Navbar from './components/Navbar';

const App = () => {
  return(
      <Router>
        <Fragment>
          <Navbar/>
          <Routes>
              <Route exact path='/' element={<Home/>}>
              </Route>
              <Route exact path="/links" element={<Links/>}>
              </Route>
          </Routes>
        </Fragment>
      </Router>
  );
}

export default App;