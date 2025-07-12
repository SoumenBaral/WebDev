const sections = document.querySelectorAll('section');
console.log(sections);

sections.forEach(element => {
    element.style.backgroundColor="lightgray"
    element.style.border = '3px solid steelblue'
    element.style.margin = '10px';
    element.style.padding = '5px'
    element.style.borderRadius = '20px'
});

const placeContainer = document.getElementById('players-container');
placeContainer.classList.add('container')