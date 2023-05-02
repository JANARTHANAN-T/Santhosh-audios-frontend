import "./App.css";
import {BrowserRouter as Router} from 'react-router-dom'
import AllRoutes from "./AllRoutes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
   <Router>
      <Navbar />
      <AllRoutes />
      <Footer />
   </Router>

    </div>
  );
}

export default App;
