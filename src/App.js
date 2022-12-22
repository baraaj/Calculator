import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import Calcul from './components/CalculComponent/Calcul';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import PeterNumber from './components/PeterNumber/PeterNumber';
import Navbar from './components/Navbar/navbar';
import Graph from './components/Graph/Graph';
function App() {
  return (
    <BrowserRouter>
     
    <Navbar/>
    <Routes>
    <Route path="/Calcul" element={<Calcul/>} exact />
    <Route path="/PeterNumber" element={<PeterNumber/>} exact />
    <Route path="/Graph" element={<Graph/>} exact />
    
    </Routes>
 
    </BrowserRouter>
  );
}

export default App;
