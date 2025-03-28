export const random = (arr) =>{
    let choice = Math.random()*arr.length
    if (Math.round(choice) === arr.length){
        choice = arr.length-1
    }
    return arr[Math.round(choice)]
}

