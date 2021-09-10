// const studentInfo = { id : 121 , userName : 'Hero alom' , job : 'student' , isMuslim : true};

// // const id = studentInfo.id ;
// // const job = studentInfo.job ;

// const { id , job } = studentInfo ;

// console.log(id);
// console.log(job);

const company ={
    name: 'GP',
    ceo : { person : 1 , 
            name : ' Dipjol' ,
            nationality : 'BD'
        } ,
    job :{
        cartagory :'web developer',
        salary : 25000 ,
        framework : 'react',
        language : {
                    first : 'html',
                    second : 'css',
                    third : 'js'

                }
    }    
}
// const ceoName = company.ceo.name ;
// const first = company.job.language.first ;
// console.log( first );
const { name } = company.ceo ;
const { first , third } = company.job.language ;
console.log( first , third  );