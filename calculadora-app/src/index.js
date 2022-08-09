import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './main/Calculator';
import reportWebVitals from './reportWebVitals';
import Footer from './components/Footer'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <div className='app'>
      <h1>Calculadora</h1>
      <Calculator/>
      <Footer/>
   </div>
);



reportWebVitals();
