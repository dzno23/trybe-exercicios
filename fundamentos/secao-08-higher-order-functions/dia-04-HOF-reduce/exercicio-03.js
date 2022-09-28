const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

const containsA = (array) => array.map((element) => (element.toLowerCase().match(/a/g)).length).reduce((acc, crr) => acc + crr);

console.log(containsA(names));