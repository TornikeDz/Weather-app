import getClientIp from './getClientIp';

const key = "0W5VH+M5bcZx1foylQqqUQ==fl2TAh8r48zO76ub";
const URL = 'https://api.api-ninjas.com/v1/iplookup?address=';

const options = {
	method: 'GET',
	headers: {
		'X-Api-Key': key,
	},
	contentType: 'application/json',
};

export default async function getClientLocation() {
    const IP = await getClientIp();
    const req = await fetch(URL + IP.ip, options);
    const clientLocation = await req.json();
	if (!req.ok) {
		const err = new Error('Failed to fetch location');
		console.log(err);
	  }
    return clientLocation;
}