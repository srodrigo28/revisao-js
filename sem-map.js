const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const dobro = []

// exmpelo 1
// for(let i = 0; i< nums.length; i++){
//    dobro.push(nums[i] * 3)
// }

for(const num of nums){
    dobro.push(num * 2)
}

console.log(dobro)