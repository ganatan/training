
package com.ganatan.modules.profession;

import java.util.List;

public class ProfessionService {

    private final ProfessionRepository repository;

    public ProfessionService(ProfessionRepository repository) {
        this.repository = repository;
    }

    public List<Profession> getItems() {
        return repository.getItems();
    }
}
