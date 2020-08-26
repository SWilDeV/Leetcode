// let s = 'aba';
//  let n = 10;
// let s = 'gfcaaaecbg';
// let n = 547602;
 let s = 'epsxyyflvrrrxzvnoenvpegvuonodjoxfwdmcvwctmekpsnamchznsoxaklzjgrqruyzavshfbmuhdwwmpbkwcuomqhiyvuztwvq';
let n = 549382313570;

let size=s.length;
let count1=0;
let count2=0;
let res=0;

for(let i=0; i<size ; i++){
    if(s[i]=='a'){
        count1++;
        if(i < n%size){
            count2++;
        }
            
    }
}
    console.log(count1*(Math.round(n/size))+count2);
//console.log("finalResult: "+finalResult);