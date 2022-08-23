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

const getTotalChocolatesQuantity = async () => {
  const cacaoTrybe = await readCacaoTrybeFile();
  const data = cacaoTrybe.chocolates.length;
  return data;
}

const filterChocolates = async (name) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates
    .filter((chocolate) => chocolate.name.includes(name));
}

const createChocolate = async ({ name, brandId }) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  const newChocolate = {
    id: cacaoTrybe.nextChocolateId,
    name,
    brandId,
  };
  cacaoTrybe.chocolates.push(newChocolate);
  cacaoTrybe.nextChocolateId += 1;
  await writeCacauTrybe(cacaoTrybe);
  return newChocolate;
};

const updateChocolate = async (id, { name, brandId }) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  let newChocolate = {
    id: Number(id),
    name,
    brandId,
  };
  if (cacaoTrybe.chocolates.some((chocolate) => chocolate.id === Number(id))) {
    cacaoTrybe.chocolates.map((chocolate) => chocolate.id === id ? newChocolate : chocolate);
    await writeCacauTrybe(cacaoTrybe);
  } else {
    newChocolate = { 
      "message": "chocolate not found"
    };
  }
  return newChocolate;
};

module.exports = {
    getAllChocolates,
    getChocolateById,
    getChocolatesByBrand,
    createChocolate,
    getTotalChocolatesQuantity,
    filterChocolates,
    updateChocolate,
};