package com.ganatan.modules.profession;

import java.util.List;

import com.ganatan.mocks.profession.ProfessionRepositoryMock;

public class ProfessionRepository {

    private final Object repository;

    public ProfessionRepository(boolean useDatabase) {
        if (useDatabase) {
            this.repository = new ProfessionRepositoryMock();
        } else {
            this.repository = new ProfessionRepositoryMock();
        }
    }

    public List<Profession> getItems() {
        return ((ProfessionRepositoryMock) repository).getItems();
    }
}

