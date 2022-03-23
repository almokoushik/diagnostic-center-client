import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import NotFound from './pages/NotFound/NotFound';
import Users from './pages/Users/Users';
import Appointment from './pages/Appointment/Appointment/Appointment';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import DashboardHome from './pages/Dashboard/DashboradHome/DashboardHome';
import AddAdmin from './pages/Dashboard/AddAdmin/AddAdmin';
import AddDoctor from './pages/Dashboard/AddDoctor/AddDoctor';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>

            <Route path="/" element={<Home></Home>}></Route>

            <Route path="/home" element={<Home></Home>}></Route>


            <Route path="/about" element={<About></About>}></Route>

            <Route path="/services" element={<Services></Services>}></Route>

            <Route path="/users" element={<Users></Users>}></Route>

            <Route path="/appointment" element={
              <PrivateRoute>
                <Appointment></Appointment>
              </PrivateRoute>
            }>
            </Route>


            <Route path="/login" element={<Login></Login>}></Route>

            <Route path="dashboard/*" element={
              <PrivateRoute>
                <Dashboard>
                </Dashboard>
              </PrivateRoute>
            }>
            </Route>


            <Route path="/register" element={<Register></Register>}>
            </Route>

            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
