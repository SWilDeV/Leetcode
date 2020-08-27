let a = [1,2,3,4,5,6,7,8,9];
const len = a.length;
const d = 4;
let temp;

for(let i = 0; i< d; i++){
   // for(j=a; j>0; j--){
        temp= a[0];
        a.splice(0,1);
        a[len]=temp;
    //}
}
let result=[];
for(j= 0; j<len+1; j++){
    if(a[j] != null){
        result.push(a[j]);
    }
}
var finalR =result.join(' ');
console.log(finalR);