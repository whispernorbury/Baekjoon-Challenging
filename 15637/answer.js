const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const arr = {'10': 91, '23': 86, '29': 88, '33': 93, '37': 103, '40': 113, '9': 71, '13': 98, '21': 85, '25': 97, '32': 83, '42': 86, '11': 96, '16': 85, '19': 91, '27': 110, '31': 95, '14': 102, '30': 80, '24': 91, '41': 81, '15': 96, '26': 98, '2': 88, '8': 100, '34': 109, '39': 95, '4': 99, '17': 102, '36': 91, '44': 93, '1': 103, '7': 96, '45': 93, '22': 79, '38': 90, '6': 86, '12': 91, '3': 91, '35': 88, '43': 97, '18': 97, '20': 112, '5': 101, '28': 80}
rl.on("line", (x) => {
    console.log(arr[x]);
    rl.close();
});