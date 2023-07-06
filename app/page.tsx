import { getClientLocation, getWeather } from '@/util';
import WeatherData from '@/components/WeatherData';

export default async function Home() {
  const { city, country } = await getClientLocation();
  const {current: {
    temp_c, condition: {text, icon}
  } } = await getWeather(city, country);
  return (
    <div className="">
        <WeatherData city={city} icon={icon} temp_c={temp_c} text={text}/>
    </div>
  )
}
