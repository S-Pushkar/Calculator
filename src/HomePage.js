import Ans from './Ans.js';
import Entry from './Entry';
import React from 'react';
import { useState } from 'react';

function HomePage(){
    const [out, changeOut] = useState("");
    const [inp, changeInp] = useState("");
    function fun(a){
      let s = inp + a;
      changeInp(s);
    }
    function cls(){
      changeInp("");
      changeOut("");
      document.getElementsByTagName("input")[0].focus();
    }
    function del(){
      let x = "";
      if(inp.length > 0)
        x = inp.slice(0, inp.length - 1);
      changeInp(x);
    }
    function calc(){
      const s = inp;
      try{
        changeOut(eval(s));
      }
      catch(err){
        alert("Please enter correct input.");
        changeInp("");
        changeOut("");
      }
    }
    return (
        <div id="whole">
        <h1 id="header">CALCULATOR</h1>
        <Ans val={out} />
        <Entry val={inp} fun={changeInp}/>
        <div>
          <div id="alm">
              <div id="buttons">
                <div id="nums">
                    <button className="num butt" onClick={() => {fun(9)}}>9</button>
                    <button className="num butt" onClick={() => {fun(8)}}>8</button>
                    <button className="num butt" onClick={() => {fun(7)}}>7</button>
                    <button className="num butt" onClick={() => {fun(6)}}>6</button>
                    <button className="num butt" onClick={() => {fun(5)}}>5</button>
                    <button className="num butt" onClick={() => {fun(4)}}>4</button>
                    <button className="num butt" onClick={() => {fun(3)}}>3</button>
                    <button className="num butt" onClick={() => {fun(2)}}>2</button>
                    <button className="num butt" onClick={() => {fun(1)}}>1</button>
                    <button id="dl" className="butt" onClick={() => del()}>Del</button>
                    <button className="num butt" onClick={() => {fun(0)}}>0</button>
                    <button id="eq" className="butt" onClick={calc}>=</button>
                </div>
                <div id="opes">
                    <button className="ope butt" onClick={() => changeInp(inp + "*")}>X</button>
                    <button className="ope butt" onClick={() => changeInp(inp + "/")}>/</button>
                    <button className="ope butt" onClick={() => changeInp(inp + "+")}>+</button>
                    <button className="ope butt" onClick={() => changeInp(inp + "-")}>-</button>
                </div>
              </div>
          </div>
          <div id="cl-cont" style={{display: "flex",
          justifyContent: "center"}}>
            <button id="cl" className="butt" onClick={() => cls()}>Clear</button>
          </div>
        </div>
      </div>
    );
}

export default HomePage;