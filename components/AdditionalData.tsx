import Image from 'next/image';

interface moreDataInterface {
    humidity: number,
    wind_kph: number
}

const AdditionalData = ({humidity, wind_kph}: moreDataInterface) => {
    return (
        <div className="flex justify-between">
            <div className="flex gap-1">
                <Image src="/weatherIcons/humidity.webp" width={40} height={40} alt="humidity icon"/>
                <div className="flex flex-col">
                    <span>{`${humidity}%`}</span>
                    <span>Humidity</span>
                </div>
            </div>
            <div className="flex gap-1">
                <Image src="/weatherIcons/wind-speed.webp" width={40} height={40} alt="humidity icon"/>
                <div className="flex flex-col">
                    <span>{`${wind_kph}Km/h`}</span>
                    <span>Wind Speed</span>
                </div>
            </div>
        </div>
    )
}

export default AdditionalData
