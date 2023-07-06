export default async function getClientIp() {
    const res = await fetch('https://api.ipify.org?format=json', { next: { revalidate: 5 } });
    const response = await res.json();
    console.log(response)
    if (!res.ok) {
            const err = new Error('Failed to fetch api');
            console.log(err);
        }
    return response;

}