const student ={
    name:'Soumen',
    age:23,
    subject:'CSE',
    university:'SU',
    ok :false
} 

console.log(student.subject);
console.log(student['name']);
var un = 'university'
console.log(student[un]);
console.log(Object.keys(student));
console.log(Object.values(student));


for (const key in student) {
    console.log("key : ",key ,' | Type : ',typeof(student[key]) );
    
}



 
