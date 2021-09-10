const friends = [ 'arif' , 'dipjol' , 'amir' , 'sakib'];
const fLeangth = friends.map( x => x.length );
// console.log( fLeangth );

const studentInfo = [
    { name : 'arif' , id : 1 , job : 'student' },
    { name : 'Jewel' , id : 2 , job : 'worker' },
    { name : 'salman' , id : 3 , job : 'freelancer' },
    { name : 'sakib' , id : 4 , job : 'designer' }
]
const studentName = studentInfo.map( student => console.log( student.name ));
const studentId =   studentInfo.map( student => student.id );
// console.log( studentName );
console.log( studentId );

// map return a value to an Array :
const A = studentInfo.map( student => ( student.name ));
console.log( A );

// forEach is not return value to used that . if  I  set forEach => map then it return value :
const B = studentInfo.forEach( student => ( student.name ));
console.log( B );


