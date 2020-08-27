var threeSumClosest = function(nums, target) {
    let sum;
    let result;
    let maxI;
    let maxJ;
    let maxK;
    let deltaMin = 20000;
    for(let i=0; i< nums.length; i++){
        for(let j=i+1; j< nums.length; j++){
            for(let k=j+1; k< nums.length; k++){
                sum =nums[i]+ nums[j] +nums[k];
                let delta = (Math.abs(target - sum));
                if(delta < deltaMin){
                    deltaMin = delta;
                    result = sum;
                    maxI = nums[i];
                    maxJ = nums[j];
                    maxK = nums[k];
                }
                console.log('sum: '+ sum+', delta: '+ delta +', result: '+ result+ ', i: '+ i+ ', j: '+ j +', k: '+k);
            }
        }
    }
    console.log('result: '+result);
    console.log('maxI: '+ maxI+ ', maxJ: '+ maxJ +', maxK: '+maxK)
};

threeSumClosest([1,1,1,0], -100);