import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Home/Home';
import SportDetails from './SportDetails/SportDetails';
function App() {
  return (
    <>
     <Router>
       <Switch>
       <Route path='/home'>
             <Home></Home>
         </Route>
         <Route exact path='/'>
             <Home></Home>
         </Route>
         <Route path='/sportDetails/:idTeam'>
             <SportDetails></SportDetails>
         </Route>
       </Switch>
     </Router>
      
    </>
  );
}

export default App;
