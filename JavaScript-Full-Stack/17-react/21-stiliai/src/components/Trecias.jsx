const Trecias = () => {
    let stiliai = {
        backgroundColor: 'red',
        color: 'white'
    };

    let kitiStiliai = {
        fontSize: '24px',
        fontWeigth: 'bold'
    };

    // būtinai du {{  }} jeigu rašome stilių iškart elemente
    return (
        <>
            <div style = {{backgroundColor: 'lightcoral', color: 'white'}}>Trecias</div>
            <div style = {stiliai}>Trecias</div>
            <div style = {kitiStiliai}>Trecias</div>
        </>
    )
}

export default Trecias
