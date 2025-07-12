function isLeapYear(year){
    if(year % 100 != 0 && year %4 == 0)return true;
    else if(year%400 == 0) return true;
    else return false
}
console.log(isLeapYear(300));

const numbers = [1,5,61,5,87,7,5,81,61];

function noDuplicate(Array){
    const Unique = [];
    for (const item of Array) {
        if(Unique.includes(item)==false){
            Unique.push(item)
        }
    }
    return Unique;
}

console.log(noDuplicate(numbers));

const sentence = 'I am learning Programming to become programmer';

const senArray = sentence.split(" ")
let largestWord = senArray[0];

for(const word of senArray){
    if(largestWord.length<word.length) largestWord =word;

}
console.log(largestWord);

console.log(Math.floor(Math.random()*(20-10 + 1))+20);

const min = Math.min(...numbers)
console.log(min);

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

let totalSalary =0;
for (const em of employees) {
   const currentSalary = em.starting + (em.experience*em.increment);
   console.log(em.name,"current salary :  " , currentSalary);
   totalSalary +=currentSalary;
   
}
console.log(totalSalary);





// Find the Matching product By Searching Products;

const products = [
    {id:1, name:"xiamic Phone one night",price:19000},
    {id:2, name:"iphone",price:19000},
    {id:3, name:"mac book pro",price:19000},
    {id:4, name:"lenovo yoga laptop 2025",price:19000},
    {id:5, name:"Dell inspiron laptop",price:19000},
    {id:6, name:"samsung phone note 7",price:19000},
    {id:7, name:"Nokia Old age phone gone",price:19000},
    {id:8, name:"walton Phone",price:19000}
]

function matchProducts(products,search){
    const searchList = [];
    for(const product of products){
        // console.log(product);
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            searchList.push(product)
        }
        
        
    }
    return searchList;
}

console.log(matchProducts(products,'LaPtop'));
