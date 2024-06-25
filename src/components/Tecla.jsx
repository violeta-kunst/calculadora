import React from 'react';

const Tecla = ({ valor, pulsar }) => {
  return (
    <button onClick={() => pulsar(valor)}>
      {valor}
    </button>
  );
};

export default Tecla;
