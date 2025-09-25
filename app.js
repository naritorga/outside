function findMostCommonBreed(dogs) {
  /* Start Coding Here 😉*/
  let breedDog = {}
  for (let dog of dogs) {
    if (!breedDog[dog]) {
      breedDog[dog] = 1
    } else {
      breedDog[dog] += 1
    }
  }
  
  let bestBreed = { name: null, count: 0 }
  for (let best in breedDog) {
    if (bestBreed.count < breedDog[best]){
      bestBreed.name = best
      bestBreed.count = breedDog[best]
    }
  }
  return `สายพันธุ์สุนัขที่พบบ่อยที่สุดคือ ${bestBreed.name}`
}



console.log(findMostCommonBreed (["Labrador", "Golden", "Labrador", "Poodle", "Labrador"]))