import React from 'react'

const RinktisNauja = (props) => {
    const desimtiesHandler = () => {
        props.pasikeitimas('10');
    }
    const simtoHandler = () => {
        props.pasikeitimas('100');
    }
    const tukstancioHandler = () => {
        props.pasikeitimas('1000');
    }
  return (
    <>
    <button onClick={desimtiesHandler}>10</button>
    <button onClick={simtoHandler}>100</button>
    <button onClick={tukstancioHandler}>1000</button>
    </>
  )
}

export default RinktisNauja