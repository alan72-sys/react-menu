import { useState } from "react";

export default function Tabla() {
  const [numero, setNumero] = useState("");
  const filas = [];

  for (let i = 1; i <= 13; i++) {
    filas.push(
      <p key={i}>
        {numero} x {i} = {Number(numero) * i}
      </p>
    );
  }

  return (
    <div>
      <h2>Tabla de multiplicar</h2>
      <input
        type="number"
        placeholder="Escribe un numero"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
      />
      {numero !== "" && filas}
    </div>
  );
}