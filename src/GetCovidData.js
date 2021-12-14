// function GetCovidData(country, callback) {
//     // https://disease.sh/v3/covid-19/countries/jamaica?strict=true
//     fetch(`https://disease.sh/v3/covid-19/countries/${(new URLSearchParams({country})).toString()}`)
//         .then((response) => response.json())
//         .then((data) => {
//             callback(data);
//         }, (err) => {
//             console.error(err);
//         });
// };

function GetCovidData(country, callback) {
    // https://disease.sh/v3/covid-19/countries/jamaica?strict=true
    fetch(`https://disease.sh/v3/covid-19/countries/${country}?strict=true`)
        .then((response) => response.json())
        .then((data) => {
            callback(data);
        }
        , (err) => {
            console.error(err);
        });
};

export default GetCovidData;