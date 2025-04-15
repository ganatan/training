import Profession from './profession.model.pg-sequelize.js';

class PgSequelizeRepository {
  async getItems() {
    console.log('00000000001:getItems');
    const rows = await Profession.findAll({ raw: true });
    return {
      metadata: {
        pagination: {
          currentPage: 1,
          perPage: rows.length,
          totalItems: rows.length,
          totalPages: 1,
        },
      },
      data: rows,
    };
  }

  async getItemById(id) {
    return await Profession.findByPk(id, { raw: true });
  }

  async createItem(data) {
    const created = await Profession.create(data);
    return created.get({ plain: true });
  }

  async updateItem(id, data) {
    await Profession.update(data, { where: { id } });
    return await this.getItemById(id);
  }

  async deleteItem(id) {
    const item = await this.getItemById(id);
    if (!item) return null;
    await Profession.destroy({ where: { id } });
    return item;
  }

  async existsByName(name) {
    const found = await Profession.findOne({
      where: sequelize.where(
        sequelize.fn('LOWER', sequelize.col('name')),
        name.toLowerCase()
      ),
    });
    return !!found;
  }
}

export default PgSequelizeRepository;
