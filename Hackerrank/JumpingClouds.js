//let arr = [0,0,1,0,0,1,0];
//let arr = [0,1,0,0,0,1,0];
let arr = [0,0,0,1,0,0];
//let arr = [0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0];
let len = arr.length;
let movement =[];

for(let i =0; i< len; i++){
    if (arr[i+1] == 0 && arr[i+2] ==0){
        movement.push('a');
        i++;
        //jump+=1;
    }
    else if(arr[i+1] == 0 && arr[i+2] ==1){
        movement.push('b');
        
    }
    else if (arr[i+1] == 1 && arr[i+2] ==0){
        movement.push('c');
        i++;
    }
    else if(arr[i+1]==0){
        movement.push('d');
    }
}
console.log(movement);
console.log(movement.length);
