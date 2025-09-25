let numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
let left = 0;
let right = numbers.length-1;
let index = -1;

while (left <= right) { 
    let mid = Math.floor((left + right) / 2) 
    if (numbers[mid] === 16) {  
        index = mid
        break
    } else if (numbers[mid] < 16) { 
        left = mid + 1  
    } else {
        right = mid - 1
    }
}


console.log(index)