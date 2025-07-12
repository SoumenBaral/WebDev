const friends = ['balam','kalam','salam','golam','pailam']
console.log(friends.includes('salam'));

if(friends.includes('kalam')){
    console.log("party");
    
}
else{
    console.log("jamu na ");
    
}
console.log(friends.indexOf('salams'));


const nums =[];
const food = 'ros o golla ';
const age = 23;

console.log(Array.isArray(friends));
console.log(Array.isArray(age));
const friend = friends.slice(1,4)
const joinTest = friends.join(',')
console.log(joinTest);

console.log(friend);
friends.push('soumen')
friends.pop()
const result = friends.concat(friend)

console.log(result);





