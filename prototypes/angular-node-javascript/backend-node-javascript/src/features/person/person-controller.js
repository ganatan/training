class PersonController {
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
}

export default PersonController;
