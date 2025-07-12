const fruits = ['mango','apple','orange','banana','jackfruit'];
for (const fruit of fruits) {
    console.log("I want to eat ",fruit);
    
}
let num=0
while (num<15) {
    num++;
    
    if(num%5 !== 0){
        continue
    }
    console.log('looping ',num);
    
    
}
for(let num = 0;num<15; num++){
    console.log(num);
    if(num==3){
        break
    }
    
}
