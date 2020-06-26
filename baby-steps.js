
const process_list = process.argv
const process_argv_length = process_list.length


// console.log(process.argv)

let sum = 0

for(let i = 2; i < process_argv_length; i++){
    // console.log(process_list[i])
    sum = sum + Number(process_list[i])
}

console.log(sum)
