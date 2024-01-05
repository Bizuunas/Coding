import StudentaiIsvedimas from "./StudentaiIsvedimas"
import StudentasNaujas from "./StudentasNaujas"

import { useState } from "react";

const StudentaiBendras = () => {
    // const TESTDATA = [
    //     { vardas: 'Jonas', pavarde: 'Jonaitis', mokykla: 'VDU', vidurkis: 10 },
    //     { vardas: 'Petras', pavarde: 'Petraitis', mokykla: 'KTU', vidurkis: 8.5 },
    //     { vardas: 'Antanas', pavarde: 'Antanaitis', mokykla: 'VDU', vidurkis: 9.5 }
    // ];

    // const [studentai, setStudentai] = useState(TESTDATA);
    const [studentai, setStudentai] = useState([]);

    const pridetiNaujaStudenta = (gautiDuomenys) => {
        // console.log(gautiDuomenys);
        setStudentai([gautiDuomenys, ...studentai]);
    }

    return (
        <div>
            <h2>Studentai</h2>
            {/* <StudentasNaujas onNaujasStudentas={(gautaInfo) => {console.log(gautaInfo)}} /> */}
            <StudentasNaujas onNaujasStudentas={pridetiNaujaStudenta} />
            <StudentaiIsvedimas data={studentai} />
        </div>
    )
}

export default StudentaiBendras
