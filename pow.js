var myPow = function(x, n) {
    let result=1;
    if(n>=1){
        for(let i =0; i< n; i++){
            result = result * x;
        }
     }
    else if(n >0 && n<1){
        result = 1;
    }
    else if(n <= -1){
        x = 1/x;
        n = -n;
        for(let i =0; i< n; i++){
        result = result *x;
        }
    }
    
    console.log(result);
};

myPow(2147483647,-1);

//n = 0.5 -> x^0.5 = x^(1/2)
//