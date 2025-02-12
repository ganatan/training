class CityController {
  constructor(service) {
    this.service = service;
  }

  getItems = async (req, res) => {
    try {
      const items = await this.service.getItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  getItemById = async (req, res) => {
    try {
      const item = await this.service.getItemById(parseInt(req.params.id));
      if (!item) return res.status(404).json({ error: 'Person not found' });
      res.json(item);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  createItem = async (req, res) => {
    try {
      const newItem = await this.service.createItem(req.body);
      res.status(201).json(newItem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  updateItem = async (req, res) => {
    try {
      const updatedItem = await this.service.updateItem(parseInt(req.params.id), req.body);
      if (!updatedItem) return res.status(404).json({ error: 'Person not found' });
      res.json(updatedItem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  deleteItem = async (req, res) => {
    try {
      const deletedItem = await this.service.deleteItem(parseInt(req.params.id));
      if (!deletedItem) return res.status(404).json({ error: 'Person not found' });
      res.json(deletedItem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}

export default CityController;
