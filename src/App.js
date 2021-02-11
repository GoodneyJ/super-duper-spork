import './css/App.css';
import {Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom' 
import Homepage from './pages/homepage.js'
import Menu from './pages/menu.js'
import Reservations from './pages/reservations.js';



function App() {
  return (
    <div className="App">

        <Router>
          <Switch >
            <Route exact path="/">
              <Redirect to='/home' />
            </Route>
            <Route path='/home' component={Homepage}/>
            <Route path='/menu' component={Menu} />
            <Route path='/reservations' component={Reservations} />
          </Switch>
        </Router>

    </div>
  );
}

export default App;
