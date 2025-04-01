package com.ganatan.mocks;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.ganatan.modules.profession.Profession;

public class ProfessionRepositoryMock {

    private final List<Profession> items = new ArrayList<>();
    private int nextId = 1;

    public ProfessionRepositoryMock() {
        items.add(new Profession(nextId++, "Director"));
        items.add(new Profession(nextId++, "Producer"));
        items.add(new Profession(nextId++, "Screenwriter"));
        items.add(new Profession(nextId++, "Editor"));
    }

    public List<Profession> getItems() {
        return new ArrayList<>(items);
    }

    public Optional<Profession> getItemById(int id) {
        return items.stream().filter(item -> item.getId() == id).findFirst();
    }

    public Profession createItem(Profession profession) {
        Profession newItem = new Profession(nextId++, profession.getName());
        items.add(newItem);
        return newItem;
    }

    public Optional<Profession> updateItem(int id, Profession updatedData) {
        Optional<Profession> existing = getItemById(id);
        existing.ifPresent(item -> item.setName(updatedData.getName()));
        return existing;
    }

    public boolean deleteItem(int id) {
        return items.removeIf(item -> item.getId() == id);
    }
}
