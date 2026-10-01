import { useState } from "react";

const unidades = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
const especiales = ["diez", "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve"];
const veintes = ["veinte", "veintiuno", "veintidós", "veintitrés", "veinticuatro", "veinticinco", "veintiséis", "veintisiete", "veintiocho", "veintinueve"];
const decenas = ["", "", "", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
const centenas = ["", "ciento", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"];

function menorDeCien(n) {
  if (n < 10) return unidades[n];
  if (n < 20) return especiales[n - 10];
  if (n < 30) return veintes[n - 20];

  const d = Math.floor(n / 10);
  const u = n % 10;
  return u === 0 ? decenas[d] : `${decenas[d]} y ${unidades[u]}`;
}

function numeroALetras(n) {
  if (!Number.isInteger(n) || n < 1 || n > 1000) {
    return "Escribe un numero entero entre 1 y 1000";
  }
  if (n === 1000) return "mil";
  if (n === 100) return "cien";

  const c = Math.floor(n / 100);
  const resto = n % 100;

  if (c === 0) return menorDeCien(resto);
  if (resto === 0) return centenas[c];
  return `${centenas[c]} ${menorDeCien(resto)}`;
}

export default function Traductor() {
  const [numero, setNumero] = useState("");

  return (
    <div>
      <h2>Traductor de numeros a letras</h2>
      <input
        type="number"
        placeholder="Del 1 al 1000"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
      />
      {numero !== "" && <p>{numeroALetras(Number(numero))}</p>}
    </div>
  );
}