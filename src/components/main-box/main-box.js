
function MainBox({ city, weather }) {
    console.log()
    // console.log(weather && weather.map(map => map));
    return (
        <div className="weather-app__main--box">
            {city && weather.map((map, index) => {

                return (
                    <div key={index} className='boxgroup'>
                        <img className='weather-app__main--box--img' alt="weather.ico" src={`https://openweathermap.org/img/wn/${map.weather[0].icon}.png`}></img>
                        <div >

                            <span className='degree' >Hissedilen: {map.main.feels_like}°</span>
                            <span className='ortdegree' >Min: {map.main.temp_min}° - Max: {+ map.main.temp_max}°</span>
                            {/* <span className='ortdegree' >Saat: {map.dt_txt.slice(10)}</span> */}
                            <span className='ortdegree' >Tarih: {map.dt_txt.slice(0, 10)}</span>

                        </div>
                    </div>
                )


            })}



        </div>

    )

}







export default MainBox;