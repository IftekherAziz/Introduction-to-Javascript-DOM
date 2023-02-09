const sections = document.querySelectorAll('section');
for (const section of sections) {
    section.style.backgroundColor = 'lightblue';
    section.style.border = '2px solid steelblue';
    section.style.borderRadius = "10px";
    section.style.margin = '10px';
    console.log(sections);
}

const placesContainer = document.getElementById('places-container');
// placesContainer.style.display = 'flex';
// placesContainer.style.justifyContent = 'center';
// placesContainer.style.alignItems = 'center';
// placesContainer.style.backgroundColor = 'yellow';

placesContainer.classList.add('text-center');
placesContainer.classList.remove("large-text");