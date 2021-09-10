class Studentinfo{
    nation = 'BD'
    constructor(sName , sId ){
        this.name = sName;
        this.id = sId ;
    }
    school(){
        console.log( this.name + ' Raja JC School ');
    };
}
// update part :
/* class MoreInfo extends Studentinfo {
   
 constructor(sName , sId ,sfather , sMother){
    super(sName ,sId  );
     this.Father = sfather ;
     this.Mother = sMother ;
 }
}
const A = new MoreInfo('arif' ,121 , 'patan' , ' jhan');
console.log( A );
*/
// call class used new keyword :
const salman = new Studentinfo('akbar' , 360 );
const khan = new Studentinfo('asif' , 420);

// result see in console.log() :
salman.school();
// output :
console.log( salman  );
console.log( khan );