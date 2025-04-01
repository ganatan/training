package com.ganatan.modules.profession;

import java.util.Map;
import java.util.Optional;

import com.ganatan.mocks.ProfessionRepositoryMock;
import com.ganatan.modules.profession.ProfessionRepositoryPg;

public class ProfessionRepository {

    private final Object repository;

    public ProfessionRepository(boolean useDatabase) {
        if (useDatabase) {
            this.repository = new ProfessionRepositoryPg();
        } else {
            this.repository = new ProfessionRepositoryMock();
        }
    }

    @SuppressWarnings("unchecked")
    public Map<String, Object> getItems(int offset, int limit) {
    	System.out.println("00000000001:ProfessionRepository");
        if (repository instanceof ProfessionRepositoryPg pg) {
        	System.out.println("00000000002:ProfessionRepository");
            return pg.getItems(offset, limit);
        }
        return ((ProfessionRepositoryMock) repository).getItems(offset, limit);
    }

    public Optional<Profession> getItemById(int id) {
        if (repository instanceof ProfessionRepositoryPg pg) {
            return pg.getItemById(id);
        }
        return ((ProfessionRepositoryMock) repository).getItemById(id);
    }

    public Profession createItem(Profession profession) {
        if (repository instanceof ProfessionRepositoryPg pg) {
            return pg.createItem(profession);
        }
        return ((ProfessionRepositoryMock) repository).createItem(profession);
    }

    public Optional<Profession> updateItem(int id, Profession updatedData) {
        if (repository instanceof ProfessionRepositoryPg pg) {
            return pg.updateItem(id, updatedData);
        }
        return ((ProfessionRepositoryMock) repository).updateItem(id, updatedData);
    }

    public boolean deleteItem(int id) {
        if (repository instanceof ProfessionRepositoryPg pg) {
            return pg.deleteItem(id);
        }
        return ((ProfessionRepositoryMock) repository).deleteItem(id);
    }

    public boolean existsByName(String name) {
        if (repository instanceof ProfessionRepositoryPg pg) {
            return pg.existsByName(name);
        }
        return ((ProfessionRepositoryMock) repository).existsByName(name);
    }
}




//package com.ganatan.modules.profession;
//
//import java.util.Map;
//import java.util.Optional;
//
//import com.ganatan.mocks.ProfessionRepositoryMock;
//import com.ganatan.modules.profession.ProfessionRepositoryPg;
//
//public class ProfessionRepository {
//
//    private final ProfessionRepositoryMock repository;
//
//    public ProfessionRepository(boolean useDatabase) {
//        if (useDatabase) {
//            this.repository = new ProfessionRepositoryPg();
//        } else {
//            this.repository = new ProfessionRepositoryMock();
//        }
//    }
//
//    public Map<String, Object> getItems(int offset, int limit) {
//        return repository.getItems(offset, limit);
//    }
//
//    public Optional<Profession> getItemById(int id) {
//        return repository.getItemById(id);
//    }
//
//    public Profession createItem(Profession profession) {
//        return repository.createItem(profession);
//    }
//
//    public Optional<Profession> updateItem(int id, Profession updatedData) {
//        return repository.updateItem(id, updatedData);
//    }
//
//    public boolean deleteItem(int id) {
//        return repository.deleteItem(id);
//    }
//
//    public boolean existsByName(String name) {
//        return repository.existsByName(name);
//    }
//}
