import React from 'react';
import Image from 'next/image';
import weatherUrl from '@/public/weatherUrl';
import AdditionalData from './AdditionalData';
interface Weather {
    localtime: string,
    city: string,
    temp_c: number,
    text: string,
    dayTime: 'day' | 'night',
    humidity: number,
    wind_kph: number
}


const CurrentWeather = ({localtime, city, temp_c, text, dayTime, humidity, wind_kph}:Weather) => {
    const currDate = new Date(localtime);
    const currTime = currDate.toLocaleTimeString().split(':00 ').join(' ');

    return (
        <div className="w-[300px] h-96 rounded bg-white  p-4">
            <div className="flex flex-col text-blue-light">
                <div>
                    <div>{currTime}</div>
                    <h3 className="font-bold text-2xl text-blue-dark">{city}</h3>
                </div>
                <div className="flex flex-col self-center mt-4">
                    <Image 
                    src={weatherUrl[dayTime][text]} 
                    width={88} 
                    height={88} 
                    alt={`${text} icon`}/>
                    <span className="text-7xl text-blue-dark flex">
                        {temp_c} <span className="align-top">°</span>
                    </span>
                </div>
                <div className="text-blue-light self-center">{text}</div>
                <div className="mt-10">
                    <AdditionalData humidity={humidity} wind_kph={wind_kph}/>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather
