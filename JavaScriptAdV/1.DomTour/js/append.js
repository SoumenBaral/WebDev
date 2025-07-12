//1. parent node 
const mainContainer = document.getElementById('main-container');

//2.create child node 

const placesSection = document.createElement('section')
console.log(placesSection);

const h1 = document.createElement('h1');
h1.innerText="I love you Ma"
placesSection.appendChild(h1);


const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText= 'bandorbon';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText= 'Sundorbon';
ul.appendChild(li2)
placesSection.appendChild(ul)

mainContainer.appendChild(placesSection)


const bookSection = document.createElement('section');
bookSection.innerHTML=`
            <h1>Books i need to read</h1>
            <p>
                Lorem ipsum dolor <span>oli goli</span> amet consectetur adipisicing elit. <span>Alias</span>, temporibus!
            </p>
            <ul>
                <li>physic</li>
                <li class="foreign">Biology</li>
                <li id="band" class="">chemistry Set</li>
                <li class="international">Math</li>
                <li>ICT</li>
            </ul>
`
mainContainer.appendChild(bookSection)
