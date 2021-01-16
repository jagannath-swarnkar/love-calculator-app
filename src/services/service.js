var axios = require("axios").default;

export const getResult = (query) => {

    var options = {
        method: 'GET',
        url: 'https://love-calculator.p.rapidapi.com/getPercentage',
        params: {fname: query.fname, sname: query.sname},
        headers: {
            'x-rapidapi-key': '885bede5ecmsh6b162ef794a5084p113b5ejsn609463d5d13b',
            'x-rapidapi-host': 'love-calculator.p.rapidapi.com'
        }
    };

return axios.request(options)
}