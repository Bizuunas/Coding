// šis komponentas rūpinasi naujos prekės suvedimu,
// jame yra forma kur vartotojas gali suvesti jam norimą informaciją,
// tada yra suformaluojamas naujos prekės objektas
// ir perduodamas į tėvinį komponentą

import { useRef } from 'react';

const PrekeNauja = (props) => {
    const pavadinimasRef = useRef();
    const kiekisRef = useRef();
    const kainaRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        // console.dir(pavadinimasRef);

        // suformulavome objektą, kuris atitinka mūsų duomenų struktūrą
        let naujaPreke = {
            pavadinimas: pavadinimasRef.current.value,
            kiekis: kiekisRef.current.valueAsNumber,
            kaina: kainaRef.current.valueAsNumber,
        };

        // alert('Pridėta nauja prekė');
        // console.log('iš vaikinio komponento:', naujaPreke);

        // pamėginsime jį išsiųsti į tėvinį komponentą,
        // funkcijai pavadinimą galime sugalvoti patys,
        // į argumentus įsistatome suformuotą objektą
        props.pridejimas(naujaPreke);

        // išvalome formą
        pavadinimasRef.current.value = '';
        kiekisRef.current.value = '';
        kainaRef.current.value = '';
    }

    return (
        <div>
            <h3>Pridėti prekę</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="pavadinimas">Pavadinimas:</label>
                    <input ref={pavadinimasRef} type="text" id="pavadinimas" />
                </div>
                <div>
                    <label htmlFor="kiekis">Kiekis:</label>
                    <input ref={kiekisRef} type="number" id="kiekis" />
                </div>
                <div>
                    <label htmlFor="kaina">Kaina:</label>
                    <input ref={kainaRef} type="number" id="kaina" />
                </div>
                <div>
                    <button type="submit">Pridėti</button>
                </div>
            </form>
        </div>
    )
}

export default PrekeNauja
