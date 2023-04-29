import React, { useState, useEffect } from "react";
import Header from "./Header";
let isFirstRender=true;

const Main = (props) => {
  // const [info,setInfo]=useState({randnum1:1,randnum2:2,})
  const [randnum1, setRandnum1] = useState();
  const [randnum2, setRandnum2] = useState();
  const [count, setCount] = useState(0);
  const[rotate,setRotate]=useState(false)
  const [msg, setMsg] = useState();



  function handleClick() {
 
    setRandnum1(Math.floor(Math.random() * 6) + 1);
    setRandnum2(Math.floor(Math.random() * 6) + 1);
setRotate(true)
setTimeout(() => {
setRotate(false)
    
},500);

  }

useEffect(()=>{

    setCount(count+1)
    console.log(randnum1,randnum2,msg,count);

    setMsg(() => {
        if (randnum1 > randnum2) {
          return "🔥 Player 1 Wins 🔥";
        }
          else if(randnum2>randnum1){
          return "🔥 Player 2 Wins 🔥"
          }
          else{
              return '😑 Draw 😑'
          }
        }
    );
},[randnum1,randnum1])

  return (
    <div>
    <Header msg={msg} count={count}/>
   
      <div className="main">
        <div className="left">
          <h1>Player 1</h1>
          <img
            src={require(`../images/dice${randnum1 ? randnum1 : 6}.png`)}
            alt="dice "
            className={rotate ? 'rotate':undefined}
          />
        </div>
        <div className="right">
          <h1>Player 2</h1>
          <img
            src={require(`../images/dice${randnum2 ? randnum2 : 1}.png`)}
            alt="dice"
            className={rotate ? 'rotate':undefined}
          />
        </div>
      </div>
      <button className="btn btn-lg btn-light roll" onClick={()=>{handleClick();
      
      }}>
        Roll
      </button>
    </div>
  );
};

export default Main;
