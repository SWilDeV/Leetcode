function createCheckDigit(membershipId) {
    let sum = 11;
    let arr1= membershipId.split('');
    let len1 = arr1.length;
    let tempArr = [];
    while(sum>10){
  
        let len2 = tempArr.length; 
        console.log(len2);
      
      if(len2 == 0){
        sum=0;
        for(let i=0; i<len1; i++){
          sum+= parseInt(arr1[i]);
          tempArr = String(sum);
          console.log(tempArr);
       }
        
      }else if(len2 !=0){
        let arr2=[];
        sum=0;
        for(let j=0; j<len2; j++){
          arr2.push();
          sum+= tempArr[j];
         }
      }
    }
    return sum;  
   }
  console.log(createCheckDigit("55555"));