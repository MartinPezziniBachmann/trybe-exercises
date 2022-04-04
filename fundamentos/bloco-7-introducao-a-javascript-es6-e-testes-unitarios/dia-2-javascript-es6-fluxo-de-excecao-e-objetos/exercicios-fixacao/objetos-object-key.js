// Crie uma função que liste as habilidades e o nível para os estudasntes
const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listSkills = obj => {
  const keyList = Object.keys(obj);
  for (const index in keyList) {
    console.log(`${keyList[index]}, Nível: ${obj[keyList[index]]}`);
  }
}

console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2'); 
listSkills(student2);