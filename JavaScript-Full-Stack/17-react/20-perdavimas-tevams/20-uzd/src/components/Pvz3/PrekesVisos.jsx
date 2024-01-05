// šitas komponentas tik išveda visas gautas prekes

const PrekesVisos = (props) => {
    let prekes = props.data;
    // console.log(prekes);
    
    return (
        <div>
            <h3>Suvestos prekės</h3>
            {
                // jeigu turime prekių tada jas spausdiname
                prekes.length > 0 &&
                <div className="products-list">
                    {
                        prekes.map((preke, index) => {
                            return (
                                <div className="product" key={index}>
                                    <h4>{preke.pavadinimas}</h4>
                                    <p>Jos yra {preke.kiekis} vnt.</p>
                                    <p>Kainuoja {preke.kaina} eur.</p>
                                </div>
                            )
                        })
                    }
                </div>
            }
            {
                // jeigu neturime prekių tada pranešame apie tai
                prekes.length === 0 &&
                <p>Prekių kol kas nėra.</p>
            }
        </div>
    )
}

export default PrekesVisos
