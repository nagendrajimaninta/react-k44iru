import React,{useState} from "react";
import "./style.css";
function Cartitem(props){
  const {title,qty,price} = props;
     return (
       <div style={{backgroundColor:"lightgreen" ,margin:'20px', display:"flex",justifyContent:"space-around"}}>
         <img  src="https://via.placeholder.com/50" alt="Placeholder"/>
         <p>{title}</p>
         <input value={qty} disabled/>
         <p>Total : {qty * price}</p>
         <button>Remove</button>
       </div>
     );
}
function CartList(props){
  const {items} = props;
  return (
    <div>
  {items.map(function(item){
   const {name,qty,price} = item;
   return <Cartitem key={name} title={name} qty={qty} price={price}/>
  })}
  </div>
  );
}
function Cart(){
  let db =[
    {name:"pants" ,qty:4 ,price:750},
    {name:"shirts" ,qty:5, price:50},
    {name:"socks", qty:2, price:75},
    {name:"belts", qty:2, price:700},
  ];
  return (
    <div>
      <CartList items={db}/>
    </div>
  );
}
export default function App() {
    return(
      <div>
        <h1>First Cart</h1>
        <Cart />
        <h1>Second Cart</h1>
        <Cart />
      </div>
    );
}
