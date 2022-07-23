import React from 'react';
import './contador.css';

function Contador(props) {
  return (
    <div className='contador'>
      <p> {props.text} </p>
    </div>
  )
}

export default Contador;