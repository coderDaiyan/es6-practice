const ages = [12, 45, 17, 21, 34]
const ages2 = [21, 24, 29, 30, 32]
const ages3 = [48, 35, 36, 59]
const allAges = ages.concat(ages2).concat(5).concat(ages3)
const allAges2 = [...ages, 5, ...ages2, ...ages3]
// console.log(allAges);
// console.log(allAges2);

const business = 650
const minister = 550
const sochib = 450
const max = Math.max(business, sochib, minister)
// console.log(max);