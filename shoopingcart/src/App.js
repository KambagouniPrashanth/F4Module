import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Mycart from './Components/Mycart';
import React,{useState} from 'react';
import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar';

function App() {
  
  const[selectedproduct,setSelectedProduct]=useState([])
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Navbar/>}>
        <Route path="/home" element={<Home setSelectedProduct={setSelectedProduct} selectedproduct={selectedproduct}/>}/>
        <Route path="/mycart" element={<Mycart selectedproduct={selectedproduct}/>}/>

        </Route>
        
      </Routes>

      {/* <Home setSelectedProduct={setSelectedProduct} selectedproduct={selectedproduct}/>
       {
        selectedproduct && selectedproduct.map((product)=>(
          <Mycart title={product.title} thumbnail={product.thumbnail} price={product.price}/>
        ))
       } */}
     
      
    </div>
  );
}

export default App;
