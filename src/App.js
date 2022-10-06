import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Documentation from "./Documentation";
import Home from "./Home";
import Team from "./Team";
import Sponsor from "./Sponsor"
import {Fragment} from 'react';
import Navbar from './components/Navbar';
import FourUps from "./FourUps";
import TimeTracking from "./TimeTracking";

const App = () => {
  return(
      <Router>
        <Fragment>
          <Navbar/>
          <Routes>
              <Route exact path='/anticopypaster/' element={<Home/>}>
              </Route>
              <Route exact path="/anticopypaster/documentation" element={<Documentation/>}>
              </Route>
              <Route exact path="/anticopypaster/fourups" element={<FourUps/>}>
              </Route>
              <Route exact path="/anticopypaster/timetracking" element={<TimeTracking/>}>
              </Route>
              <Route exact path="/anticopypaster/team" element={<Team/>}>
              </Route>
              <Route exact path="/anticopypaster/sponsor" element={<Sponsor/>}>
              </Route>
          </Routes>
        </Fragment>
      </Router>
  );
}

export default App;