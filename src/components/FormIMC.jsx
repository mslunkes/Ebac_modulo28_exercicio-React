    import React, { useState } from "react";

    const FormIMC = () => {
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");
    const [resultado, setResultado] = useState(null);

    const calcularIMC = () => {
        const alturaEmMetros = parseFloat(altura) / 100;
        const imc = (parseFloat(peso) / (alturaEmMetros ** 2)).toFixed(2);
        setResultado(imc);
    };

    const classificarIMC = (imc) => {
        if (imc < 18.5) return "Abaixo do peso";
        if (imc >= 18.5 && imc < 24.9) return "Peso normal";
        if (imc >= 25 && imc < 29.9) return "Sobrepeso";
        if (imc >= 30 && imc < 34.9) return "Obesidade grau 1";
        if (imc >= 35 && imc < 39.9) return "Obesidade grau 2";
        return "Obesidade grau 3";
    };

    return (
        <div>
        <h1>Calculadora de IMC</h1>
        <div>
            <label>
            Altura (em cm):
            <input
                type="number"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                placeholder="Ex: 170"
            />
            </label>
        </div>
        <div>
            <label>
            Peso (em kg):
            <input
                type="number"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                placeholder="Ex: 70"
            />
            </label>
        </div>
        <button onClick={calcularIMC}>Calcular IMC</button>
        {resultado && (
            <div>
            <h2>Resultado</h2>
            <p>Seu IMC: {resultado}</p>
            <p>Classificação: {classificarIMC(resultado)}</p>
            </div>
        )}
        </div>
    );
    };

    export default FormIMC;
