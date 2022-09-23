const newPerson = (nomeCompleto) => {
  return { nomeCompleto: `${nomeCompleto}`, email: `${nomeCompleto.replace(' ', '_').toLowerCase()}@trybe.com` };
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
}

console.log(newEmployees(newPerson));