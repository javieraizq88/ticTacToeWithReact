import React from 'react';

const styleTop = {
  backgroundColor: '#5B5653',
  width: "50%",
  height: "32rem",
  margin: "5% auto",
}

const styleChoosePlayer = {
  backgroundColor: '#4A453F',
  width: "70%",
  height: "14rem",
  margin: "12% auto",
  padding: "1rem"
}

const styleButtonX = {
  backgroundColor: '#3E3732',
  border: "none",
  color: "yellow",
  marginTop: "10px",
  width: "30%",
  marginRight: "10px"
}

const styleButtonO = {
  backgroundColor: '#3E3732',
  border: "none",
  color: "blue",
  width: "30%",
  marginTop: "10px",
  marginLeft: "10px"
}

const styleInsideButton = {
  fontSize: "40px",
}


function Board(props) {

  return (
    <>
      <h3 style={{ color: 'white' }}></h3>
      <div style={styleChoosePlayer}>
        <h4 style={{ color: 'white' }}>Elige una opción y pon tu nombre </h4>
        <form>
          <input type="text" className="mr-2" onChange={(y) => props.handleInput(y)} id="input1" placeholder="      Nombre jugador 1"></input>
          <input type="text" onChange={(y) => props.handleInput(y)} id="input2" placeholder="      Nombre jugador 2"></input>
          <br />
          <button type="button" className="mr-5" style={styleButtonX} id="btnX" onClick={(e) => props.select(e)}><span id="spanX" style={styleInsideButton}>X</span></button>
          <button type="button" className="mr-5" style={styleButtonO} id="btnO" onClick={(e) => props.select(e)}><span id="spanO" style={styleInsideButton}>0</span></button>
        </form>
      </div>
    </>

  )
}


export default Board;