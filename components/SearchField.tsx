'use client'
import { useState, useEffect } from 'react';

const url = 'https://weatherapi-com.p.rapidapi.com/search.json?q=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fd7c996a32msh830a79b332d84b0p17c572jsnbfa170500b8e',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

const SearchField = () => {
    const [cityName, setCityName] = useState('');
    const [searchedData, setSearchedData] = useState([]);
    const city = (e) => {
        setCityName(e.target.value);
    }
    
    useEffect(() => {
        if(cityName.length >= 3) {
            fetch(url + cityName, options)
        .then(res => res.json())
        .then(setSearchedData)
        } else {
            setSearchedData([])
        }
    },[cityName]);

    return (
        <div className="w-[300px] input">
            <input type="text"
            onChange={city}
            className="h-[50px] outline-none w-[100%] placeholder:pl-2 pl-2" 
            placeholder="Enter city"
            />
            <div className="bg-white w-[100%] pl-3">
                {searchedData.map(item => (
                    <div key={item.id}>
                        <div>{item.name} <span className="font-bold">{item.country}</span></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchField
