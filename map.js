const nums = [ 12,55,45,33];
const output = [];

for (const items of nums) {
         const result = doubleIt(items) ;  //items * 30 == doubleIt(items)
         output.push(result);
     }
    console.log( output );

 function doubleIt( x ) {
        const result = x * 30 ;
        return result ;
    }


// const doubleIt =  x => x * x;

const doubleItNow = nums.map( x => x * x );
console.log( doubleItNow );