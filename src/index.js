const nums = [1, 2, 3, 4, 5];

const square = nums.map((num) => {
  return num * num;
});

console.log(square); // [1, 4, 9, 16, 25]

const names = ["Alice", "Bob", "Charlie", "David", "Eve"];

const upperCase = names.map((name) => {
  return name[0].toUpperCase() + name.slice(1);
});

console.log(upperCase);

const pokemon = ["Bulbasaur", "Charmander", "Squirtle", "Pidgey", "Rattata"];

const toHtml = pokemon.map((poke) => {
  return `<p>${poke}</p>`;
});

console.log(toHtml);
