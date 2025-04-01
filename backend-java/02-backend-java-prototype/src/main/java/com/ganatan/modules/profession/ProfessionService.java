package com.ganatan.modules.profession;

import java.util.List;
import java.util.Optional;

public class ProfessionService {

    private final ProfessionRepository repository;

    public ProfessionService(ProfessionRepository repository) {
        this.repository = repository;
    }

    public List<Profession> getItems() {
        return repository.getItems();
    }

    public Optional<Profession> getItemById(int id) {
        return repository.getItemById(id);
    }

    public Profession createItem(Profession profession) {
        return repository.createItem(profession);
    }

    public Optional<Profession> updateItem(int id, Profession updatedData) {
        return repository.updateItem(id, updatedData);
    }

    public boolean deleteItem(int id) {
        return repository.deleteItem(id);
    }
}
