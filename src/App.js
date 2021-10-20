import { Route } from "react-router-dom";
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import PrivateRoute from './PrivateRoute'
function App() {
  return (
    <div className="App">
      <PrivateRoute path="/" component={Dashboard} isAuthenticated={true} exact />
      <Route path="/login" component={Login} exact />
    </div>
  );
}

export default App;
