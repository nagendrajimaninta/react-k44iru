import React,{useState} from "react";
import "./style.css";
function Counter(props){
  let statrtVal=0;
  if(props.startFrom){
     statrtVal = props.startFrom;
  }
  const [num,updateNum] = useState(statrtVal);
  return (
    <>
    <h1>{num}</h1>
    <button onClick={function(){
      updateNum(num+1)
    }}>Inc</button>
    </>
  );
}
export default function App() {
  return (
    <div>
      <h1>Counter Application</h1>
      <p>Using Functional Component</p>
      <Counter startFrom ={32}/>
      <Counter  /><Counter  /><Counter  />
      <Counter startFrom ={100}/>
    </div>
  );
}
