import React from 'react';
import Image from 'next/image';
import weatherUrl from '@/public/weatherUrl'
interface Weather {
    city: string,
    temp_c: number,
    icon: string,
    text: string
}

const CurrentWeather = ({city, temp_c, icon, text}:Weather) => {
    return (
        <div className="max-w-[300px] rounded bg-white">
            <div className="max-w-[200px] flex flex-col gap-10 text-blue-light">
                <h3 className="font-bold text-2xl text-blue-dark">{city}</h3>
                <div className="flex justify-between items-center">
                    <span >
<Image src={weatherUrl.night["Clear"]} width={100} height={100} alt="sss"/>
                    {/* <img src={"http:"+icon} alt="current weather icon" width={70} height={70}/> */}
                    </span>
                    <span className="text-7xl text-blue-dark flex">
                        {temp_c} <span className="align-top">°</span>
                    </span>
                </div>
                <div className="text-blue-light">{text}</div>
            </div>
        </div>
    )
}

export default CurrentWeather
