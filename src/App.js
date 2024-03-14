import "./App.css";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Cardcontainer from "./components/Cardcontainer.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      
      <ToastContainer position="top-right" />
      
    </div>
  );
}
export default App;
