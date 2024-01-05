import React from 'react'
import {useState} from 'react';

const Begikai = () => {
    const [laikas, setZodis] = useState ('');

  return (
    <div>
        <h4>Pirmas Bėgikas</h4>
        <input id='pirmas-begikas' type="number" min="1" value={laikas}/>
        <h4>Antras Bėgikas</h4>
        <input type="number"/>
        <p></p>
    </div>
  )
}

export default Begikai