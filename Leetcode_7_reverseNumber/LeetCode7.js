// const x = 1534236469;
// const MAXNUM = Math.pow(2, 31);
// const MINNUM = -Math.pow(2, 31);

// var reverse = function(x){
//    var xChar = x.toString();
//    xCharLen = xChar.length;
//    var result=[];
//    var temp = [];
//     for(let i = 0; i<xCharLen; i++){
//         if(xChar[i]==='-'){
//             result.push(xChar[i]);
//             continue;
//         }
//         else{
//             temp.push(xChar[i]);
//         }
//     };
//     var lenTemp = temp.length;
//     var val;

//     for (let j = 0; j< lenTemp/2; j++){
//         val = temp[lenTemp - j-1];
//         temp[lenTemp - j-1] = temp[j];
//         temp[j] = val;
//     }
//     for (let k = 0; k < lenTemp; k++){
//         result.push(temp[k]);
//     }
//     var result2 =result.join('');
//     if(result2 > MAXNUM || result2 <MINNUM){
//         console.log("OVERFLOW!!")
//     }
//     else{
//         console.log(result2);
//     }
    
// }
// reverse(x);

console.log((0.1 + 0.2));