import { useState } from "react";
import Vaikinis from "./Vaikinis";

const Tevinis = () => {
    const [tekstas, setTekstas] = useState('kol kas nepasirinkote');

    const apdorotiPasikeitima = (pasirinkimas) => {
        // console.log('pasirinkimas', pasirinkimas);
        setTekstas(pasirinkimas);
    }

    return (
        <div>
            <h2>Tėvinis komponentas</h2>
            <Vaikinis pasikeitimas={apdorotiPasikeitima} />
            <p>Jūs pasirinkote: {tekstas}</p>
        </div>
    )
}

export default Tevinis
