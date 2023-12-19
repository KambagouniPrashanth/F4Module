import './App.css';
import './style.css';
import Hello from './Components/Hello';
import AboutIphone from './Components/AboutIphone';



function App() {
  return (
    <div>
      <Hello/>
      
      {/* <Hello>
        <AboutIphone/>

      </Hello> */}
      <Hello name="Mac Book Pro">
        <p>MRP:  149,900</p>
       


      </Hello>
      
      <Hello>
        <p>MRP:  149,900</p>
        <p>color Black</p>
      </Hello>
      
      <Hello>
         <p>MRP:  149,900</p>
        <p>color Black</p>
        <p>Proceesor i5</p>
      </Hello>

    </div>
  );
}

export default App;
