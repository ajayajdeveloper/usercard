import './App.css';
import { BrowserRouter, Route } from "react-router-dom"
import Homescreen from "./pages/Homescreen"
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar/>
      <BrowserRouter>
        <Route path="/" exact component={Homescreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;
