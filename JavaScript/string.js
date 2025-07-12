const country = "Bangladesh";
console.log(country.length);

const school = 'BHANDARIA BHIHARI PILOT HIGH SCHOOL';

console.log(school.toLocaleLowerCase());


const address = 'Bhandaria';
const part = address.slice(1,5)//slice pizza like slice 
console.log(part);

console.log(school.split(' ')); //most important part in sting that is split

const realFriend = ['shakib','raj','shuvo','shovon','ifty']

console.log(realFriend.join("|")); //join kora 

const first = 'soumen';
const last = 'baral'

console.log(first.concat(" ").concat(last));

//includes 

console.log(last.includes('b'));



//Reverse 
let Reverse = '';
for (const letter of school) {
    console.log(letter);
    console.log(Reverse);
    Reverse = letter + Reverse;
    console.log(Reverse)
    
}
console.log(Reverse);

const reversed = school.split('').reverse().join('')
if(Reverse==reversed)console.log("khappe khap vojar bap");

console.log(reversed);

//how may time a

let a =0;
for (const letter of school) {
    if(letter=='a'||letter=="A") a++;
    
}
console.log(a);
school.toLocaleLowerCase();
console.log(school);

const colors = ['red', 'blue', 'green', 'yellow', 'orange']
const revereColor = [];
for (let i = colors.length-1 ; i>=0;i--) {
    console.log(colors[i]);
    revereColor.push(colors[i])

    
}

console.log(colors.reverse());
console.log(revereColor);

const numbers = [12, 98, 5, 41, 23, 78, 46];
const even = [];
for (const num of numbers) {
    if (num%2==0) {
        even.push(num)
    }
}
console.log(even);

number= ['Tom', 'Tim', 'Tin', 'Tik']

let newNothing =''
for (const num of number){
    newNothing +=num
}

console.log(newNothing);


const statement = 'I am a hard working person'
const words = statement.split(" ")
for (const word of words) {
    console.log(word);
    
}

const nums = [12, 30, 2, 1, 29, 11];
const sortingNum = nums.sort((a, b) => a - b);
console.log(sortingNum);


