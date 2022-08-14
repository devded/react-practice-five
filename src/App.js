import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
function App() {
  return (
    <div className="App">
      <PrivateRoute path="/" component={Dashboard} exact />
      <PublicRoute path="/login" component={Login} exact />
    </div>
  );
}

export default App;
