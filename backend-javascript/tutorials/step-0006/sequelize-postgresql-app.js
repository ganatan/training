const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

// Configuration de la connexion Sequelize avec PostgreSQL
const sequelize = new Sequelize('angular_backend', 'postgres', 'Trustno1', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

const Continent = sequelize.define('Continent', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  wikipediaLink: {
    type: DataTypes.STRING,
    defaultValue: '',
    field: 'wikipedia_link',
  },
  area: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  population: {
    type: DataTypes.BIGINT,
    defaultValue: 0,
  },
  countriesNumber: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    field: 'countries_number', // Correspond au nom réel de la colonne
  },
}, {
  tableName: 'continent', // Nom de la table dans PostgreSQL
  timestamps: false,      // Désactive createdAt et updatedAt
});

// Création de l'application Express
const app = express();
app.use(express.json());

// Point de terminaison pour récupérer tous les continents
app.get('/continents', async (req, res) => {
  console.log('00000000001');
  try {
    const continents = await Continent.findAll();
    res.json({
      paginationTotals: {
        count: continents.length,
        area: continents.reduce((acc, cont) => acc + cont.area, 0),
        population: continents.reduce((acc, cont) => acc + cont.population, 0),
        countriesNumber: continents.reduce((acc, cont) => acc + cont.countriesNumber, 0),
        density: (continents.reduce((acc, cont) => acc + cont.population, 0) / continents.reduce((acc, cont) => acc + cont.area, 0)).toFixed(2),
      },
      allTotals: {
        count: continents.length,
        area: continents.reduce((acc, cont) => acc + cont.area, 0),
        population: continents.reduce((acc, cont) => acc + cont.population, 0),
        countriesNumber: continents.reduce((acc, cont) => acc + cont.countriesNumber, 0),
        density: (continents.reduce((acc, cont) => acc + cont.population, 0) / continents.reduce((acc, cont) => acc + cont.area, 0)).toFixed(2),
      },
      continents,
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des continents:', error);
    res.status(500).json({ message: 'Erreur du serveur' });
  }
});

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connexion établie avec succès.');

    await sequelize.sync();

    app.listen(9000, () => {
      console.log('Serveur démarré sur http://localhost:9000');
    });
  } catch (error) {
    console.error('Impossible de se connecter à la base de données:', error);
  }
};

startServer();
