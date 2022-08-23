const fs = require('fs').promises;

const readAll = async () => {
  const fileContent = await fs.readFile('./src/simpsons.json', 'utf-8');
  const characters = JSON.parse(fileContent);
  characters.forEach((character) => console.log(character.id, ' - ', character.name));
}

const returnCharacter = async (id) => {
  const fileContent = await fs.readFile('./src/simpsons.json', 'utf-8');
  const characters = JSON.parse(fileContent);
  const selectedCharacter = characters.find((character) => Number(character.id) === id);
  
  if(!selectedCharacter) {
    throw new Error('id não encontrado');
  }

  console.log(selectedCharacter);
  return selectedCharacter;
}

const deleteCharacter = async (...ids) => {
  const fileContent = await fs.readFile('./src/simpsons.json', 'utf-8');
  const characters = JSON.parse(fileContent);
  const newArray = characters.filter((simpson) => !ids.find((id) => Number(simpson.id) === id));
  console.log(newArray);
  await fs.writeFile('./src/simpsons.json', JSON.stringify(newArray));
}

const createFamilyJson = async () => {
  const fileContent = await fs.readFile('./src/simpsons.json', 'utf-8');
  const characters = JSON.parse(fileContent);
  const family = characters.filter((character) => Number(character.id) < 5);
  await fs.writeFile('./src/simpsonsFamily.json', JSON.stringify(family));
}

const addNewCharacter = async (newCharacterId) => {
  const fileContent = await fs.readFile('./src/simpsons.json', 'utf-8');
  const characters = JSON.parse(fileContent);
  const newCharacter = characters.find((character) => Number(character.id) === newCharacterId);

  const familyFileContent = await fs.readFile('./src/simpsonsFamily.json', 'utf-8');
  const family = JSON.parse(familyFileContent);
  family.push(newCharacter);
  console.log(family);
  await fs.writeFile('./src/simpsonsFamily.json', JSON.stringify(family));
}

const replaceCharacter = async (newCharacterId, oldCharacterId) => {
  const fileContent = await fs.readFile('./src/simpsons.json', 'utf-8');
  const characters = JSON.parse(fileContent);
  const newCharacter = characters.find((character) => Number(character.id) === newCharacterId);

  const familyFileContent = await fs.readFile('./src/simpsonsFamily.json', 'utf-8');
  const family = JSON.parse(familyFileContent);
  const newFamilyArr = family.map((character) => Number(character.id) === oldCharacterId ? newCharacter : character);
  console.log(newFamilyArr);
  await fs.writeFile('./src/simpsonsFamily.json', JSON.stringify(newFamilyArr));

}

async function main() {
  await readAll();
  await returnCharacter(1);
  await deleteCharacter(10, 6);
  await readAll();
  await createFamilyJson();
  await addNewCharacter(8);
  await replaceCharacter(5, 8)
}

main();