import React, { useState } from 'react';
import Display from './components/Display';
import Tecla from './components/Tecla';

const App = () => {
  const [display, setDisplay] = useState('0');
  const [valorAnterior, setValorAnterior] = useState(null);
  const [operacion, setOperacion] = useState(null);

  const borrarDisplay = () => {
    setDisplay('0');
    setValorAnterior(null);
    setOperacion(null);
  };

  const pulsar = (x) => {
    if (!isNaN(x) || x === ',') {
      setDisplay(display === '0' ? x : display + x);
    } else if (x === 'C') {
      borrarDisplay();
    } else if (x === '=') {
      calcular();
    } else {
      setValorAnterior(display);
      setOperacion(x);
      setDisplay('0');
    }
  };

  const calcular = () => {
    if (valorAnterior === null || operacion === null) return;
    const valorActual = parseFloat(display.replace(',', '.'));
    const valorPrevio = parseFloat(valorAnterior.replace(',', '.'));
    let resultado;

    switch (operacion) {
      case '+':
        resultado = valorPrevio + valorActual;
        break;
      case '-':
        resultado = valorPrevio - valorActual;
        break;
      case '*':
        resultado = valorPrevio * valorActual;
        break;
      case '/':
        resultado = valorPrevio / valorActual;
        break;
      default:
        return;
    }

    setDisplay(resultado.toString().replace('.', ','));
    setValorAnterior(null);
    setOperacion(null);
  };

  const teclas = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', ',', '=', '+',
    'C'
  ];

  return (
    <div className="calculadora">
      <Display contenido={display} />
      <div className="teclado">
        {teclas.map((tecla, index) => (
          <Tecla key={index} valor={tecla} pulsar={pulsar} />
        ))}
      </div>
    </div>
  );
};

export default App;
