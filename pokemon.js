// creating the base html container element to contain all our page content
const section = document.createElement('section');
// const heading = document.createElement('h1');
// heading.innerText = 'Pokemon';
section.classList.add('container');
// section.append(heading);
document.body.append(section);


const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for( let i = 1; i < 152; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    const img = document.createElement('img');
    img.src = `${baseURL}${i}.png`;
    img.alt = `Pokemon ${i}`;
    const span = document.createElement('span');
    span.innerText = `Pokemon #${i}`;
    pokemon.append(span);
    pokemon.append(img);
    section.append(pokemon);
}