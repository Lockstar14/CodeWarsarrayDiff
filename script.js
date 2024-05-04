function arrayDiff(a, b) {
   return a.filter(itemA=>!b.includes(itemA))

}
console.log(arrayDiff([1,2,2,2,3],[2]))