//fewest piece of string that has all the letters
function fewestCoins(coins) {
    let arr = coins.split('');
    let result;
    let counter = 0;
    let arr2= [];

    for(let i = 0; i<arr.length; i++){
        counter=0;
        for(let k=0; k<arr2.length; k++){
            if(arr2[k] == arr[i]){
                counter++;
            }
        }
        if(counter == 0){
            arr2.push(arr[i]);
        }
    }
    console.log(arr2);
}
//arr: dabbcabcd'

//arr2: abcdefghijklmnopqrstuvwxyz

//arr3:[d, a, b, c]

//fewestCoins('dabcbadjdmwpokd');
fewestCoins('dabcbabcd');