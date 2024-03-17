import { useEffect, useState } from "react";

function Cities({ setCity, setWeather }) {
    const api_2 = 'edb6b0e06f311d0d4adc58872ffea78a';
    const api = 'edb6b0e06f311d0d4adc58872ffea78a';
    const [selectedCity, setSelectedCity] = useState();
    const [selectedClock, setSelectedClock] = useState("09:00:00");
    const [cityList, setCityList] = useState([]);
    // const date = new Date().toISOString().substring(0, 10);
    const date = selectedClock;




    useEffect(() => {


        if (selectedCity) {
            fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${selectedCity}&limit=1&appid=${api_2}`)
                .then(res => res.json())
                .then((res) => {
                    // fetch(`https://api.weatherbit.io/v2.0/current?lat=${res[0].lat}&lon=${res[0].lon}&key=${api}&include=minutely`)
                    // fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${res[0].lat}&lon=${res[0].lon}&exclude=daily&appid=${api}`)
                    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${res[0].lat}&lon=${res[0].lon}&current.dt&units=metric&exclude=minutely&appid=${api}`)
                        .then(res => res.json())
                        .then((res) => {
                            setCity(res)
                            setWeather(res.list.filter(x => {
                                return x.dt_txt.includes(date);
                            }));

                        })
                })
        } else {
            setCity(undefined)
        }


        return () => console.log("Bitti");
    }, [selectedCity, date, selectedClock, setCity, setWeather])

    useEffect(() => {
        fetch(`https://turkiyeapi.dev/api/v1/provinces`)
            .then(res => res.json())
            .then(res => {
                setCityList(res.data.map(x => x.name))

            });
    }, [])

    const handlechange = (e) => {

        setSelectedCity(e.target.value)

    }

    const handlechangeClock = (e) => {
        setSelectedClock(e.target.value)
    }




    return (
        <div className="weather-city">
            <div className="city-heading">
                <span >Şehir ve Saat Seçiniz</span>
            </div>

            <select onChange={handlechange} value={selectedCity} className="weather-cities">
                <option value=""></option>
                {cityList.sort(function (a, b) {
                    return a.localeCompare(b);
                }).map((city, index) => {
                    return (
                        <option key={index} value={city.toLowerCase()}>{city}</option>
                    )
                })}

                {/* /* <option value="istanbul">İstanbul</option>
                <option value="ankara">Ankara</option>
                <option value="izmir">İzmir</option>
                <option value="antalya">Antalya</option>
                <option value="trabzon">Trabzon</option>
                <option value="mersin">Mersin</option> */}
            </select>

            <select onChange={handlechangeClock} value={selectedClock} className="weather-cities">
                <option value="03:00:00">03:00</option>
                <option value="06:00:00">06:00</option>
                <option value="09:00:00">09:00</option>
                <option value="12:00:00">12:00</option>
                <option value="15:00:00">15:00</option>
                <option value="18:00:00">18:00</option>
                <option value="21:00:00">21:00</option>
                <option value="00:00:00">00:00</option>
            </select>

        </div>

    )
}



export default Cities;





