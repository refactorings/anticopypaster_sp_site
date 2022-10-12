import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Documentation from "./page-components/Documentation";
import Home from "./page-components/Home";
import Team from "./page-components/Team";
import Sponsor from "./page-components/Sponsor"
import {Fragment} from 'react';
import Navbar from './page-components/Navbar';
import FourUps from "./page-components/FourUps";
import TimeTracking from "./page-components/TimeTracking";

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