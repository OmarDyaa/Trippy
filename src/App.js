import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './Components/routes/Home';
import About from './Components/routes/About';
import Service from './Components/routes/Service';
import Contact from './Components/routes/Contact';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
