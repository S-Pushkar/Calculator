import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Ans from './Ans.js';
import Entry from './Entry';
import { Link, Route, Routes } from 'react-router-dom';
import AboutMe from './AboutMe';
import HomePage from './HomePage';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App(){
    // const [out, changeOut] = useState("");
    // const [inp, changeInp] = useState("");
    // function fun(a){
    //   let s = inp + a;
    //   changeInp(s);
    // }
    // function cls(){
    //   changeInp("");
    //   changeOut("");
    //   document.getElementsByTagName("input")[0].focus();
    // }
    // function del(){
    //   let x = "";
    //   if(inp.length > 0)
    //     x = inp.slice(0, inp.length - 1);
    //   changeInp(x);
    // }
    // function calc(){
    //   const s = inp;
    //   try{
    //     changeOut(eval(s));
    //   }
    //   catch(err){
    //     alert("Please enter correct input.");
    //     changeInp("");
    //     changeOut("");
    //   }
    // }
    return (
      <>
        <div className='nav'>
          <Link className='Link' id='home' to={'/'}>Calculator</Link>
          <Link className='Link' id='about' to={'/about-me'}>About</Link>
        </div>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/about-me' element={<AboutMe />} />
        </Routes>
      </>
    );
}

export default App;
