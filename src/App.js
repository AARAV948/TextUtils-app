//import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';


function App() {

  return (
    <>
    <Navbar title  = "Textutils" home = "Home" tutorial = "Tutorial" about = "About"  />
    <Alert alert = "Avoid Multilingual Text"/>
    <div classsName = "container my-3 ">
    <Textform heading = "Enter Text to analyze" />
    <About/>
    </div>
    </>
  );
}


export default App;
