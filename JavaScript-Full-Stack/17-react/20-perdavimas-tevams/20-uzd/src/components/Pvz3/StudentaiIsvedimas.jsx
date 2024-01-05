const StudentaiIsvedimas = (props) => {
    const studentai = props.data;

    return (
        <div>
            <h3>Turimi studentai</h3>
            {
                studentai?.length > 0 &&
                <table border="1">
                    <thead>
                        <tr>
                            <th>Vardas</th>
                            <th>Pavarde</th>
                            <th>Mokykla</th>
                            <th>Vidurkis</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentai.map((studentas, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{studentas.vardas}</td>
                                        <td>{studentas.pavarde}</td>
                                        <td>{studentas.mokykla}</td>
                                        <td>{studentas.vidurkis}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            }
            {
                studentai?.length === 0 &&
                <p>studentu nera</p>
            }
        </div>
    )
}

export default StudentaiIsvedimas
