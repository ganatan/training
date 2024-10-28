'use strict';

const { ObjectId } = require('mongodb');

class MongoDBAdapter {
  constructor(dbClient) {
    this.dbClient = dbClient;
  }

  /*

  async getItems(req) {
    try {
      const {
        name = '',
        code = '',
        areaMin = null,
        areaMax = null,
        populationMin = null,
        populationMax = null,
        countriesNumberMin = null,
        countriesNumberMax = null,
        densityMin = null,
        densityMax = null,
        page = 1,
        limit = 10,
        sort = 'name',
      } = req.query;
  
      const validPage = page > 0 ? parseInt(page, 10) : 1;
      const validLimit = limit > 0 ? parseInt(limit, 10) : 10;
      const offset = (validPage - 1) * validLimit;
  
      const pipeline = [];
  
      const matchStage = this.buildMatchStage({
        name,
        code,
        areaMin,
        areaMax,
        populationMin,
        populationMax,
        countriesNumberMin,
        countriesNumberMax,
        densityMin,
        densityMax,
      });
      if (Object.keys(matchStage).length > 0) pipeline.push({ $match: matchStage });
  
      pipeline.push({
        $addFields: {
          density: {
            $round: [{ $divide: ['$population', { $ifNull: ['$area', 1] }] }, 5],
          },
        },
      });
  
      const sortOrder = sort.startsWith('-') ? -1 : 1;
      const sortBy = sort.replace(/^-/, '');
      pipeline.push({ $sort: { [sortBy]: sortOrder } });
  
      pipeline.push({
        $group: {
          _id: null,
          total_area_all: { $sum: '$area' },
          total_population_all: { $sum: '$population' },
          total_countries_number_all: { $sum: '$countriesNumber' },
          count_all: { $sum: 1 },
          average_density_all: {
            $round: [
              {
                $divide: [
                  { $sum: '$population' },
                  { $ifNull: [{ $sum: '$area' }, 1] },
                ],
              },
              5,
            ],
          },
        },
      });
  
      pipeline.push({
        $facet: {
          paginatedResults: [
            { $skip: offset },
            { $limit: validLimit },
          ],
          totals_pagination: [
            {
              $group: {
                _id: null,
                total_area: { $sum: '$area' },
                total_population: { $sum: '$population' },
                total_countries_number: { $sum: '$countriesNumber' },
                count: { $sum: 1 },
                average_density: {
                  $round: [
                    {
                      $divide: [
                        { $sum: '$population' },
                        { $ifNull: [{ $sum: '$area' }, 1] },
                      ],
                    },
                    5,
                  ],
                },
              },
            },
          ],
        },
      });
  
      pipeline.push({
        $project: {
          count: { $arrayElemAt: ['$count_all', 0] },
          area: { $arrayElemAt: ['$total_area_all', 0] },
          population: { $arrayElemAt: ['$total_population_all', 0] },
          countriesNumber: { $arrayElemAt: ['$total_countries_number_all', 0] },
          density: { $arrayElemAt: ['$average_density_all', 0] },
          countPagination: { $arrayElemAt: ['$totals_pagination.count', 0] },
          areaPagination: { $arrayElemAt: ['$totals_pagination.total_area', 0] },
          populationPagination: { $arrayElemAt: ['$totals_pagination.total_population', 0] },
          countriesNumberPagination: { $arrayElemAt: ['$totals_pagination.total_countries_number', 0] },
          densityPagination: { $arrayElemAt: ['$totals_pagination.average_density', 0] },
          continents: '$paginatedResults',
        },
      });

      console.log('00000000002:' + JSON.stringify(pipeline));
  
       const result = await this.dbClient.collection('continent').aggregate(pipeline).toArray();
      return this.formatResult(result[0]);

  
    } catch (error) {
      console.error('Error retrieving continents:', error);
      return null;
    }
  }
  
  buildMatchStage({
    name,
    code,
    areaMin,
    areaMax,
    populationMin,
    populationMax,
    countriesNumberMin,
    countriesNumberMax,
    densityMin,
    densityMax,
  }) {
    const matchStage = {};
  
    if (name) matchStage.name = { $regex: new RegExp(name, 'i') };
    if (code) matchStage.code = code;
    if (areaMin !== null) matchStage.area = { $gte: parseInt(areaMin, 10) };
    if (areaMax !== null) matchStage.area = { ...matchStage.area, $lte: parseInt(areaMax, 10) };
    if (populationMin !== null) matchStage.population = { $gte: parseInt(populationMin, 10) };
    if (populationMax !== null) matchStage.population = { ...matchStage.population, $lte: parseInt(populationMax, 10) };
    if (countriesNumberMin !== null) matchStage.countriesNumber = { $gte: parseInt(countriesNumberMin, 10) };
    if (countriesNumberMax !== null) matchStage.countriesNumber = { ...matchStage.countriesNumber, $lte: parseInt(countriesNumberMax, 10) };
  
    return matchStage;
  }
  
  formatResult(result) {
    const {
      count,
      area,
      population,
      countriesNumber,
      density,
      countPagination,
      areaPagination,
      populationPagination,
      countriesNumberPagination,
      densityPagination,
      continents,
    } = result;
  
    return {
      paginationTotals: {
        count: countPagination,
        area: areaPagination,
        population: populationPagination,
        countriesNumber: countriesNumberPagination,
        density: densityPagination,
      },
      allTotals: {
        count: count,
        area: area,
        population: population,
        countriesNumber: countriesNumber,
        density: density,
      },
      continents: continents,
    };
  }
*/  


async getItems(req) {
  try {
    const {
      name = '',
      code = '',
      areaMin = null,
      areaMax = null,
      populationMin = null,
      populationMax = null,
      countriesNumberMin = null,
      countriesNumberMax = null,
      densityMin = null,
      densityMax = null,
      page = 1,
      limit = 10,
      sort = 'name',
    } = req.query;

    const validPage = page > 0 ? parseInt(page, 10) : 1;
    const validLimit = limit > 0 ? parseInt(limit, 10) : 10;
    const offset = (validPage - 1) * validLimit;

    // Étape 1 : Construire les filtres de base pour la recherche
    const filter = {};
    if (name) filter.name = { $regex: new RegExp(name, 'i') };
    if (code) filter.code = code;
    if (areaMin !== null || areaMax !== null) {
      filter.area = {};
      if (areaMin !== null) filter.area.$gte = parseInt(areaMin, 10);
      if (areaMax !== null) filter.area.$lte = parseInt(areaMax, 10);
    }
    if (populationMin !== null || populationMax !== null) {
      filter.population = {};
      if (populationMin !== null) filter.population.$gte = parseInt(populationMin, 10);
      if (populationMax !== null) filter.population.$lte = parseInt(populationMax, 10);
    }
    if (countriesNumberMin !== null || countriesNumberMax !== null) {
      filter.countriesNumber = {};
      if (countriesNumberMin !== null) filter.countriesNumber.$gte = parseInt(countriesNumberMin, 10);
      if (countriesNumberMax !== null) filter.countriesNumber.$lte = parseInt(countriesNumberMax, 10);
    }

    // Étape 2 : Appliquer le tri et la pagination
    const sortOrder = sort.startsWith('-') ? -1 : 1;
    const sortBy = sort.replace(/^-/, '');


    console.log('00000000001:');

    const query = {
      type: 'find',
      collectionName: 'continent',
      filter: {},
    };
    const toto = await this.dbClient.query(query);
    console.log('00000000002:' + JSON.stringify(toto));

    const continents2 = await this.dbClient.collection('continent').find().toArray();
    console.log('00000000003:' + JSON.stringify(continents2));

    const continents = await this.dbClient
      .collection('continent')
      .find(filter)
      .sort({ [sortBy]: sortOrder })
      .skip(offset)
      .limit(validLimit)
      .toArray();

    // Calcul de la densité pour chaque document
    continents.forEach(continent => {
      continent.density = parseFloat((continent.population / (continent.area || 1)).toFixed(5));
    });

    // Étape 3 : Calculer les totaux globaux
    

    const allContinents = await this.dbClient.collection('continent').find(filter).toArray();
    const totalStats = this.calculateTotals(allContinents);

    // Étape 4 : Calculer les totaux pour la page courante
    const pageStats = this.calculateTotals(continents);

    // Formater le résultat final
    return {
      paginationTotals: pageStats,
      allTotals: totalStats,
      continents: continents,
    };

  } catch (error) {
    console.error('Error retrieving continents:', error);
    return null;
  }
}

// Méthode pour calculer les totaux pour une liste de continents
calculateTotals(continents) {
  const total_area = continents.reduce((sum, c) => sum + (c.area || 0), 0);
  const total_population = continents.reduce((sum, c) => sum + (c.population || 0), 0);
  const total_countriesNumber = continents.reduce((sum, c) => sum + (c.countriesNumber || 0), 0);
  const count = continents.length;
  const average_density = count > 0 ? parseFloat((total_population / (total_area || 1)).toFixed(5)) : 0;

  return {
    count,
    area: total_area,
    population: total_population,
    countriesNumber: total_countriesNumber,
    density: average_density,
  };
}

  async getItem(index) {
    if (!ObjectId.isValid(index)) {
      return null;
    }

    const query = {
      type: 'find',
      collectionName: 'continent',
      filter: { _id: new ObjectId(index) },
    };

    const result = await this.dbClient.query(query);
    if (result && result.length > 0) {
      const data = result[0];

      return {
        id: data._id,
        code: data.code,
        name: data.name,
        wikipediaLink: data.wikipedia_link,
        area: data.area,
        population: data.population,
        countriesNumber: data.countries_number,
      };
    }

    return null;
  }

  async createItem(continentData) {
    const query = {
      type: 'insert',
      collectionName: 'continents',
      data: {
        code: continentData.code,
        name: continentData.name,
      },
    };
    const result = await this.dbClient.query(query);

    return result;
  }

  async updateItem(id, continentData) {
    const query = {
      type: 'update',
      collectionName: 'continents',
      filter: { _id: id },
      data: {
        code: continentData.code,
        name: continentData.name,
      },
    };

    return await this.dbClient.query(query);
  }

  async deleteItem(id) {
    const query = {
      type: 'delete',
      collectionName: 'continents',
      filter: { _id: id },
    };

    return await this.dbClient.query(query);
  }
}

module.exports = MongoDBAdapter;
