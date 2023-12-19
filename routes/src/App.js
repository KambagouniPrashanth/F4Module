import './App.css';
import './style.css';

import About from './Pages1/About';
import Home from './Pages1/Home';
import Blog from './Pages1/Blog';
import Context from './Pages1/Context';
//
import {Routes,Route} from 'react-router-dom'
import Navbar from './Pages1/Navbar';
import React,{useState} from 'react';
import Apple from './Pages2/Apple';
import Brand from './Pages2/Brand';
import Samsung from './Pages2/Samsung';
import Nokia from './Pages2/Nokia';
import Navbar1 from './Pages2/Navbar1';

function App() {
  return (
   <div>
      


<Routes>
<Route path="/" element={<Navbar/>}>
    <Route path="" element={<Home/>}/>

    <Route path="/blog" element={<Blog/>}/>
    <Route path="/context" element={<Context/>}/>
    <Route path="/about" element={<About/>}/>
 </Route>

<Route path="/brand" element={<Navbar1/>}>
        <Route path="" element={<Brand/>}/>
        {/* by default this will display first */}

        <Route path="apple" element={<Apple/>}/>
        <Route path="samsung" element={<Samsung/>}/>
        <Route path="nokia" element={<Nokia/>}/>
</Route>
    


</Routes>

    
    

   </div>
  );
}

export default App;

/* <Navbar/>

   <Routes>
    <Route path="/" element={<Home setCount={setCount}/>}/>
    <Route path="/blog" element={<Blog count={count} setCount={setCount}/>}/>
    <Route path="/context" element={<Context/>}/>
    <Route path="/about" element={<About count={count}/>}/>

   </Routes> */
