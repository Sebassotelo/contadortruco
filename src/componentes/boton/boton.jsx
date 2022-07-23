import React from 'react';
import './boton.css';

function Boton(props) {
  return (
    <div className='boton' onClick={props.func}>
        <p>{props.text} </p>
    </div>
  )
}

export default Boton;