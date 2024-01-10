import './Receptai.css'
import React from 'react'
import Vistiena from '../assets/Vistiena.png'
import Makaronai from '../assets/Makaronai.png'
import Tortas from '../assets/Tortas.png'
import Check from '../assets/Check.svg'
import { useState } from 'react'


const Receptai = () => {
    const [kortelesNr, setKortelesNr] = useState(1);

    const kortelesNrKlase = (kuri) => {
        if (kuri == kortelesNr) {
            return 'kortele active'
        }
        return 'kortele'
    }

    return (
        <>
            <div className="konteineris">
                <h1>Pasirinkite receptą:</h1>
                <div className='visiReceptai'>
                    <div className={kortelesNrKlase(1)} onClick={() => setKortelesNr(1)}>
                        <div className='tick'><img className='check' src={Check} alt="" /></div>
                        <img className='images' src={Vistiena} alt="" />
                        <div>
                            <p className='pavadinimas'>Vištiena su salotom</p>
                            <p className='tekstas'>
                                Amet et at aliquam duis ut morbi
                                turpis. Quis cursus tincidunt risus
                                purus faucibus elit ut. Pellentesque
                                montes.
                            </p>
                        </div>
                    </div>
                    <div className={kortelesNrKlase(2)} onClick={() => setKortelesNr(2)}>
                        <div className='tick'><img className='check' src={Check} alt="" /></div>
                        <img className='images' src={Tortas} alt="" />
                        <div>
                            <p className='pavadinimas'>Tortas su melynem</p>
                            <p className='tekstas'>
                                Amet et at aliquam duis ut morbi
                                turpis. Quis cursus tincidunt risus
                                purus faucibus elit ut. Pellentesque
                                montes.
                            </p>
                        </div>
                    </div>
                    <div className={kortelesNrKlase(3)} onClick={() => setKortelesNr(3)}>
                        <div className='tick'><img className='check' src={Check} alt="" /></div>
                        <img className='images' src={Makaronai} alt="" />
                        <div>
                            <p className='pavadinimas'>Makaronai su mesa</p>
                            <p className='tekstas'>
                                Amet et at aliquam duis ut morbi
                                turpis. Quis cursus tincidunt risus
                                purus faucibus elit ut. Pellentesque
                                montes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Receptai