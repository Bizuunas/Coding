import React, { useState } from 'react'
import RinktisNauja from './RinktisNauja'

const Skaiciai = () => {
    const [tekstas, setTekstas] = useState('kol kas nepasirinkote');

    const apdorotiPasikeitima = (pasirinkimas) => {
        setTekstas(pasirinkimas)
    }
  return (
    <div>
        <h2>Skaiciai</h2>
        <RinktisNauja pasikeitimas={apdorotiPasikeitima}/>
        <p>Jūs pasirinkote: {tekstas}</p>
    </div>
  )
}

export default Skaiciai