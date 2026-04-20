const place = {
    name: {
        pl: 'Kraków',
        la: 'Cracovia',
        de: 'Krakau',
    },
    position: [50.061389, 19.938333],
}

const {
    name: {pl: plName},
    position: [lat, lng],
} = place

console.log(`${plName} => ${lat} ${lng}`);
