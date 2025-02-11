import pool from '../../config/database.js';

class PersonRepository {
  constructor(useDatabase) {
    console.log('00000000001:' + useDatabase);
    this.useDatabase = useDatabase;
    this.items = [
      { id: 1, name: 'Steven Spielberg', city: 'Cincinnati' },
      { id: 2, name: 'Martin Scorsese', city: 'New York' },
      { id: 3, name: 'Quentin Tarantino', city: 'Knoxville' },
      { id: 4, name: 'Christopher Nolan', city: 'London' },
      { id: 5, name: 'Francis Ford Coppola', city: 'Detroit' },
      { id: 6, name: 'James Cameron', city: 'Kapuskasing' },
      { id: 7, name: 'David Fincher', city: 'Denver' },
      { id: 8, name: 'Tim Burton', city: 'Burbank' },
      { id: 9, name: 'Clint Eastwood', city: 'San Francisco' },
      { id: 10, name: 'Wes Anderson', city: 'Houston' },
      { id: 11, name: 'Spike Lee', city: 'Atlanta' },
      { id: 12, name: 'George Lucas', city: 'Modesto' },
    ];
  }

  async getItems() {
    if (this.useDatabase) {
      try {
        const { rows } = await pool.query('SELECT * FROM person');
        return rows;
      } catch (error) {
        console.error(`Database error: ${error.message}`);
        return [];
      }
    }
    return this.items;
  }


  async getItemById(id) {
    return this.items.find((item) => item.id === id) || null;
  }

  async createItem(person) {
    const newPerson = { id: this.items.length + 1, ...person };
    this.items.push(newPerson);
    return newPerson;
  }

  async updateItem(id, updatedData) {
    const index = this.items.findIndex((item) => item.id === id);
    if (index === -1) return null;
    this.items[index] = { ...this.items[index], ...updatedData };
    return this.items[index];
  }

  async deleteItem(id) {
    const index = this.items.findIndex((item) => item.id === id);
    if (index === -1) return null;
    return this.items.splice(index, 1)[0];
  }


  // async createItem({ name, wikipedia_link, birth_date, birth_city_id }) {
  //   if (this.useDatabase) {
  //     const client = await pool.connect();
  //     try {
  //       await client.query('BEGIN');
  //       const { rows } = await client.query(
  //         'INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) VALUES ($1, $2, $3, $4) RETURNING *',
  //         [name, wikipedia_link, birth_date, birth_city_id]
  //       );
  //       await client.query('COMMIT');
  //       return rows[0];
  //     } catch (error) {
  //       await client.query('ROLLBACK');
  //       console.error(`Database error: ${error.message}`);
  //       return null;
  //     } finally {
  //       client.release();
  //     }
  //   }
  //   const newItem = { id: this.items.length + 1, name, wikipedia_link, birth_date, birth_city_id };
  //   this.items.push(newItem);
  //   return newItem;
  // }

  // async updateItem(id, updatedData) {
  //   if (this.useDatabase) {
  //     try {
  //       const keys = Object.keys(updatedData);
  //       const values = Object.values(updatedData);
  //       const query = `UPDATE person SET ${keys.map((key, index) => `${key}=$${index + 1}`).join(', ')} WHERE id=$${keys.length + 1} RETURNING *`;
  //       const { rows } = await pool.query(query, [...values, id]);
  //       return rows[0] || null;
  //     } catch (error) {
  //       console.error(`Database error: ${error.message}`);
  //       return null;
  //     }
  //   }
  //   const index = this.items.findIndex((item) => item.id === id);
  //   if (index === -1) return null;
  //   this.items[index] = { ...this.items[index], ...updatedData };
  //   return this.items[index];
  // }

  // async deleteItem(id) {
  //   if (this.useDatabase) {
  //     try {
  //       const { rows } = await pool.query('DELETE FROM person WHERE id=$1 RETURNING *', [id]);
  //       return rows[0] || null;
  //     } catch (error) {
  //       console.error(`Database error: ${error.message}`);
  //       return null;
  //     }
  //   }
  //   const index = this.items.findIndex((item) => item.id === id);
  //   if (index === -1) return null;
  //   return this.items.splice(index, 1)[0];
  // }

}

export default PersonRepository;
