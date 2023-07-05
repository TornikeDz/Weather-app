const options = {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
        'X-RapidAPI-Key': 'fd7c996a32msh830a79b332d84b0p17c572jsnbfa170500b8e',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    },
};

export default async function getWeather(city: string, country :string) {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}-${country}`;

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {

    }
}