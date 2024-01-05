import { useRef } from "react";

const StudentasNaujas = (props) => {
    const vardasRef = useRef();
    const pavardeRef = useRef();
    const mokyklaRef = useRef();
    const vidurkisRef = useRef();

    const formSubmitHandler = (event) => {
        event.preventDefault();
        // alert('submitinau');

        if (vardasRef.current.value === '' ||
        pavardeRef.current.value === '' ||
        mokyklaRef.current.value === '' ||
        vidurkisRef.current.value === '') {
            alert('Suvesta ne visa privaloma informacija')
            return
        }

        let naujasStudentas = {
            vardas: vardasRef.current.value,
            pavarde: pavardeRef.current.value,
            mokykla: mokyklaRef.current.value,
            vidurkis: vidurkisRef.current.valueAsNumber
        };
        // console.log(naujasStudentas);

        props.onNaujasStudentas(naujasStudentas);

        vardasRef.current.value = '';
        pavardeRef.current.value = '';
        mokyklaRef.current.value = '';
        vidurkisRef.current.value = '';
    }

    return (
        <div>
            <h3>Naujo studento informacija</h3>
            <form onSubmit={formSubmitHandler}>
                <div>
                    <label htmlFor="vardas">Vardas:</label>
                    <input ref={vardasRef} type="text" id="vardas" />
                </div>
                <div>
                    <label htmlFor="pavarde">Pavarde:</label>
                    <input ref={pavardeRef} type="text" id="pavarde" />
                </div>
                <div>
                    <label htmlFor="mokykla">Mokykla:</label>
                    <input ref={mokyklaRef} type="text" id="mokykla" />
                </div>
                <div>
                    <label htmlFor="vidurkis">Vidurkis:</label>
                    <input ref={vidurkisRef} type="number" step="0.1" min="0" max="10" id="vidurkis" />
                </div>
                <div>
                    <button type="submit">Issaugoti</button>
                </div>
            </form>
        </div>
    )
}

export default StudentasNaujas
