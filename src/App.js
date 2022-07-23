import React , { useState , eseEffect, useEffect} from 'react';
import './App.css';
import Boton from './componentes/boton/boton';
import Contador from './componentes/contador/contador';

function App() {

const [juego, setJuego] = useState(30);
const [ellos, setEllos] = useState(0);
const [nos, setNos] = useState(0);
const [ganador, setGanador] = useState('');
const [open, setOpen] = useState(false);

const a15 = () => {
  setJuego(15)
}

const a30 = () => {
  setJuego(30)
}


useEffect (() => {
  if(nos < juego) {
    setOpen(false);
  }
  if(ellos < juego) {
    setOpen(false);
  }
  
  if(nos >= juego){
    setNos(juego);
    setGanador('NOS');
    setOpen(true);
  }
  if(ellos >= juego){
    setEllos(juego);
    setGanador('ELLOS');
    setOpen(true);
  }



})


const ronda = () => {
  setEllos(ellos + 1)
} 

const truco = () => {
  setEllos(ellos + 2)
} 

const reTruco = () => {
  setEllos(ellos + 3)
} 

const trucoCuatro = () => {
  setEllos(ellos + 4)
} 

const envido = () => {
  setEllos(ellos + 2)
} 

const realEnvido = () => {
  setEllos(ellos + 3)
} 

const faltaEnvido = () => {
  let falta = juego - ellos;
  setEllos(ellos + falta)
} 

const flor = () => {
  setEllos(ellos + 3)
} 

const restar = () => {
  if(ellos > 0){
    setEllos(ellos - 1)
  }
  
} 

const reiniciar = () => {
  let reinicio = ellos;
  setEllos(ellos - reinicio)
} 


const nosRonda = () => {
  setNos(nos + 1)
} 

const nosTruco = () => {
  setNos(nos + 2)
} 

const nosReTruco = () => {
  setNos(nos + 3)
} 

const nosTrucoCuatro = () => {
  setNos(nos + 4)
} 

const nosEnvido = () => {
  setNos(nos + 2)
} 

const nosRealEnvido = () => {
  setNos(nos + 3)
} 

const nosFaltaEnvido = () => {
  let falta = juego - nos;
  setNos(nos + falta)
} 

const nosFlor = () => {
  setNos(nos + 3)
} 

const nosRestar = () => {
  if(nos > 0){
    setNos(nos - 1)
  }
} 

const nosReiniciar = () => {

  let reinicio = nos;
  setNos(nos - reinicio)
} 



  return (
<div className="body" >
    <p className='ganador' style={{display: open ? 'block' : 'none'}}>GANO {ganador} </p>
    <div className="app">
      <div className='app__title'>
      <h1 className='app__h1'>Contador de Truco</h1>
      
      <Boton text= 'A 15' func={a15}/>
      <Boton text= 'A 30' func={a30}/>
      </div>
        
        
      <div className='app__container'>
      <p className='app__p'>Estan jugando a {juego} </p>
        <div className='app__contador nos'>
         <Contador text={nos}/>
        </div>

        <div className='app__contador ellos'>
          <Contador text={ellos}/>
        </div>

        <div className='app__botones nos'>
        <h3 className='app__ellos_title'>Nos</h3>
         <Boton text= 'Ronda' func={nosRonda}/>
          
          <Boton text= 'Truco' func={nosTruco}/>
          
          <Boton text= 'Re Truco' func={nosReTruco}/>
          
          <Boton text= 'Vale 4' func={nosTrucoCuatro}/>
          
          <Boton text= 'Envido' func={nosEnvido}/>
          
          <Boton text= 'Real Envido' func={nosRealEnvido}/>
          
          <Boton text= 'Falta Envido' func={nosFaltaEnvido}/>
          
          <Boton text= 'Flor' func={nosFlor}/>

          <Boton text= 'Restar 1' func={nosRestar}/>

          <Boton text= 'Reiniciar' func={nosReiniciar}/> 
        </div>

        <div className='app__botones ellos'>

          <h3 className='app__ellos_title'>Ellos</h3>
          
          <Boton text= 'Ronda' func={ronda}/>
          
          <Boton text= 'Truco' func={truco}/>
          
          <Boton text= 'Re Truco' func={reTruco}/>
          
          <Boton text= 'Vale 4' func={trucoCuatro}/>
          
          <Boton text= 'Envido' func={envido}/>
          
          <Boton text= 'Real Envido' func={realEnvido}/>
          
          <Boton text= 'Falta Envido' func={faltaEnvido}/>
          
          <Boton text= 'Flor' func={flor}/>

          <Boton text= 'Restar 1' func={restar}/>

          <Boton text= 'Reiniciar' func={reiniciar}/> 
        </div>
      </div>

      <p className='copy'>Hecho por <span><a href="https://portfolio-tan-delta.vercel.app/" target={'_blank'}>Sebas Sotelo</a></span>. 2022</p>
    </div>
  </div>
  );
}

export default App;
