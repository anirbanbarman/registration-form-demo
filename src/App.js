import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SignIn from './components/signInForm';
import SignUp from './components/signupForm';
import UserDashboard from './components/userDashboard';

function App() {
  return (
    <div>
       <Router basename="/">
      <div>
       <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/dashboard">
          <UserDashboard/>
          </Route>
         
        </Switch>
      </div>
    </Router>

    </div>

  );
}

export default App;
