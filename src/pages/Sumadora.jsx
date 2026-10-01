 import { useState } from "react";

export default function Sumadora() {


  const [number1, setNumber1] = useState("");

  const [number2, setNumber2] = useState("");

  const [resultado, setResultado] = useState("");


  return <div><h2>Sumadora</h2>

  <div style={{ display: "flex", gap: "1rem", justifyContent: "center", alignItems: "center" }}>
  
  <p>Ingrese dos números para sumarlos:</p>
  <input
  type="text"
  value={number1} 
  onChange={(e) => setNumber1(e.target.value)}

  
 

/>


  <input
  type="text"
  value={number2}
  onChange={(e) => setNumber2(e.target.value)}

  
/>
  

<button onClick={() => setResultado(Number(number1) + Number(number2))}>Sumar</button>

</div>





<p>resultado: {resultado}</p>
   </div>;




}



  
  
 






