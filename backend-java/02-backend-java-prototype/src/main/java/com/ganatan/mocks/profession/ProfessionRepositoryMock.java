package com.ganatan.mocks.profession;

import java.util.List;

import com.ganatan.modules.profession.Profession;

import java.util.Arrays;

public class ProfessionRepositoryMock {
    public List<Profession> getItems() {
        return Arrays.asList(
                new Profession(1, "Director"),
                new Profession(1, "Producer"),
                new Profession(1, "Screenwriter"),
                new Profession(1, "Editor")
        );
    }
}
