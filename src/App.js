import logo from './logo.svg';
import './App.css';
import Intro from './components/intro/Intro';
import About from './components/About/About';
import './root.css'
// import "rsuite/dist/styles/rsuite-default.css";

function App() {
  return (
    <div className="App">
      <div id="content">
      <Intro></Intro>
      <About/>
      </div>
      
   
    </div>
  );
}

export default App;
