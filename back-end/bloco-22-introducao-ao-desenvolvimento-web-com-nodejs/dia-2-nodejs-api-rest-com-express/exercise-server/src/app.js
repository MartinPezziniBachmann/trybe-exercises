const express = require('express');

const app = express();

app.use(express.json());

const activities = [
  {
    id: 1,
    description: 'Banho no cachorro',
    status: 'A fazer',
  },
  {
    id: 2,
    description: 'Cortar a grama',
    status: 'A fazer',
  },
  {
    id: 3,
    description: 'Estudar JavaScript',
    status: 'Feito',
  },
];

app.get('/myActivities/:id', (req, res) => {
  const { id } = req.params;
  const selectedActivity = activities.find((activity) => activity.id === Number(id));
  res.status(200).json({selectedActivity});
})

app.get('/myActivities', (req, res) => {
  res.status(200).json({activities});
})

app.get('/filter/myActivities', (req, res) => {
  const { status } = req.query;
  const query = status.replace('-', ' ');
  const filteredArray = activities.filter((activity) => activity.status.toLowerCase() === query);
  res.status(200).json({filteredArray});
})

app.get('/search/myActivities', (req, res) => {
  const { q } = req.query;
  const query = q.replace('-', ' ');
  const filteredArray = activities.filter((activity) => activity.description.toLowerCase().includes(query));
  res.status(200).json({filteredArray});
})

module.exports = app;
