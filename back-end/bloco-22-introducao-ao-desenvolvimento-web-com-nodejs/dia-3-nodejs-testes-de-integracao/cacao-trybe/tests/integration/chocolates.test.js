// tests/integration/chocolates.test.js

const chai = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const chaiHttp = require('chai-http');
const app = require('../../src/app');

const { expect } = chai;

chai.use(chaiHttp);

const mockFile = JSON.stringify({
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ],
  nextChocolateId:5
});

describe('Testando a API Cacao Trybe', function () {
  beforeEach(function () {
    sinon.stub(fs.promises, 'readFile')
      .resolves(mockFile);
    sinon.stub(fs.promises, 'writeFile')
      .resolves();
  });
  afterEach(function () {
    sinon.restore();
  });
  describe('Usando o método GET em /chocolates', function () {
    it('Retorna a lista completa de chocolates!', async function () {
      const output = [
        { id: 1, name: 'Mint Intense', brandId: 1 },
        { id: 2, name: 'White Coconut', brandId: 1 },
        { id: 3, name: 'Mon Chéri', brandId: 2 },
        { id: 4, name: 'Mounds', brandId: 3 },
      ];

      const response = await chai
        .request(app)
        .get('/chocolates');
      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal(output);
    });
  });
  describe('Usando o método GET em /chocolates/:id para buscar o ID 4', function () {
    it('Retorna o chocolate Mounds', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/4');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal([
        {
          id: 4,
          name: 'Mounds',
          brandId: 3,
        }]);
    });
  });
  describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', function () {
    it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/brand/1');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal([
        {
          id: 1,
          name: 'Mint Intense',
          brandId: 1,
        },
        {
          id: 2,
          name: 'White Coconut',
          brandId: 1,
        },
      ]);
    });
  });
  describe('Usando o método GET em /chocolates/total para saber a quantidade total de chocolates', function () {
    it('Retorna a quantidade total de chocolates', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/total');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal({ chocolatesQuantity: 4 });    
    });
  });
  describe('Usando o método GET em /chocolates/search para buscar um chocolate', function () {
    it('Retorna os chocolates com Mint no nome', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/search?name=Mint');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal([{ id: 1, name: 'Mint Intense', brandId: 1 }]);    
    });
    it('Retorna um array vazio ao não encontrar nenhum chocolate', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/search?name=ZZZ');

      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal([]);
    });
  });
  describe('Usando o método PUT em /chocolates/id para alterar um chocolate', function () {
    it('Altera o chocolate com o id 1', async function () {
      const response = await chai
        .request(app)
        .put('/chocolates/1')
        .send({ 
          "name": "Mint Pretty Good",
          "brandId": 2
        });

      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal({
        "id": 1,
        "name": "Mint Pretty Good",
        "brandId": 2
      });    
    });
    it('Retorna uma mensagem de erro se não encontrar o id', async function () {
      const response = await chai
        .request(app)
        .put('/chocolates/9')
        .send({ 
          "name": "Mint Pretty Good",
          "brandId": 2
        });

      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({ 
        "message": "chocolate not found"
      });    
    });
  });
  describe('Usando o método POST em /chocolates para adicionar novo chocolate', function () {
    it('Adiciona um novo chocolate', async function () {
      const response = await chai
        .request(app)
        .post('/chocolates')
        .send({
          name: 'Mint Not So Intense',
          brandId: 2
        });
      
      expect(response.status).to.be.equal(201);
      expect(response.body.chocolate).to.deep.equal({
        id: 5,
        name: 'Mint Not So Intense',
        brandId: 2
      });
    });
  });
  describe('Usando o método DELETE em /chocolates para excluir novo chocolate', function () {
    it('Exclui o chocolate x', async function () {

    });
  });
});