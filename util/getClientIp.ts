export default async function getClientIp() {
    try{
        const res = await fetch('https://api.ipify.org?format=json', {method: 'GET'});
        const response = await res.json();
        console.log('000', response)
        return response;

    } catch (error) {
        throw new Error("Couldn't retrieve client's IP");
    }
}