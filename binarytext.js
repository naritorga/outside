let students = ["Andrew", "Bobby", "Diana", "George", "Hannah", "Isaac", "Jasmine", "John"]
let left = 0;
let right = students.length-1;
let index = -1;
let searchStudent = "Isaac"

while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (students[mid] === searchStudent) {
        index = mid
        break
    } else if (students[mid] < searchStudent) {
        left = mid + 1
    } else {
        right = mid - 1
    }
}

console.log(index)