// function sockMerchant(n, ar) {
    
//     }

//     result = sockMerchant(9,[10,20,20,10,10,30,50,10,20]);
//     console.log(result);

    let pair =0;
      let array = [4, 5, 5, 5, 6, 6, 4, 1, 4, 4, 3, 6, 6, 3, 6, 1, 4, 5, 5, 5];
    
    let len = array.length;
        for(let i=0; i< len; i++){
            for(let j=i+1; j<len; j++){
                if(array[i] == array[j]){
                    console.log(array);
                    console.log('i = '+ i +" and array[i]: "+ array[i])
                    console.log('j: '+ j + " and array[j]: "+array[j])    

                    array.splice(i,1);
                    i=0;
                    array.splice(j-1,1);
                    j=i;
                    
                    pair++;
                    console.log('');
                    len-=2;
                }
            }
        }
        console.log(array);
        console.log(pair);