/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.
  Output: only the shared values between the two arrays (de-duped).
  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numbersA1 = [0, 1, 2, 2, 2, 7];
const numbersB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numbersA2 = [0, 1, 2, 2, 2, 7];
const numbersB2 = [2, 2];
const expected2 = [2];

const numbersA3 = [0, 1, 2, 2, 2, 7];
const numbersB3 = [10];
const expected3 = [];

solution 1: group
function orderedIntersection(sortedA, sortedB) {
    let intersection = []
    let map = {}

    for (let i=0; i < sortedA.length; i++) {
        for (let j=0; j<sortedB.length; j++) {
            if (!map.hasOwnProperty(sortedB[j]) && (sortedA[i]===sortedB[j])) {
                map[sortedB[j]]=sortedB[j]
                continue;
            }
            else if (map.hasOwnProperty(sortedB[j])) {
                continue;
            }
        }
    }
    for (key in map){
        intersection.push(map[key])
    }
    return intersection
}

// solution 2: mine
function orderedIntersection(sortedA, sortedB) {
    let intersection = []
    let map = {}
    for (let i=0; i<sortedA.length; i++){
        if(map.hasOwnProperty(sortedA[i])){
            map[sortedA[i]]++
        }
        else {
            map[sortedA[i]]=1
        }
    }
    for (let j=0; j<sortedB.length; j++){
        if (map.hasOwnProperty(sortedB[j]) && intersection[intersection.length-1]!=sortedB[j]){
            intersection.push(sortedB[j])
        }
    }
    return intersection
}

//solution 3: neil
function orderedIntersection(sortedA, sortedB) {
    let idxA = 0;
    let idxB = 0;
  
    const intersection = [];
  
    while (idxA < sortedA.length && idxB < sortedB.length) {
      if (sortedA[idxA] === sortedB[idxB]) {
        if (intersection[intersection.length - 1] !== sortedA[idxA]) {
          // add it only if the last num added isn't the same num
          intersection.push(sortedA[idxA]);
        }
        idxA++;
        idxB++;
      } else if (sortedA[idxA] < sortedB[idxB]) {
        idxA++;
      } else {
        idxB++;
      }
    }
    return intersection;
  }

console.log(orderedIntersection(numbersA1,numbersB1))
console.log(orderedIntersection(numbersA2,numbersB2))
console.log(orderedIntersection(numbersA3,numbersB3))





/**
 * Efficiently combine the two sorted arrays into a new array that is the a sorted set intersection.
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multi-sets (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is sorted and contains only the shared values
 *    between the two arrays de-duped.
 */
