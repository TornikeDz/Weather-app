import { getClientLocation, getWeather } from '@/util';
import WeatherData from '@/components/WeatherData';

export default async function Home() {
  const { city, country } = await getClientLocation();
  const { location: { 
    localtime 
  }, 
  current: {
    temp_c, is_day, humidity, wind_kph,
    condition: {
      text
    }
  } } = await getWeather(city, country);
  return (
    <div className="flex relative justify-center pt-[10%]">
        <WeatherData
        localtime={localtime}
        city={city} 
        temp_c={temp_c} 
        text={text} 
        dayTime={is_day? "day": "night"}
        humidity={humidity}
        wind_kph={wind_kph}
        />
    </div>
  )
}
