let numbers = [7, 2, 10, 1, 5];

for (let i =0; i < numbers.length-1; i++) {
    for (let j = 0; j < numbers.length-1-i; j++) {
        if (numbers[j] > numbers[j+1]) {
            let temp = numbers[j]
            numbers[j] = numbers[j+1]
            numbers[j+1] = temp
        }
    }
}
console.log(numbers)



//let numbers = [64, 34, 25, 12, 22, 11, 90]

function bubbleSortObjectMinToMax(people) {
    for (let i = 0; i < people.length - 1; i++) {
        for (let j = 0; j < people.length - 1 - i; j++) {
            if (people[j].age > people[j + 1].age) {
                let temp = people[j];
                people[j] = people[j + 1];
                people[j + 1] = temp;
            }
        }
    }
    return people;
}

console.log(bubbleSortObjectMinToMax([
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Bill", age: 28 },
    { name: "Alice", age: 22 }
]));
