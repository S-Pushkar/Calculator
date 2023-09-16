import logo from './logo.svg';
import './App.css';
import Ans from './Ans.js'
import { useState } from 'react';
import Entry from './Entry';

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
    const [out, changeOut] = useState("");
    const [inp, changeInp] = useState("");
    function setAns(){
      changeOut(inp);
    }
    function fun(a){
      let s = inp + a;
      changeInp(s);
    }
    function cls(){
      changeInp("");
      changeOut("");
    }
    function del(){
      let x = "";
      if(inp.length > 0)
        x = inp.slice(0, inp.length - 1);
      changeInp(x);
    }
    return (
      <div id="whole">
        <Ans val={out} />
        <Entry val={inp} fun={changeInp}/>
        {/* <button onClick={setAns}>Click</button>
        <button id="clear" onClick={() => {
          changeInp("");
          changeOut("");
        }}>Clear</button> */}
        <div>
          <div id="alm">
              <div id="buttons">
                <div id="nums">
                    <button class="num" onClick={() => {fun(9)}}>9</button>
                    <button class="num" onClick={() => {fun(8)}}>8</button>
                    <button class="num" onClick={() => {fun(7)}}>7</button>
                    <button class="num" onClick={() => {fun(6)}}>6</button>
                    <button class="num" onClick={() => {fun(5)}}>5</button>
                    <button class="num" onClick={() => {fun(4)}}>4</button>
                    <button class="num" onClick={() => {fun(3)}}>3</button>
                    <button class="num" onClick={() => {fun(2)}}>2</button>
                    <button class="num" onClick={() => {fun(1)}}>1</button>
                    <button class="ope" onClick={() => changeInp(inp + "+")}>+</button>
                    <button class="num" onClick={() => {fun(0)}}>0</button>
                    <button class="ope" onClick={() => changeInp(inp + "-")}>-</button>
                </div>
                <div id="opes">
                    <button class="ope" onClick={() => changeInp(inp + "*")}>X</button>
                    <button class="ope" onClick={() => changeInp(inp + "/")}>/</button>
                    <button id="eq">=</button>
                    <button id="dl" onClick={() => del()}>Del</button>
                </div>
              </div>
          </div>
          <button id="cl" onClick={() => cls()}>Clear</button>
        </div>
      </div>
    );
}

export default App;
