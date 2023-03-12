require('dotenv').config()
const axios = require('axios');

const apiKey = process.env.WAKATIME_APIKEY;
const apiUrl = 'https://wakatime.com/api/v1/users/current/stats/last_7_days';

const getData = (async() =>{
    return axios.get(apiUrl,{
        headers: {
            'Authorization': `Basic ${Buffer.from(apiKey).toString('base64')}`
        }
    })
});

const main = (async() => {
    let data = await getData()
    console.log(data)
});

main()