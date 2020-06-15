import React from 'react';

function Winner(props) {

  return (
    <>
      <h3 style={{ color: 'white' }}>The winner is: {props.playero}</h3>
    </>
  )
}

export default Winner;