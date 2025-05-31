const aquaticAnimals = ["otter", "shark", "bluefin tuna"];
const rainforestAnimals = ["orang-utan", "elephant", "snake"];
const awesomeanimals = [...aquaticAnimals, ...rainforestAnimals];
console.log(awesomeanimals);

let set = new Set(awesomeanimals);

awesomeanimals = Array.from(set);

console.log(awesomeanimals);



