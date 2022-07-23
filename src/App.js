import React , { useState } from 'react';
import './App.css';
import Boton from './componentes/boton/boton';
import Contador from './componentes/contador/contador';

function App() {

const [ellos, setEllos] = useState(0);
const [nos, setNos] = useState(0);


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
  let falta = 30 - ellos;
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
  let falta = 30 - nos;
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
    <div className="app">

        <h1>Contador de Truco</h1>
        
      <div className='app__container'>
        <div className='app__contador nos'>
         <Contador text={nos}/>
        </div>

        <div className='app__contador ellos'>
          <Contador text={ellos}
          />
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
  );
}

export default App;
