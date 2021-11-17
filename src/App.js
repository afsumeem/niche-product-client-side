import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';
import Home from './pages/Home/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Login from './pages/Login/Login/Login';
import ExploreBrands from './pages/ExploreBrands/ExploreBrands/ExploreBrands';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import PurchaseProducts from './pages/PurchaseProducts/PurchaseProducts';
import Register from './pages/Login/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import About from './pages/About/About';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>


          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/home">
              <Home></Home>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>

            <Route path="/explore">
              <ExploreBrands></ExploreBrands>
            </Route>

            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            <PrivateRoute path="/purchase/:id">
              <PurchaseProducts></PurchaseProducts>
            </PrivateRoute>


            <Route path="*">
              <NotFound></NotFound>
            </Route>


          </Switch>

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
