import logo from './logo.svg';
import './App.css';
import Display from './Components/Display';
import Hello from './Components/Hello';
import CricketProvider from './Context/CricketProvider';
import Login from './Components/Login';
import Profile from './Components/Profile'
//step4

function App() {
  return (
  <div>
    {/* <Display/>
    <Hello/> */}
    <Login/>
    <Profile/>

  </div>
    
  
  );
}

export default App;


// one way of accesing CricketProvider children
{/* <CricketProvider>
<Display/>
</CricketProvider> */}
