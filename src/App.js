import logo from './logo.svg';
import './App.css';
import Intro from './components/intro/Intro';
import About from './components/About/About';
import './root.css'
import JobtList from './components/jobList/JobtList';
import Project from './components/project/Project';
import Experience from './components/Experience/Experience';
// import "rsuite/dist/styles/rsuite-default.css";

function App() {
  return (
    <div className="App">
      <div id="content">
      <Intro></Intro>
      <About/>
      <Experience></Experience>
      <Project></Project>
     
      </div>
      
   
    </div>
  );
}

export default App;
