// common class used Every where :
class Info{
    constructor( x , y, z ){
        this. company = x ;
        this. job = y ;
        this.country = z ;
        
    }
}
// topic 1 :
class Student extends Info {
    name = 'Arif';
    id = 121 ;

    constructor ( x ,y , z ,){
        super( x , y , z );
    }  

}
// topic -2 
class teacher extends Info {
    name = 'Dipjol';
    id = 360 ;

    constructor ( x ,y , z ,){
        super( x , y , z );
    } 

}
// topic -3 
class stuff extends Info {
    name = 'salman';
    id = 420 ;

    constructor ( x ,y , z ,){
        super( x , y , z );
    }     

}
// call class used new keyword :
const A = new Student ('FX Studio' , 'Mern stack Developer' , 'BD')
const B = new Student ('FX Studio' , 'Mern stack Developer' , 'BD')
const C = new Student ('FX Studio' , 'Mern stack Developer' , 'BD')
// output value :
console.log( A );
console.log( B );
console.log( C );