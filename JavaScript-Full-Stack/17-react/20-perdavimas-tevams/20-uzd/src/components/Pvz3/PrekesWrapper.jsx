// šis komponentas apjungia visus prekių komponentus,
// jis kviečia duomenų papildymo komponentą
// ir duomenų išvedimo komponentą,
// visa informacija suvaikšto per šį komponentą,
// nes paima informaciją iš naujos prekės suvedimo komponento
// ir tą informaciją perduoda į prekių išvedimo komponentą

import { useState } from "react";
import PrekeNauja from "./PrekeNauja";
import PrekesVisos from "./PrekesVisos";

const PrekesWrapper = () => {
    // const TESTDATA = [
    //     { pavadinimas: 'Knyga', kiekis: 1, kaina: 10 },
    //     { pavadinimas: 'Žurnalas', kiekis: 2, kaina: 5 },
    //     { pavadinimas: 'Lego', kiekis: 3, kaina: 20 },
    // ];

    // pasitestavimui galime duoti duomenų pradžioje, bet dabar
    // paliksiu tuščią masyvą, kurį supildo vartotojas
    // const [prekes, setPrekes] = useState(TESTDATA);
    const [prekes, setPrekes] = useState([]);

    const handlePridejimas = (naujaPreke) => {
        // console.log('iš tėvinio komponento:', naujaPreke);
        // setPrekes([...prekes, naujaPreke]);
        setPrekes([naujaPreke, ...prekes]); // jeigu norim naują prekę pridėti į pradžią
    }

    return (
        <div>
            <h2>Prekės</h2>
            <PrekeNauja pridejimas={handlePridejimas} />
            <PrekesVisos data={prekes} />
        </div>
    )
}

export default PrekesWrapper
