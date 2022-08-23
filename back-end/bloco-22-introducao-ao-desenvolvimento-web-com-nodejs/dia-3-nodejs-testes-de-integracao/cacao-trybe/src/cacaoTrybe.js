// src/cacaoTrybe.js

const fs = require('fs').promises;
const { join } = require('path');

const readCacaoTrybeFile = async () => {
  const path = '/files/cacaoTrybeFile.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const writeCacauTrybe = async (content) => {
  const path = '/files/cacaoTrybeFile.json';
  try {
    const contentFile = await fs.writeFile(join(__dirname, path), JSON.stringify(content));
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const getAllChocolates = async () => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates
    .filter((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
};

const createChocolate = async ({ name, brandId }) => {
  console.log('func 1');
  const cacaoTrybe = await readCacaoTrybeFile();
  console.log(cacaoTrybe);
  const newChocolate = {
    id: cacaoTrybe.nextChocolateId,
    name,
    brandId,
  };
  console.log('func 3');
  cacaoTrybe.chocolates.push(newChocolate);
  console.log('func 4');
  cacaoTrybe.nextChocolateId += 1;
  console.log('func 5');
  await writeCacauTrybe(cacaoTrybe);
  console.log('func 6');
  return newChocolate;
};

module.exports = {
    getAllChocolates,
    getChocolateById,
    getChocolatesByBrand,
    createChocolate,
};