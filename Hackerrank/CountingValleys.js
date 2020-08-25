let len = 8;
let arr = 'UDDDUDUU';
let counter =0;
let hike = arr.split('');
let result = 0;
for(let i = 0; i< len; i++){
    
    if( hike[i]=='D'){
        counter -= 1;
    }
    else if(hike[i]='U'){
        counter +=1;
    }
    if(counter==0 && hike[i] =='U'){
        result+=1;
    }
}


console.log(result);