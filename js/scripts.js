var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'],
	maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var names = femaleNames.concat(maleNames);

var newName = "Marian";

if (names.indexOf(newName) === -1) {
	names.push(newName);
} else {
	console.log("Takie imie jest juz w tablicy");
}

console.log(names);