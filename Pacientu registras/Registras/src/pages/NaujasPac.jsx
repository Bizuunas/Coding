import './NaujasPac.css'


const NaujasPac = () => {
  return (
    <>
      <h2>ODONTOLOGO ĮRAŠAI</h2>
      <div className="kortele">

        <div className="vardas">
          <h3>Vardas</h3>
          <input type="text" placeholder="Paciento vardas" />
        </div>

        <div className="pavarde">
          <h3>Pavardė</h3>
          <input type="text" placeholder="Paciento pavardė" />
        </div>

        <div className='gimimo-data'>
          <h3>Gimimo data</h3>
          <input type="date" placeholder='Gimimo data' />
        </div>

        <div className='adresas'>
          <h3>Adresas</h3>
          <input type="text" placeholder='Adresas' />
        </div>

        <div className='socialine-padetis'>
          <h3>Socialinė padėtis/ Profesija</h3>
          <input type="text" placeholder='Profesija' />
        </div>

        <div className="telNr">
          <h3>Telefonos numeris</h3>
          <input type="text" placeholder="Paciento telefono numeris" />
        </div>
        
        <div className='lytis'>
          <h3>Lytis</h3>
          <label>
            <input type="radio" name='lytis' value="Vyras" />
            Vyras
          </label>
          <label>
            <input type="radio" name='lytis' value="Moteris" />
            Moteris
          </label>
          <label>
            <input type="radio" name='lytis' value="Kita" />
            Kita
          </label>
        </div>

        <div className='klausimai'>
          <h3>Jautrumas Medikamentam</h3>
          <label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </label>
        </div>
        
        <div className='klausimai'>
          <h3>Alergijos</h3>
          <label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </label>
        </div>
        
        <div className='klausimai'>
          <h3>Ar nesirgo (neserga): Hepatitu A / B / C ; ŽIV</h3>
          <label>
            <textarea name="klausimai" value="" cols="30" rows="10"></textarea>
          </label>
        </div>

        <div className='paciento-ligos-istorija'>
          <h3>Paciento ligos istorija</h3>
          <textarea name="" id="" maxCols="20" ></textarea>
        </div>

      </div>
    </>
  )
}

export default NaujasPac